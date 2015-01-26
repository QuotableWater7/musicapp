class ScheduleItemsController < ApplicationController

  def index
    columns = [
      'schedule_items.id',
      'schedule_items.importance',
    ].join(',')

    schedule_items = ScheduleItem.select(columns)
      .joins(:activity)

    respond_to do |format|
      format.json { render json: schedule_items }
    end
  end

  def create
    ScheduleItem.create!(create_params)
    render nothing: true
  end

  def update
    schedule_item = ScheduleItem.find(params[:id])
    schedule_item.update_attributes(importance: params[:importance])

    respond_to do |format|
      format.json { render json: { message: 'Successful' } }
    end
  end

  def destroy
    ScheduleItem.find(params[:id]).destroy!
    render nothing: true
  end

  private

    def create_params
      params.permit(:activity, :importance)
    end

end
