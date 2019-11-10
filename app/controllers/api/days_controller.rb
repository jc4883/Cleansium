class Api::DaysController < ApplicationController
    def index
        @days = current_user.days
        render "api/days/index"
    end

    def create
        @day = Day.new(day_params)
        if @day.save

            render "api/days/show"
        else

            render json: ["Try creating day at a later time."]
        end
    end

    def destroy
        @day = Day.find(params[:id])
        @day.destroy
        render 'api/days/show'
    end

    def show
        @day = Day.find(params[:id])
        render 'api/days/show'
    end

    def update
        @day = Day.find(params[:id])
        if @day.update_attributes(day_params)
            
            render 'api/days/show'
        else
            render json: ["unable to update the day"]
        end
    end



    private
    def day_params
        params.require(:day).permit(:id, :comment, :user_id, :day_index, :rating)
    end
end