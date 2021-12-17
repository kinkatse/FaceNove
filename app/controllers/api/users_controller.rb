class Api::UsersController < ApplicationController
    
    def create
        # Making instance variable of the new User we are passing in strong params for
        @emailUser = User.new(email_user_params)
        # Then we save it to the database with .save! which gives loud errors if something went wrong
        if @emailUser.save!
            # log_in comes from ApplicationController which we inherit
            log_in(@emailUser)
            # We then render the users show page to indicate they have logged in
            render "api/users/show"
        else
            # Not sure where this is coming from
            render json: @emailUser.errors.full_messages, status: 422
        end

    end

    def index
    end

    def show
    end

    def update
    end

    def destroy
    end

    def email_user_params
        params.require(:user).permit(
            :email,
            :password,
            :firstName,
            :lastName,
            :bio,
            :birthdate,
            :gender,
            :education,
            :hometown,
            :work,
            :relationship,
            :website,
            :profilePicUrl,
            :coverPicUrl,
            :created_at,
            :updated_at
        )
    end

end
