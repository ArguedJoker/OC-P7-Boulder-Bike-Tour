class CreateSlogans < ActiveRecord::Migration[6.0]
  def change
    create_table :slogans do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :slogan, null: false

      t.timestamps
    end
  end
end
