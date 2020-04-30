class AddRefNumToRiders < ActiveRecord::Migration[6.0]
  def change
    add_column(:riders, :status, :string, limit: 20, default: 'draft', null: false)
  end
end
