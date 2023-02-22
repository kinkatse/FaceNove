json.extract! post, :id, :body, :user_id, :postPhotoUrl, :created_at, :updated_at
json.extract! post.author, :firstName, :lastName, :profilePicUrl

profPic = post.author.profilePicUrl
postPhoto = post.postPhotoUrl

if profPic.attached?
    json.profilePicUrl url_for(profPic)
else
    json.profilePicUrl image_url('Facenove_Demo_ProfPic.png')
end

if postPhoto.attached?
    json.postPhotoUrl url_for(postPhoto)
end