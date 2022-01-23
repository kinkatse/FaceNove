class Api::UsersController < ApplicationController
    
    def create
        # Making instance variable of the new User we are passing in strong params for
        @emailUser = User.new(email_user_params)
        # Then we save it to the database with .save! which gives loud errors if something went wrong
        if @emailUser.save
            # log_in comes from ApplicationController which we inherit
            log_in(@emailUser)
            # We then render the users show page to indicate they have logged in
            render "api/users/show"
        else
            render json: @emailUser.errors.full_messages, status: 422
        end

    end

    def index
        @emailUsers = User.all
        render "api/users/index"
    end

    def show
        # Looking for specific user so we check params for that id, and so params[:id] evaluates
        # to the User and then we make a key value pair of the id to the User we just accessed
        @emailUser = User.find_by(id: params[:id])
        if @emailUser
            render "api/users/show"
        else
            render json: ["User does not exist"], status: 404
        end
    end

    def update
        debugger
        @emailUser = User.find_by(id: params[:id])
        # .update_attribute is a rails built in method and takes in params to update all info passed in
        if @emailUser.update_attributes(email_user_params)
            render "api/users/show"
        else
            render json: @emailUser.errors.full_messages, status: 418
        end
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
