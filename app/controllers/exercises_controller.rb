class ExercisesController < ApplicationController

  def index
    schedule_items = Exercise.where(index_params)

    respond_to do |format|
      format.json { render json: schedule_items }
    end
  end

  def create
    schedule = Schedule.find(create_params[:schedule_id])
    exercise_params = create_params.slice(:name, :importance)
    exercise = schedule.exercises.create!(exercise_params)

    respond_to do |format|
      format.json { render json: exercise }
    end
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

    def index_params
      @index_params ||= params.permit(:schedule_id)
    end

    def create_params
      @create_params ||= params.permit(:schedule_id, :name, :importance)
    end

    def update_params
      @update_params ||= params.permit(:id, :name, :importance)
    end

end
