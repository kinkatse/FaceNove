json.extract! user, :id, :email, :firstName, :lastName, :bio, :birthdate, :gender, :education, :hometown, :work, :relationship, :website, :profilePicUrl, :coverPicUrl

if user.profilePicUrl.attached?
    json.profilePicUrl url_for(user.profilePicUrl)
else
    json.profilePicUrl image_url('Facenove_Demo_ProfPic.png')
end

if user.coverPicUrl.attached?
    json.coverPicUrl url_for(user.coverPicUrl)
else
    json.coverPicUrl image_url('Facenove_Demo_Background.png')
end