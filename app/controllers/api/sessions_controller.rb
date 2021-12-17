class Api::SessionsController < ApplicationController

    def create
        # Grabbing the email and password of the user from the params.
        # Need to key in through user and then we can key in to the specific attribute we want
        @emailUser = User.find_by_credentials(
            params[:user][:email]
            params[:user][:password]
        )
        # Upon successful email and password, we log in and go to users show page, else show errors
        if @emailUser
            log_in(@emailUser)
            render "api/users/show"
        else
            render json: ["Invalid username or password"], status: 401
        end
    end

    def destroy
    end

end