class ApplicationController < ActionController::Base
    # Prevents Cross Site Request Forgery Attacks
    protect_from_forgery with: :exception
    
    # This allows access in other classes that inherit this
    helper_method :current_user, :logged_in?

    private

    def current_user
    end

    def logged_in?
    end

    def log_in(email)
    end

    def log_out
    end

    def require_logged_in
    end
    
end