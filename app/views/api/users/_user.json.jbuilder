json.extract! user, :id, :email, :firstName, :lastName, :bio, :birthdate, :gender, :education, :hometown, :work, :relationship, :website, :profilePicUrl, :coverPicUrl, :created_at, :updated_at

profPic = user.profilePicUrl
coverPic = user.coverPicUrl

if profPic.attached?
    json.profilePicUrl url_for(profPic)
else
    json.profilePicUrl image_url('Facenove_Demo_ProfPic.png')
end

if coverPic.attached?
    json.coverPicUrl url_for(coverPic)
else
    json.coverPicUrl image_url('Facenove_Demo_Background.png')
end