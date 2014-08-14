class ScheduleItemsController < ApplicationController

  def update
    schedule_item = ScheduleItem.find(params[:id])
    schedule_item.update_attributes(importance: params[:importance])

    respond_to do |format|
      format.json { render json: { message: 'Successful' } }
    end
  end

end
