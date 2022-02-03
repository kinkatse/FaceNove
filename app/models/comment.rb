class Comment < ApplicationRecord
    validates :body, :user_id, :post_id, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :parent_post,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Post

    has_many :likes,
        primary_key: :id,
        foreign_key: :comment_id,
        class_name: :Like

    # has_one_attached :commentPhotoUrl
end