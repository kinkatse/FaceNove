@comments.each do |comment|
    likeIds = []

    json.likes do
        comment.likes.each do |like|
            likeIds << like.id
            json.set! like.id do
                json.partial! 'api/likes/like', like: like
            end
        end
    end 

    json.comments do
        json.set! comment.id do
            json.partial! 'api/comments/comment', comment: comment
            json.likeIds do
                json.array! likeIds
            end
        end
    end
end