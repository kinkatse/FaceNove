class Api::CommentsController < ApplicationController

    def create
        debugger
        @comment = Comment.new(comment_params)
        debugger
        if @comment.save
            debugger
            render "api/users/index"
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def index
        debugger
        @user = User.find_by(id: comment_params[:user_id].to_i)
        @post = Post.find_by(id: comment_params[:post_id].to_i)
        if params[:userComments] == true
            @comments = @user.comments
        elsif params[:postComments] == true
            @comments = @post.comments
        end
        render :index
        # @comments = Comment.all
        # render :index
    end

    def show
        # if params[:action] == "update" || params[:action] == "create"
        #     @user = User.find_by(id: post_params[:user_id].to_i)
        # elsif params[:action] == "destroy"
        #     @user = User.find_by(id: @post.user_id)
        # else
        #     @user = User.find_by(id: params[:id])
        # end

        # @userComments = @user.comments
        # @postComments = @post.comments
        # @comment = Comment.find_by(id: params[:id])
        # if @comments
        #     render :show
        # else
        #     render json: ["Comment does not exist"], status: 404
        # end
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        # if params[:commentPhotoUrl] == "purge"
        #     @comment.commentPhotoUrl.purge
        # end
        if @comment.update_attributes(comment_params)
            render "api/users/index"
        else
            render json: @comment.errors.full_messages, status: 418
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment
            @comment.destroy
            render "api/users/index"
        else
            render json: @comment.errors.full_messages, status: 418
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