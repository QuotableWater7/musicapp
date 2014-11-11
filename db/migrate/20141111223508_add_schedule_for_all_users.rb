class AddScheduleForAllUsers < ActiveRecord::Migration
  def change
    users_without_schedules = User.all.select{ |user| user.schedules == [] }

    users_without_schedules.each do |user|
      user.schedules.create(
        name: 'My Schedule',
        duration: 60*60,
        break_time: 120
      )
    end
  end
end
