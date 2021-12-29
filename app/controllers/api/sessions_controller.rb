class Api::SessionsController < ApplicationController

    def create
        # Grabbing the email and password of the user from the params. Where does params come from? Seems like AJAX Requests
        # Need to key in through user and then we can key in to the specific attribute we want
        @emailUser = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        # For testing the log in until we have hashrouter
        console.log("Logged in!")
        # Upon successful email and password, we log in and go to users show page, else show errors
        if @emailUser
            log_in(@emailUser)
            render "api/users/show"
        else
            render json: ["Invalid username or password"], status: 401
        end
    end

    def destroy
        # By doing this, we make sure a session can only be deleted when they are logged in
        @emailUser = current_user
        # For testing the log out until we have hashrouter
        console.log("Logged out!")
        if @emailUser
            log_out
            # Why would we render show page if logged out?
            render "api/users/show"
        else
            render json: ["No one is currently signed in"], status: 404
        end
    end

end