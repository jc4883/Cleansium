class CreatePhotoUploads < ActiveRecord::Migration[5.2]
  def change
    create_table :photo_uploads do |t|
      t.string :title, null: false
      t.string :description
      t.integer :day_id
      
      t.timestamps
    end
  end
end
