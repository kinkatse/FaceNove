class Api::LikesController < ApplicationController

    def create
        @like = Like.new(like_params)
        if @like.save
            self.index
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def index
        if params[:type] == 'post'
            @likes = Like.find_by(id: like_params[:post_id])
        elsif params[:type] == 'user'
            @like = Like.find_by(id: like_params[:id])
            @user = @like.liker
            @likes = @user.likes
        end
        render :index
    end

    # testing things on rails c
    def show
    end

    def update
    end

    def destroy
        @like = Like.find_by(id: params[:id])
        if @like
            @like.destroy
            self.index
        else
            render json: @post.errors.full_messages, status: 418
        end
    end

    def like_params
        params.require(:likeData).permit(
            :id,
            :liked,
            :liker_id,
            :post_id
        )
    end

end