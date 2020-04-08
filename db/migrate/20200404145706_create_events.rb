class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.datetime :date, null: false
      t.string :category, null: false
      t.integer :numberOfParticipants, null: false
      t.text :description, null: false

      t.timestamps
    end
  end
end
