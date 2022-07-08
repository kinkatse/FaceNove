@comments.each do |comment|
    likeIds = []

    # json.likes do
    #     @likes.each do |like|
    #         if comment.id == like.likeable_id
    #             likeIds << like.id
    #             json.set! like.id do
    #                 json.partial! 'api/likes/like', like: like
    #             end
    #         end
    #     end
    # end

    json.likes do
        json.partial! 'api/comments/comment_likes', comment: comment, likes: @likes, likeIds: likeIds
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