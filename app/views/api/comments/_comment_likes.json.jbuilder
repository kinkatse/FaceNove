# likes.each do |like|
#     likeIds << like.id
#     json.set! like.id do
#         json.partial! 'api/likes/like', like: like
#     end
# end