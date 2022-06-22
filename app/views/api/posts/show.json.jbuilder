# json.extract! @post, :id, :post, :user_id
# json.partial! 'api/posts/post', post: @post

json.set! @post.id do
    json.partial! 'api/posts/post', post: @post
end