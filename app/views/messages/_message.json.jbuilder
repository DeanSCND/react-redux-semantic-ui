json.extract! message, :id, :name, :template_id, :created_at, :updated_at
json.url message_url(message, format: :json)
