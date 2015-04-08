class SchedulesController < ApplicationController

  def index
    respond_to do |format|
      format.json do
        render json: { message: 'This works!' }
      end
    end
  end

  def create
    User.schedules.create!(params[:schedule])
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
    schedule.update_attributes!(schedule_attributes)

    respond_to do |format|
      format.json { render json: { message: 'Success' } }
    end
  end

  private

  def schedule_attributes
    @schedule_attributes ||= params.permit(
      :current_view,
      :name,
      :duration,
      :break_time,
    )
  end

end
