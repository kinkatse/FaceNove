json.set! @comment.id do
    likeIds = []

    if !@comment.likes.empty?
        @comment.likes.each do |like|
            likeIds << like.id
        end
    end

    json.partial! 'api/comments/comment', comment: @comment
    json.likeIds do
        json.array! likeIds
    end
end