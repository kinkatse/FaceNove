# likes.each do |like|
#     if post.id == like.likeable_id
#         likeIds << like.id
#         json.set! like.id do
#             json.partial! 'api/likes/like', like: like
#         end
#     end
# end