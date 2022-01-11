json.extract! post, :id, :post, :user_id, :postPhotoUrl, :created_at, :updated_at
json.extract! post.user, :firstName, :lastName, :profilePicUrl

if post.user.profilePicUrl.attached?
    json.profilePicUrl url_for(post.user.profilePicUrl)
else
    json.profilePicUrl image_url('Facenove_Demo_ProfPic.png')
end

if post.postPhotoUrl.attached?
    json.postPhotoUrl url_for(post.profilePicUrl)
end