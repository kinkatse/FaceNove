class User < ApplicationRecord
    attr_reader :password

    validates :email, :session_token, :password_digest, :firstName, :lastName, :birthdate, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    # has_one_attached :profilePicUrl
    # has_one_attached :coverPicUrl

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
    end

    private

    def ensure_session_token
    end

    def new_session_token
    end

    def generate_distinct_session_token
    end

end
