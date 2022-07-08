json.set! @post.id do
    likeIds = []

    if !@likes.nil?
        json.likes do
            @likes.each do |like|
                if @post.id == like.likeable_id
                    likeIds << like.id
                    json.set! like.id do
                        json.partial! 'api/likes/like', like: like
                    end
                end
            end
        end
    end

    json.partial! 'api/posts/post', post: @post
    json.likeIds do
        json.array! likeIds
    end
end