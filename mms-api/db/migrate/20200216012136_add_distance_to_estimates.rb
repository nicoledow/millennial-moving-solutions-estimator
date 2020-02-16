class AddDistanceToEstimates < ActiveRecord::Migration[6.0]
  def change
    add_column :estimates, :distance, :float
  end
end
