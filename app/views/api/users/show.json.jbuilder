# json.extract! @emailUser, :id, :email, :firstName, :lastName, :bio, :birthdate, :gender, :education, :hometown, :work, :relationship, :website, :profilePicUrl, :coverPicUrl
json.user do
    json.partial! 'api/users/user', user: @emailUser
end

if @postsWithPhotos.nil?
    json.posts nil
else
    @postsWithPhotos.each do |post|
        likeIds = []

        if !post.likes.empty?
            post.likes.each do |like|
                likeIds << like.id
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
end