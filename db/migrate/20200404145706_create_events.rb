class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :city
      t.string :state
      t.float :latitude
      t.float :longitude
      t.datetime :date
      t.string :category
      t.integer :numberOfParticipants
      t.text :description

      t.timestamps
    end
  end
end
