class AddRefNumToRiders < ActiveRecord::Migration[6.0]
  def change
    add_column :riders, :ref_num, :string
    add_index :riders, :ref_num

    t.timestamps
  end
end
