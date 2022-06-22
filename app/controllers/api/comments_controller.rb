class Api::CommentsController < ApplicationController
    
    def index
        # Grab all comments of a post
        if params[:type] == 'post'
            post_id = params[:post_id]
            @comments = Post.find_by(id: post_id).comments
        # Grab all comments of a user
        elsif params[:type] == 'user'
            user_id = params[:user_id]
            @comments = User.find_by(id: user_id).comments
        else
            @comments = []
        end

        render :index
    end

    def show
        @comment = Comment.find_by(id: params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        if @comment.update_attributes(comment_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 418
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment
            @comment.destroy
            render :show
        else
            render json: @post.errors.full_messages, status: 418
        end
    end

    def comment_params
        params.require(:commentData).permit(
            :id,
            :body,
            :user_id,
            :post_id
            # :commentPhotoUrl
        )
    end

end