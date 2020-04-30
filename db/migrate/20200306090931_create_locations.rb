class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :rider_first_name, null: false
      t.string :rider_last_name, null: false
      t.integer :position_latitude, null: false
      t.integer :position_longitude, null: false

      t.timestamps
    end
  end
end
