json.friends do
    if @friend
        json.set! @friend.id do
            json.partial! 'api/friends/friend', user: @friend
        end
    end
end

# json.requests do
#     json.set! @request.id do
#         json.partial! 'api/friends/friend', user: @requester
#         json.extract! @request, :created_at
#     end
# end

# Requests may not be necessary since this is a request made by
# the current user, and the only requests we see are our own