json.set! @post.id do
    likeIds = []

    json.partial! 'api/posts/post', post: @post
    json.likeIds do
        json.array! likeIds
    end
end