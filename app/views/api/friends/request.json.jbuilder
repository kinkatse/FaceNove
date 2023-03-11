json.requests do
    @requests.each do |request|
        requester = @requesters.select {|requester| requester.id == request.user_id}[0]
        json.set! request.id do
            json.partial! 'api/friends/friend', user: requester
            json.extract! request, :created_at
        end
    end
end