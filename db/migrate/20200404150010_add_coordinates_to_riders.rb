class AddCoordinatesToRiders < ActiveRecord::Migration[6.0]
  def change
    add_column :riders, :latitude, :float
    add_column :riders, :longitude, :float
    add_reference :riders, :event, null: false, foreign_key: true

    t.timestamps
  end
end
