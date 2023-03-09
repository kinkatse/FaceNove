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

        # Logic for creating a new friend request
            # If that FR's friend already had an entry in the table
            # for requesting the user, then this is now a friendship
            # and render show with a @friend, similar logic to friends method
            # Frontend should take the new friend and add to state

            # If not, we just input the FR entry and render show
            # with @friend being nil but @request is still sent with info
            # Frontend should add @request into the user's array of requests

            # We will need to refactor user state to include friendrequests
            # as an array which contains all the ids of users that requested
    end

    def index
        @user = User.find(params[:user_id])
        @friends = @user.friends
        @requests = @user.incoming_requests
        render :index
        # All we want to do is just @friends = user.friends
        # and all the incoming requests
    end

    # def show
    # end

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
        # If a friendship is destroyed, that means that both entries should
        # be deleted since the user would have to request again to make a friendship
    end

    def friend_params
        params.require(:friendData).permit(
            :id,
            :user_id,
            :friend_id
        )
    end

end