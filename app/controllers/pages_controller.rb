class PagesController < ApplicationController
  before_filter :require_login, only: [:app]

  def app
    @schedule = schedule.to_json
  end

  private

    def schedule
      current_user.schedules.first || current_user.schedules.create({
        name: 'My Practice Schedule',
        duration: 60,
        current_view: 'config',
      })
    end

end
