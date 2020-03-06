class CreateRiders < ActiveRecord::Migration[6.0]
  def change
    create_table :riders do |t|
      t.string :rider_first_name
      t.string :rider_last_name
      t.string :city_of_origin
      t.string :state_of_origin
      t.string :description

      t.timestamps
    end
  end
end
