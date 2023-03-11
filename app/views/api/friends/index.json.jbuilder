# New plan of action, we will have a friendship state so we don't need to
# update the users slice of state which makes things a little messier
# This friendship slice of state will contain friends which are these
# user objects with only the first name, last name and profile pic so its
# not pulling all the users data. Then this slice of state will also contain
# friend requests which is only visable for the current user (for notification)
# Since naturally, you wouldn't be able to see friend requests for another user
# So we won't need to change too much about how users slice of state is handled
# and don't need to pull the requests along each time either anymore
# Only caviat is that friends will contain the current users friends most the time
# but if we go to another users page, we need to make sure the friends slice of
# state reflects the user's friends and not the current user's.

json.friends do
    @friends.each do |friend|
        json.set! friend.id do
            json.partial! 'api/friends/friend', user: friend
            friend_accepted = @friends_since.select { |request| (request.user_id == friend.id || request.friend_id == friend.id) }
            json.friends_since friend_accepted[0].created_at
        end
    end
end

json.requests do
    @requests.each do |request|
        requester = @requesters.select {|requester| requester.id == request.user_id}[0]
        json.set! request.id do
            json.partial! 'api/friends/friend', user: requester
            # json.created_at request.created_at
            json.extract! request, :created_at
        end
    end
end