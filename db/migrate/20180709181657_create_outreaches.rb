class CreateOutreaches < ActiveRecord::Migration[5.2]
  def change
    create_table :outreaches do |t|
      t.string :name
      t.integer :message_id

      t.timestamps
    end
  end
end
