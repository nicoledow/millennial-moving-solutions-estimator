class CreateCustomers < ActiveRecord::Migration[6.0]
  def change
    create_table :customers do |t|
      t.string :start_zip
      t.string :destination_zip
      t.string :num_of_bedrooms
      t.string :num_of_floors
      t.boolean :elevator, :default => false
      t.integer :parking_distance
      t.string :name
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end
