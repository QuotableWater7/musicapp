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
      total_time: '60',
      schedule_items: [
        {
          name: 'Warm Ups',
          importance: 5,
        },
        {
          name: 'Intervals',
          importance: 10,
        },
        {
          name: 'Scales',
          importance: 8,
        },
        {
          name: 'Chords',
          importance: 7,
        },
        {
          name: 'Legato',
          importance: 5,
        },
        {
          name: 'Pentatonics',
          importance: 8,
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
