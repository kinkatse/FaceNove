json.set! @comment.id do
    likeIds = []

    json.partial! 'api/comments/comment', comment: @comment
    json.likeIds do
        json.array! likeIds
    end
end