class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :rider_first_name
      t.string :rider_last_name
      t.integer :position_latitude
      t.integer :position_longitude

      t.timestamps
    end
  end
end
