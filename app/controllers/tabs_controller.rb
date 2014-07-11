class TabsController < ApplicationController
  def new
  end

  def create
  end

  def index
    respond_to do |format|
      format.json do
        json = [
          {
            song: 'Smells Like Teen Spirit',
            artist: 'Nirvana',
            url: 'http://nirvana.com',
            sessions_completed: 5,
            total_minutes: 10,
          },
          {
            song: 'Give it Away',
            artist: 'Red Hot Chili Peppers',
            url: 'http://rhcp.com',
            sessions_completed: 17,
            total_minutes: 35,
          }
        ]
        render json: json
      end
    end
  end

  def show
  end

  def update
  end

  def destroy
  end
end
