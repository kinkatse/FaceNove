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
        if like_params[:likeable_type] == "Post"
            @likes = Post.find(:likeable_id).likes
        elsif like_params[:likeable_type] == "Comment"
            @likes = Comment.find(:likeable_id).likes
        elsif like_params[:likeable_type] == "User_All"
            user = User.find(:likeable_id)
            @likes = user.liked_posts + user.liked_comments

            # Probably doesnt work because its not going to work with _likes.json.jbuilder
            # @likes = Hash.new { |hash, key| hash[key] = [] }
            # user = User.find(:likeable_id)

            # @likes[:liked_posts] << user.liked_posts
            # @likes[:liked_comments] << user.liked_comments
        else
            @likes = []
        end
        render :index
    end

    def destroy
        # debugger
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