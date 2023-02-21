class Post < ApplicationRecord
    validates :body, :user_id, presence: true

    has_many :likes,
        as: :likeable,
        dependent: :destroy

    belongs_to :author,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :comments,
        dependent: :destroy,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Comment

    has_one_attached :postPhotoUrl

    def self.find_posts(userIds)
        userIds.map!(&:to_i)
        # Post.select(:id, :body, :user_id).where("user_id IN (?)", userIds)
        # debugger
        Post.where(user_id: userIds).includes(:likes)
    end

    # def find_post_likes(posts)
    # end

    # def self.post_likes(likeIds)
    #     Post.includes(:likes)
    # end
    
end