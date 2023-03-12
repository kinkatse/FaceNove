json.friend do
    if @friend
        json.set! @friend.id do
            json.partial! 'api/friends/friend', user: @friend
        end
    end
end

json.request do
    json.extract! @request, :id
    if @friend
        json.is_accepted true
    else
        json.is_accepted false
    end
end