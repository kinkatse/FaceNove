class Api::PostsController < ApplicationController

    def create
        debugger
        @post = Post.new(post_params)
        debugger
        if @post.save
            self.show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def index
        @posts = Post.all
        render :index
    end

    # This show is showing all posts for a user. May need to refactor if we
    # need to have a show for a single post but I don't think we will need to
    # since we need show for user's posts for profile page and index will
    # cover the get for all posts for the feed
    def show
        # Originally was @user but it made it less dry since both
        # create and update needed to fetch the user so I made it
        # just do it in the show instead
        # Then I made a conditional based on params[:postData] but
        # that proved less dynamic depending which action and what
        # information is being passed in so we needed to rely on
        # something more concrete which a good way to tell is with
        # params[:action]. Then make a conditional on how to find
        # each user based on the data passed in by each action
        if params[:action] == "update" || params[:action] == "create"
            @user = User.find_by(id: post_params[:user_id].to_i)
        elsif params[:action] == "destroy"
            @user = User.find_by(id: @post.user_id)
        else
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
            self.show
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