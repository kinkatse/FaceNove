class Post < ApplicationRecord
    validates :body, :user_id, presence: true

    has_many :likes,
        as: :likeable
        # dependent: :destroy

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
    
end