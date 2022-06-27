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
        @users
        if params[:likeable_type] == "Post"
        elsif params[:likeable_type] == "Comment"
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
        params.require(:like).permit(
            :id,
            :liker_id
            :likeable_id,
            :likeable_type,
        )
    end

end