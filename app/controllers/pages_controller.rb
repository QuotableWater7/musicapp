class PagesController < ApplicationController
  before_filter :require_login, only: [:app]
  before_filter :redirect_if_logged_in, only: :index

  def app
    @schedule = schedule.to_json
  end

  private

    def schedule
      current_user.schedules.first || current_user.schedules.create({
        name: 'My Practice Schedule',
        duration: 60,
        break_time: 5,
        current_view: 'config',
      })
    end

end
