class Comment < ApplicationRecord
    validates :body, :user_id, :post_id, presence: true

    has_many :likes,
        as: :likeable,
        dependent: :destroy

    belongs_to :author,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :parent_post,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Post

    # has_one_attached :commentPhotoUrl

end