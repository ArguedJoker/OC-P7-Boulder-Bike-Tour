class CreateSloganSubmissions < ActiveRecord::Migration[6.0]
  def change
    create_table :slogan_submissions do |t|
      t.string :firstName
      t.string :lastName
      t.string :email
      t.string :slogan
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
