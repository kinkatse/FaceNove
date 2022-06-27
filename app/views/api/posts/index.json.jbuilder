json.posts do
    @posts.each do |post|
        json.set! post.id do
            json.partial! 'api/posts/post', post: post
        end
    end
end

# Passing likes since it saves time instead of having to fetch likes
# each time we are on the frontend, we pass posts with all their likes
if @likes
    json.likes do
        @likes.each do |like|
            json.set! like.id do
                json.partial! 'api/likes/like', like: like
            end
        end
    end
end