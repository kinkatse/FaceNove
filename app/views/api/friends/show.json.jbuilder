json.friends do
    if @friend
        json.set! @friend.id do
            json.partial! 'api/friends/friend', user: @friend
        end
    end
end