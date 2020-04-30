class CreateSloganSubmissions < ActiveRecord::Migration[6.0]
  def change
    create_table :slogan_submissions do |t|
      t.string :firstName, null: false
      t.string :lastName, null: false
      t.string :email, null:false
      t.string :slogan, null: false, limit: 50
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
