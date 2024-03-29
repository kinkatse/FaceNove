class Api::FriendsController < ApplicationController

    def create
        @request = Friend.new(friend_params)
        if @request.save
            friendship = Friend.find_by(user_id: @request.friend_id, friend_id: @request.user_id)
            @friend = @request.friend_requestee if friendship
            # @requester = @request.friend_requester
            render :show
        else
            render json: @request.errors.full_messages, status: 422
        end
    end

    def index
        @user = User.find(params[:user_id])
        @friends = @user.friends
        @friends_accepted = @user.find_recent_requests(@friends)
        @recent_requests = @user.find_most_recent_request(@friends_accepted)
        render :index
    end

    def requests
        @user = User.find(params[:user_id])
        @requests = @user.incoming_requests
        @outgoing = @user.outgoing_requests
        @requesters = @requests.map { |request| request.friend_requester }
        @requestees = @outgoing.map { |request| request.friend_requestee }
        render :request
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
            :user_id,
            :friend_id
        )
    end

end