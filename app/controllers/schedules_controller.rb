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

  def update
    schedule = Schedule.find(params[:id])
    schedule.update_attributes(
      name: params[:name],
      duration: params[:duration],
      break_time: params[:break_time],
    )

    respond_to do |format|
      format.json { render json: { message: 'Success' } }
    end
  end

end
