class CreateFlikrPhotoTags < ActiveRecord::Migration[6.0]
  def change
    create_table :flikr_photo_tags do |t|
      t.string :hashtag
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
