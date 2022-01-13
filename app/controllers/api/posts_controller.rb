class Api::PostsController < ApplicationController

    def create
        debugger
        @post = Post.new(post_params)
        if @post.save
            puts "Post saved!"
            # render "api/posts/show"
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def index
        @posts = Post.all
        render :index
    end

    def show
        debugger
        @post = Post.find_by(id: params[:id])
        if @post
            render :show
        else
            render json: ["Post does not exist"], status: 404
        end
    end

    def update
        @post = Post.find_by(id: params[:id])
        if @post.update_attribute(post_params)
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
        params.require(:post).permit(
            :post,
            :user_id,
            :postPhotoUrl
        )
    end

end