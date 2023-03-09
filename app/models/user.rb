class User < ApplicationRecord
    attr_reader :password

    validates :email, :session_token, :password_digest, :firstName, :lastName, :birthdate, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :posts,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Post
    
    has_many :comments,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Comment

    has_many :likes,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :Like

    has_many :liked_posts,
        through: :likes,
        source: :likeable,
        source_type: 'Post'

    has_many :liked_comments,
        through: :likes,
        source: :likeable,
        source_type: 'Comment'

    has_many :friend_requests_outgoing,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Friend

    has_many :friend_requests_incoming,
        primary_key: :id,
        foreign_key: :friend_id,
        class_name: :Friend

    has_one_attached :profilePicUrl
    has_one_attached :coverPicUrl

    def friends
        friends = []
        self.friend_requests_outgoing.each do |friendee|
            friend = Friend.find_by(user_id: friendee.id, friend_id: self.id)
            friends << friendee.friend_requestee if friend
        end
        return friends
    end

    def all_incoming_friend_requests
        requests = []
        self.friend_requests_incoming.each do |request|
            friend = Friend.find_by(user_id: self.id, friend_id: request.user_id)
            requests << request.friend_requester if !friend
        end
        debugger
    end

    def self.find_by_credentials(email, password)
        # Class method which we get user where their email == the email param we got
        @emailUser = User.find_by(email: email)
        return nil if !@emailUser
        # Pass in the password to see if their password is correct, if it is then return the User instance
        if @emailUser.is_password?(password)
            return @emailUser
        else
            return nil
        end
    end

    def password=(password)
        @password = password
        # Salting and other stuff to basically make the password harder to guess and make it the password_digest so we never actually know the user's password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        # Creating a password_digest with the BCrypt which should see if it is == to the manual creation of the password_digest
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        generate_distinct_session_token
        # Saving the new session token to the database so the old one is gone after a session is done
        # Will this be nil on log out? So what happens when we save nil, this type of situation seems familiar
        save!
        self.session_token
    end

    private

    def ensure_session_token
        generate_distinct_session_token if !self.session_token
    end

    def new_session_token
        # Creating a brand new session token that is randomized
        SecureRandom.urlsafe_base64
    end

    def generate_distinct_session_token
        # Makes a new session token
        self.session_token = new_session_token
        # This is to make sure we create a new session token unique from others
        # What's going on line by line?
        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end
        self.session_token
    end
end
