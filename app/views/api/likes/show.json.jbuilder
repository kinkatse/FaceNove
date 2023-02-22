json.set! @like.id do
    json.extract! @like, :id, :liker_id, :likeable_type, :likeable_id
    json.extract! @like.liker, :firstName, :lastName
end