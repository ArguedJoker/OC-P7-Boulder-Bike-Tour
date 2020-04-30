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

 api-fe/be
ActiveRecord::Schema.define(version: 2020_04_04_150720) do

  create_table "events", force: :cascade do |t|
    t.string "name"
    t.string "city"
    t.string "state"
    t.float "latitude"
    t.float "longitude"
    t.datetime "date"
    t.string "category"
    t.integer "numberOfParticipants"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "flikr_photo_tags", force: :cascade do |t|
    t.string "hashtag", null: false
    t.integer "event_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["event_id"], name: "index_flikr_photo_tags_on_event_id"
  end

ActiveRecord::Schema.define(version: 2020_03_06_091614) do
 master

  create_table "locations", force: :cascade do |t|
    t.string "rider_first_name"
    t.string "rider_last_name"
    t.integer "position_latitude"
    t.integer "position_longitude"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "riders", force: :cascade do |t|
    t.string "rider_first_name"
    t.string "rider_last_name"
    t.string "city_of_origin"
    t.string "state_of_origin"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "ref_num"
 api-fe/be
    t.float "latitude"
    t.float "longitude"
    t.integer "event_id"
    t.index ["event_id"], name: "index_riders_on_event_id"
    t.index ["ref_num"], name: "index_riders_on_ref_num"
  end

  create_table "slogan_submissions", force: :cascade do |t|
    t.string "firstName", null: false
    t.string "lastName", null: false
    t.string "email", null: false
    t.string "slogan", limit: 50, null: false
    t.integer "event_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["event_id"], name: "index_slogan_submissions_on_event_id"
  end


    t.index ["ref_num"], name: "index_riders_on_ref_num"
  end

 master
  create_table "slogans", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "slogan"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

 api-fe/be
  add_foreign_key "flikr_photo_tags", "events"
  add_foreign_key "riders", "events"
  add_foreign_key "slogan_submissions", "events"
 master
end
