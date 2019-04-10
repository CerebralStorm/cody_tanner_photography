module Api
  module V1
    class BlogsController < ApplicationController

      def index
        @blogs = Blog.all
      end

    end
  end
end
