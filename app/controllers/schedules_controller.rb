class SchedulesController < AppliationController

  def index
    respond_to do |format|
      format.json do
        render json: { message: 'This works!' }.to_json
      end
    end
  end

end
