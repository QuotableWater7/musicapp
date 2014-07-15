@tabs.map do |tab|
  tab
end.to_json(except: [:user_id, :created_at, :updated_at])
