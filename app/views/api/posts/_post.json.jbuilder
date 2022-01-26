json.extract! post, :id, :body, :user_id, :postPhotoUrl, :created_at, :updated_at
json.extract! post.author, :firstName, :lastName, :profilePicUrl

if post.author.profilePicUrl.attached?
    json.profilePicUrl url_for(post.author.profilePicUrl)
else
    json.profilePicUrl image_url('Facenove_Demo_ProfPic.png')
end

if post.postPhotoUrl.attached?
    json.postPhotoUrl url_for(post.postPhotoUrl)
end