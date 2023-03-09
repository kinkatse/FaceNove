class Api::FriendsController < ApplicationController

    def create
        @request = Friend.new(friend_params)
        if @request.save
            friendship = Friend.find_by(user_id: @request.friend_id, friend_id: @request.user_id)
            @friend = @request.friend_requestee if friendship
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def index
        @user = User.find(params[:user_id])
        @friends = @user.friends
        @requests = @user.incoming_requests
        render :index
    end

    def destroy
        @request = Friend.find(params[:id])
        if @request
            friendship = Friend.find_by(user_id: @request.friend_id, friend_id: @request.user_id)
            friendship.destroy if friendship
            @request.destroy
            render :show
        else
            render json: @request.errors.full_messages, status: 418
        end
    end

    def friend_params
        params.require(:friendData).permit(
            :id,
            :user_id,
            :friend_id
        )
    end

end