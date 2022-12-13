# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)  BlogPostsController is the model name and the ApplicationController is what takes care of the web requests. 
class BlogPostsController < ApplicationController
  def index
    # ---2) @posts is the instance variable and it is going to be connected by an assignment operator to BlogPost which is the table and .all is going to GET them all to display. (also why its under the method index)
    @posts = BlogPost.all
  end

  # ---3)This is the method show. It will only GET, show one column of data
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The new method allows us to create new columns of data in our table database. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The create works in conjunction with new. But create does more of the heavy lifting. It takes params (to take in dynamic information in) as a blog post item. The conditional is asking if valid (true) then go ahead create the data. Then it will redirect you to the blog post.  
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This will be finding a blog post based on its :id specified down there. Params is letting it be dynamic and you state what you want your search to be based off in the brackets in this case id. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)This .update is going to allow you to edit the blog post as long as you meet the requirements (validates) of .valid? If so it will redirect you to the blog post. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) When you are done destroying that data (blog) you will be redirected to the blog posts page. 
      redirect_to blog_posts_path
    end
  end

  # ---9) These are strong params. No one can see or alter or anything these besides you! (cooooool!) These work in tandem with your validates and .valid? to make sure the user met the requirements you asked for. If you meet the requirements you will be allowed to alter title and content
  private
  def blog_post_params
    # ---10)
    params.require(:blog_post).permit(:title, :content)
  end
end
