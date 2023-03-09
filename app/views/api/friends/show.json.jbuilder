json.friends do
    json.set! @friend.id do
        json.partial! 'api/friends/friend', user: @friend
    end
end

json.requests do
    json.set! @request.id do
        json.partial! 'api/friends/friend', user: @requester
        json.extract! @request, :created_at
    end
end