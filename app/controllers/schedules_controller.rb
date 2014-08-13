class SchedulesController < ApplicationController

  def index
    respond_to do |format|
      format.json do
        render json: { message: 'This works!' }
      end
    end
  end

  def show
    json = Schedule.first.as_json

    respond_to do |format|
      format.json do
        render json: json
      end
    end
  end

end
