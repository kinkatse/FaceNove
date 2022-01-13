# json.extract! @post, :id, :post, :user_id
# json.partial! 'api/posts/post', post: @post

@posts.each do |post|
    json.set! post.id do
        # json.partial! 'api/posts/post', post: post
        # json.extract! post, :id, :post, :user_id, :postPhotoUrl, :created_at, :updated_at
        json.extract! post, :id, :post, :user_id, :created_at, :updated_at
        json.extract! post.author, :firstName, :lastName, :profilePicUrl
        if post.author.profilePicUrl.attached?
            json.profilePicUrl url_for(post.author.profilePicUrl)
        else
            json.profilePicUrl image_url('Facenove_Demo_ProfPic.png')
        end
    end
end