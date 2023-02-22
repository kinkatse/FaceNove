
json.extract! comment, :id, :body, :user_id, :post_id, :created_at, :updated_at
json.extract! comment.author, :firstName, :lastName, :profilePicUrl

profPic = comment.author.profilePicUrl

if profPic.attached?
    json.profilePicUrl url_for(profPic)
else
    json.profilePicUrl image_url('Facenove_Demo_ProfPic.png')
end

# if comment.commentPhotoUrl.attached?
#     json.commentPhotoUrl url_for(comment.commentPhotoUrl)
# end