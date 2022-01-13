# json.extract! @post, :id, :post, :user_id
# json.partial! 'api/posts/post', post: @post

@posts.each do |post|
    json.partial! 'api/posts/post', post: post
end