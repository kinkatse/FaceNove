class Api::PostsController < ApplicationController

    def create
        # debugger
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
        debugger
        @user
        if params[:postData]
            debugger
            @user = User.find_by(id: post_params[:user_id].to_i)
        else
            debugger
            @user = User.find_by(id: params[:id])
        end
        debugger
        @posts = @user.posts
        if @posts
            render :show
        else
            render json: ["Post does not exist"], status: 404
        end
    end

    def update
        # debugger
        @post = Post.find_by(id: params[:id])
        # debugger
        # I need User and user.posts so that show can run since I have
        # @posts in there rendering. This means I need to basically
        # redo the logic of the show here which needs the user_id from
        # the post_params (and needs to be an integer). May need to
        # refactor so that we can just render the show
        # @user = User.find_by(id: post_params[:user_id].to_i)
        # debugger
        # @posts = @user.posts
        # debugger
        if @post.update_attributes(post_params)
            debugger
            # render self.show
            # redirect_to api_post_url
            # redirect_to action: "show"
            self.show
        else
            # debugger
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
        debugger
        params.require(:postData).permit(
            :id,
            :post,
            :user_id,
            :postPhotoUrl
        )
    end

end