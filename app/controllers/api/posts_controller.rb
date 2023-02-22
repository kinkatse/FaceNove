class Api::PostsController < ApplicationController

    def index
        userIds = params[:userIds]
        if userIds
            @posts = Post.find_posts(userIds)
        else
            @posts = Post.all.includes(:likes)
        end
        render :index
    end

    def show
        @post = Post.find_by(id: params[:id])
        render :show
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find_by(id: params[:id])
        if params[:postPhotoUrl] == "purge"
            @post.postPhotoUrl.purge
        end
        if @post.update_attributes(post_params)
            @likes = Like.all
            render :show
        else
            render json: @post.errors.full_messages, status: 418
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        if @post
            @post.destroy
            render :show
        else
            render json: @post.errors.full_messages, status: 418
        end
    end

    def post_params
        params.require(:postData).permit(
            :id,
            :body,
            :user_id,
            :postPhotoUrl
        )
    end

end