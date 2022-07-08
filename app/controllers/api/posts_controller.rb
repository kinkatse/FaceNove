class Api::PostsController < ApplicationController

    def index
        # If there are users posts we want to grab here
        # in cases like a specific user's profile or friend's posts
        userIds = params[:userIds]
        if userIds
            # N + 1 Query
            # @posts = []
            # userIds.each do |user_id|
            #     debugger
            #     @user = User.find_by(id: user_id.to_i)
            #     @posts += @user.posts
            # end
            # debugger
            # render :index

            # @posts = []
            # allPostsLikes = Post.post_and_likes
            # debugger
            # userIds.each do |user_id|
            #     userPosts = allPostsLikes.select do |postsLikes|
            #         debugger
            #         if userIds.include?(postsLikes.user_id.to_s)
            #             @posts << postsLikes
            #         elsif userIds.include?(postsLikes.liker_id.to_s)
            #             @likes << postsLikes
            #         end
            #     end
            # end
            # render :index

            # Not N + 1 Query
            @posts = []
            # @likes = Hash.new { |hash, key| hash[key] = [] }
            allPosts = Post.all
            # allLikes = Like.all
            # @likes = Post.likes
            @likes = Like.all
            userIds.each do |user_id|
                userPosts = allPosts.select do |post|
                    if userIds.include?(post.user_id.to_s)
                        @posts << post
                         # @likes[post.id] = allLikes.select { |like| like.likeable_id == post.id }
                        # @likes << post.likes
                    end
                end
            end
            render :index

        # Otherwise show all posts
        else
            @posts = Post.all
            @likes = Like.all
            render :index
        end
    end

    # Note that if our index was just @posts = Post.all, it would work for the
    # frontend to filter only posts related to the user (check post_index render).
    # However, it's inefficient to fetch for every post so I made that
    # filter happen on the backend

    def show
        @post = Post.find_by(id: params[:id])
        render :show
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        # debugger
        @post = Post.find_by(id: params[:id])
        if params[:postPhotoUrl] == "purge"
            @post.postPhotoUrl.purge
        end
        if @post.update_attributes(post_params)
            @likes = Like.all
            render :show
        else
            render json: @post.errors.full_messages, status: 418
        end
    end

    def destroy
        # debugger
        @post = Post.find_by(id: params[:id])
        if @post
            @post.destroy
            render :show
        else
            render json: @post.errors.full_messages, status: 418
        end
    end

    def post_params
        params.require(:postData).permit(
            :id,
            :body,
            :user_id,
            :postPhotoUrl
        )
    end

end