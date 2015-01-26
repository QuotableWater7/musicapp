class ScheduleItemsController < ApplicationController

  def index
    columns = [
      'schedule_items.id',
      'schedule_items.importance',
      'schedule_items.name',
    ].join(',')

    schedule_items = ScheduleItem.select(columns)

    respond_to do |format|
      format.json { render json: schedule_items }
    end
  end

  def create
    ScheduleItem.create!(create_params)
    render nothing: true
  end

  def update
    schedule_item = ScheduleItem.find(update_params[:id])
    schedule_item.update_attributes(update_params)

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
      @create_params ||= params.permit(:name, :importance)
    end

    def update_params
      @update_params ||= params.permit(:id, :name, :importance)
    end

end
