class CreateDays < ActiveRecord::Migration[5.2]
  def change
    create_table :days do |t|
      t.integer :rating
      t.string :comment
      t.integer :user_id, null:false
      t.boolean :completed, null: false
      t.timestamps
    end
  end
end
