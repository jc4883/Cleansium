class AddDaysIndexToDays < ActiveRecord::Migration[5.2]
  def change
    add_column :days, :day_index, :integer
  end
end
