class Post < ApplicationRecord
    validates :body, :user_id, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :comments,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Comment

    has_one_attached :postPhotoUrl
end