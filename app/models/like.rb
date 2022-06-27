class Like < ApplicationRecord
    validates :liker_id, :post_id

    belongs_to :likeable,
        polymorphic: true

    belongs_to :liker,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :User

    # belongs_to :post,
    #     dependent: :destroy,
    #     primary_key: :id,
    #     foreign_key: :post_id,
    #     class_name: :Post

    # belongs_to :comment,
    #     dependent: :destroy,
    #     primary_key: :id,
    #     foreign_key: :comment_id,
    #     class_name: :Comment

end