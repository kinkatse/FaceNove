class Api::LikesController < ApplicationController

    def create
        @like = Like.new(like_params)
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def index
        # These are redundant since the jbuilder for posts and comments also send likes
        # if like_params[:likeable_type] == "Post"
        #     @likes = Post.find(:likeable_id).likes
        # elsif like_params[:likeable_type] == "Comment"
        #     @likes = Comment.find(:likeable_id).likes

        if like_params[:likeable_type] == "User_All"
            @likes = Like.includes(:liker, likeable: [:author, :likes]).where(liker_id: like_params[:liker_id])
            @posts = []
            @likes.each do |like|
                post = like.likeable
                @posts << post if like.likeable_type == "Post"
            end
            # get all posts' likes in the @likes as well since it
            # should contain more than just the user's likes
            @posts.each { |post| @likes = @likes + post.likes }
        else
            @likes = []
            @posts = []
        end
        render :index
    end

    def destroy
        @like = Like.find_by(id: params[:id])
        if @like
            @like.destroy
            render :show
        else
            render json: @post.errors.full_messages, status: 418
        end
    end

    def like_params
        params.require(:likeData).permit(
            :id,
            :liker_id,
            :likeable_type,
            :likeable_id
        )
    end

end