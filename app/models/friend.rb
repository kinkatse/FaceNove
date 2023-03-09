class Friend < ApplicationRecord
    validates :user_id, uniqueness: { scope: [:friend_id] }
    validates :friend_id, uniqueness: { scope: [:user_id] }

    belongs_to :friend_requester,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :friend_requestee,
        primary_key: :id,
        foreign_key: :friend_id,
        class_name: :User
        

end