# class Api::CommentsController < ApplicationController

#     def create
#         @comment = Comment.new(comment_params)
#         if @comment.save
#             self.index
#         else
#             render json: @comment.errors.full_messages, status: 422
#         end
#     end

#     def index
#         if params[:isUserComments]
#             if params[:user_id]
#                 @user = User.find_by(id: params[:user_id].to_i)
#             else
#                 @user = User.find_by(id: comment_params[:user_id].to_i)
#             end
#             @comments = @user.comments
#             # @post would be from destroy
#         elsif @post
#             @comments = @post.comments
#         elsif params[:isPostComments] && !@post
#             if params[:post_id]
#                 @post = Post.find_by(id: params[:post_id].to_i)
#             else
#                 @post = Post.find_by(id: comment_params[:post_id].to_i)
#             end
#             @comments = @post.comments
#         end
#         render :index
#     end

#     def show
#         # if params[:action] == "update" || params[:action] == "create"
#         #     @user = User.find_by(id: post_params[:user_id].to_i)
#         # elsif params[:action] == "destroy"
#         #     @user = User.find_by(id: @post.user_id)
#         # else
#         #     @user = User.find_by(id: params[:id])
#         # end

#         # @userComments = @user.comments
#         # @postComments = @post.comments
#         # @comment = Comment.find_by(id: params[:id])
#         # if @comments
#         #     render :show
#         # else
#         #     render json: ["Comment does not exist"], status: 404
#         # end
#     end

#     def update
#         @comment = Comment.find_by(id: params[:id])
#         if @comment.update_attributes(comment_params)
#             self.index
#         else
#             render json: @comment.errors.full_messages, status: 418
#         end
#     end

#     def destroy
#         @comment = Comment.find_by(id: params[:id])
#         @post = @comment.parent_post
#         if @comment
#             @comment.destroy
#             self.index
#         else
#             render json: @comment.errors.full_messages, status: 418
#         end
#     end

#     def comment_params
#         params.require(:commentData).permit(
#             :id,
#             :body,
#             :user_id,
#             :post_id
#             # :commentPhotoUrl
#         )
#     end

# end