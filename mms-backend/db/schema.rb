# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_15_031105) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "estimates", force: :cascade do |t|
    t.string "customer_name"
    t.string "customer_email"
    t.string "startingLocation"
    t.string "destinationLocation"
    t.integer "num_of_bedrooms"
    t.integer "num_of_floors"
    t.boolean "elevator"
    t.integer "parking_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "moves", force: :cascade do |t|
    t.string "customer_name"
    t.string "customer_email"
    t.string "customer_phone"
    t.string "starting_city"
    t.string "starting_state"
    t.string "destination_city"
    t.string "destination_state"
    t.integer "num_of_bedrooms"
    t.integer "num_of_floors"
    t.boolean "elevator"
    t.integer "parking_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
