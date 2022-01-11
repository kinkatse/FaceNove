class Post < ApplicationRecord
    validates :post, :user_id, presence: true

    belongs_to: :author,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_one_attached :postPhotoUrl
end