class Api::PostsController < ApplicationController

    def index
        # debugger

        # If there are users posts we want to grab here
        userIds = params[:userIds]
        if userIds
            @posts = []
            userIds.each do |id|
                @user = User.find_by(id: id.to_i)
                @posts << @user.posts
            end
            render :index
        else
            @posts = Post.all
            render :index
        end
            


        # @posts = Post.all
        # render :index
    end

    def show
        # debugger
        @post = Post.find_by(id: params[:id])
        render :show
    end

    def create
        # debugger
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        # debugger
        @post = Post.find_by(id: params[:id])
        if params[:postPhotoUrl] == "purge"
            @post.postPhotoUrl.purge
        end
        if @post.update_attributes(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 418
        end
    end

    def destroy
        # debugger
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