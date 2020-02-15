class CreateMoves < ActiveRecord::Migration[6.0]
  def change
    create_table :moves do |t|
      t.string :customer_name
      t.string :customer_email
      t.string :customer_phone
      t.string :starting_city
      t.string :starting_state
      t.string :destination_city
      t.string :destination_state
      t.integer :num_of_bedrooms
      t.integer :num_of_floors
      t.boolean :elevator
      t.integer :parking_type

      t.timestamps
    end
  end
end
