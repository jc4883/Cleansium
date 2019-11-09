class RemoveCompletedFromDays < ActiveRecord::Migration[5.2]
  def change
    remove_column :days, :completed
  end
end
