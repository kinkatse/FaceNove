class ApplicationController < ActionController::Base
    # Prevents Cross Site Request Forgery Attacks
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token
    
    # This allows access in other classes that inherit this
    helper_method :current_user, :logged_in?

    private

    def current_user
        # If no session token return nil, remember session hash is provided by rails
        return nil if !session[:session_token]
        # If there exists a session token, we key into it and get the value of the session token and make a new key value pair for it and find by that User
        @currentUser ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        # truth-false value for if current_user exists
        !!current_user
    end

    def log_in(email)
        # Upon successful log in with email, we reset session token so each time a user logs in, its a new session token
        # Why bang (!)?
        email.reset_session_token!
        # Setting the session token of the email to be the value to the key :session_token of the session hash
        session[:session_token] = email.session_token
        @currentUser = email
    end

    def log_out
        # Reset so that even after log out, the session token will be different - I think
        current_user.reset_session_token!
        # Setting the session to nil
        session[:session_token] = nil
        @currentUser = nil
    end

    def require_logged_in
        # If no logged in user, give an error
        # What is base? Base is just a key we set for the error I think
        if !current_user
            render json: { base: ['Invalid credentials'] }, status: 401
        end
    end

end