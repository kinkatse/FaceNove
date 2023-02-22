json.extract! like, :id, :liker_id, :likeable_type, :likeable_id
json.extract! like.liker, :firstName, :lastName, :profilePicUrl

profPic = like.liker.profilePicUrl

if profPic.attached?
    json.profilePicUrl url_for(profPic)
else
    json.profilePicUrl image_url('Facenove_Demo_ProfPic.png')
end

# if post.postPhotoUrl.attached?
#     json.postPhotoUrl url_for(post.postPhotoUrl)
# end