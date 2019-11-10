class Api::DaysController < ApplicationController
    def index
        @days = current_user.days
        render "api/days/index"
    end

    def create
<<<<<<< HEAD
        @day = Day.new(day_params)
        if @day.save

            render "api/days/show"
        else

=======
        # debugger
        @day = Day.new(day_params)
        # debugger
        if @day.save
            # debugger
            render "api/days/show"
        else
            # debugger
>>>>>>> d90f7ea057701819741637c17af0f3929a52c634
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
            render 'api/projects/show'
        else
            render json: ["unable to update the day"]
        end
    end



    private
    def day_params
        params.require(:day).permit(:comment, :user_id, :day_index, :rating)
    end
end