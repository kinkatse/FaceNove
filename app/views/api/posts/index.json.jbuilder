@posts.each do |post|
    likeIds = []

    json.likes do
        post.likes.each do |like|
            likeIds << like.id
            json.set! like.id do
                json.partial! 'api/likes/like', like: like
            end
        end
    end
    json.posts do
        json.set! post.id do
            json.partial! 'api/posts/post', post: post
            json.likeIds do
                json.array! likeIds
            end
        end
    end
end