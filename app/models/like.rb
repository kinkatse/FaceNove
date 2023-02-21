class Like < ApplicationRecord
    validates :liker_id, uniqueness: { scope: [:likeable_id, :likeable_type] }

    belongs_to :likeable,
        polymorphic: true

    belongs_to :liker,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :User

    def self.find_post_likes(posts)
        # postIds = posts.map! { |post| post.user_id }
        # debugger
        # Like.where(likeable_type: "Post").where(likeable_id: postIds)
        # debugger
        # posts.likes
    end

end