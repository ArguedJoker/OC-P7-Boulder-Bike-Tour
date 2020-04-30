class RidersController < ApplicationController
 api-fe/be
    def index
        @riders = Rider.all
        # render json: @riders
    end

    # def show
    #     render :index
    # end
 master
end
