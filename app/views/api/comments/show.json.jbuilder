json.set! @comment.id do
    likeIds = []

    if !@likes.nil?
        json.likes do
            @likes.each do |like|
                if @comment.id == like.likeable_id
                    likeIds << like.id
                    json.set! like.id do
                        json.partial! 'api/likes/like', like: like
                    end
                end
            end
        end
    end

    json.partial! 'api/comments/comment', comment: @comment
    json.likeIds do
        json.array! likeIds
    end
end