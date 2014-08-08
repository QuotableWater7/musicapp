class SchedulesController < ApplicationController

  def index
    respond_to do |format|
      format.json do
        render json: { message: 'This works!' }
      end
    end
  end

  def show
    json = {
      name: 'My First Schedule',
      schedule_items: [
        {
          name: 'item 1',
          importance: 5,
        },
        {
          name: 'item 2',
          importance: 10,
        },
      ],
    }

    respond_to do |format|
      format.json do
        render json: json
      end
    end
  end

end
