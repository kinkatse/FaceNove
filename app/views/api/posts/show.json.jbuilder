json.set! @post.id do
    likeIds = []

    if !@post.likes.empty?
        @post.likes.each do |like|
            likeIds << like.id
        end
    end

    json.partial! 'api/posts/post', post: @post
    json.likeIds do
        json.array! likeIds
    end
end