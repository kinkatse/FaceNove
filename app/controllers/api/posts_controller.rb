class Api::PostsController < ApplicationController

    def create
        @post = Post.new(post_params)
        if @post.save
            puts "Post saved!"
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

        # Originally was params[:postData] but harder to read
        # if @user exists, it is likely from the update action
        # since we create a user there
        if !@user
            @user = User.find_by(id: params[:id])
        end
        @posts = @user.posts
        if @posts
            render :show
        else
            render json: ["Post does not exist"], status: 404
        end
    end

    def update
        @post = Post.find_by(id: params[:id])
        # I need User and user.posts so that show can run since I have
        # @posts in there rendering. This means I need to basically
        # redo the logic of the show here which needs the user_id from
        # the post_params (and needs to be an integer)
        @user = User.find_by(id: post_params[:user_id].to_i)
        if @post.update_attributes(post_params)
            # Cant put render here or I get double render error
            # I tried redirect_to as well but the url is a built in
            # path to /posts/4 but since I don't have my backend
            # built in the typical manner, I have to use this work
            # around which is just calling the show method when updating
            self.show
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
            :post,
            :user_id,
            :postPhotoUrl
        )
    end

end