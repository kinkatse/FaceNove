# Passing likes since it saves time instead of having to fetch likes
# each time we are on the frontend, we pass posts with all their likes

@posts.each do |post|
    likeIds = []

    # json.likes do
    #     @likes.each do |like|
    #         if post.id == like.likeable_id
    #             likeIds << like.id
    #             json.set! like.id do
    #                 json.partial! 'api/likes/like', like: like
    #             end
    #         end
    #     end
    # end
    # json.likes do
    #     json.partial! 'api/posts/post_likes', post: post, likes: @likes, likeIds: likeIds
    # end

    json.likes do
        @posts.each do |post|
            post.likes.each do |like|
                json.set! like.id do
                    likeIds << like.id
                    json.partial! 'api/likes/like', like: like
                end
            end
        end
    end

    # likes.each do |like|
    #     if post.id == like.likeable_id
    #         likeIds << like.id
    #         json.set! like.id do
    #             json.partial! 'api/likes/like', like: like
    #         end
    #     end
    # end

    json.posts do
        json.set! post.id do
            json.partial! 'api/posts/post', post: post
            json.likeIds do
                json.array! likeIds
            end
        end
    end
end