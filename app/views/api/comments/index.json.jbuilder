@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :user_id, :post_id, :created_at, :updated_at
        json.extract! comment.author, :firstName, :lastName, :profilePicUrl
        
        if comment.author.profilePicUrl.attached?
            json.profilePicUrl url_for(comment.author.profilePicUrl)
        else
            json.profilePicUrl image_url('Facenove_Demo_ProfPic.png')
        end
    end
end

# if comment.commentPhotoUrl.attached?
#     json.commentPhotoUrl url_for(comment.commentPhotoUrl)
# end