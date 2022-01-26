class Api::CommentsController < ApplicationController

    # def create
    #     @post = Post.new(post_params)
    #     if @post.save
    #         self.show
    #     else
    #         render json: @post.errors.full_messages, status: 422
    #     end
    # end

    # def index
    #     @posts = Post.all
    #     render :index
    # end

    # def show
    #     if params[:action] == "update" || params[:action] == "create"
    #         @user = User.find_by(id: post_params[:user_id].to_i)
    #     elsif params[:action] == "destroy"
    #         @user = User.find_by(id: @post.user_id)
    #     else
    #         @user = User.find_by(id: params[:id])
    #     end

    #     @posts = @user.posts
    #     if @posts
    #         render :show
    #     else
    #         render json: ["Post does not exist"], status: 404
    #     end
    # end

    # def update
    #     @post = Post.find_by(id: params[:id])
    #     if params[:postPhotoUrl] == "purge"
    #         @post.postPhotoUrl.purge
    #     end
    #     if @post.update_attributes(post_params)
    #         self.show
    #     else
    #         render json: @post.errors.full_messages, status: 418
    #     end
    # end

    # def destroy
    #     @post = Post.find_by(id: params[:id])
    #     if @post
    #         @post.destroy
    #         self.show
    #     else
    #         render json: @post.errors.full_messages, status: 418
    #     end
    # end

    # def post_params
    #     params.require(:postData).permit(
    #         :id,
    #         :post,
    #         :user_id,
    #         :postPhotoUrl
    #     )
    # end

end