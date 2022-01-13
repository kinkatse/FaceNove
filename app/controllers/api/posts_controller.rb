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
        # This show is showing all posts for a user. May need to refactor if we
        # need to have a show for a single post but I don't think we will need to
        # since we need show for user's posts for profile page and index will
        # cover the get for all posts for the feed
        @user = User.find_by(id: params[:id])
        @posts = @user.posts
        if @posts
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