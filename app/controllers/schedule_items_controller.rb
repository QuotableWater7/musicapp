class ScheduleItemsController < ApplicationController

  def index
    columns = [
      'schedule_items.id',
      'schedule_items.importance',
      'activities.name',
    ].join(',')

    schedule_items = ScheduleItem.select(columns)
      .where('schedule_id = ?', params[:schedule_id])
      .joins(:activity)

    respond_to do |format|
      format.json { render json: schedule_items }
    end
  end

  def update
    schedule_item = ScheduleItem.find(params[:id])
    schedule_item.update_attributes(importance: params[:importance])

    respond_to do |format|
      format.json { render json: { message: 'Successful' } }
    end
  end

end
