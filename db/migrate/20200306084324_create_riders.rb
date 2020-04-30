class CreateRiders < ActiveRecord::Migration[6.0]
  def change
    create_table :riders do |t|
      t.string :rider_first_name, null: false
      t.string :rider_last_name, null: false
      t.string :city_of_origin, null: false
      t.string :state_of_origin, null: false
      t.string :description

      t.timestamps
    end
  end
end
