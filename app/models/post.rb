class Post < ApplicationRecord
    validates :post, :userId, presence: true

end