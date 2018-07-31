class AddTextToTemplates < ActiveRecord::Migration[5.2]
  def change
    add_column :templates, :text, :string
  end
end
