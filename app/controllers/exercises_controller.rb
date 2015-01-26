class ExercisesController < ApplicationController

  def index
    schedule_items = Exercise.all

    respond_to do |format|
      format.json { render json: schedule_items }
    end
  end

  def create
    Exercise.create!(create_params)
    render nothing: true
  end

  def update
    schedule_item = Exercise.find(update_params[:id])
    schedule_item.update_attributes(update_params)

    respond_to do |format|
      format.json { render json: { message: 'Successful' } }
    end
  end

  def destroy
    Exercise.find(params[:id]).destroy!
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
