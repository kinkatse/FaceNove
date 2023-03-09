json.extract! friend, :id, :firstName, :lastName, :profilePicUrl

profPic = friend.profilePicUrl

if profPic.attached?
    json.profilePicUrl url_for(profPic)
else
    json.profilePicUrl image_url('Facenove_Demo_ProfPic.png')
end
