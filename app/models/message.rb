class Message < ApplicationRecord
	has_one :template
	validates :name, :presence => true
end
