json.likes do
    @likes.each do |like|
        json.set! like.id do
            json.partial! 'api/likes/like', like: like
        end
    end
end

json.posts do
    @posts.each do |post|
        likeIds = []
        post.likes.each do |like|
            likeIds << like.id
        end

        json.set! post.id do
            json.partial! 'api/posts/post', post: post
            json.likeIds do
                json.array! likeIds
            end
        end
    end
end

# json.comments do
#     @comments.each do |comment|
#         json.set! comment.id do
#             json.partial! 'api/comments/comment', comment: comment
#         end
#     end
# end