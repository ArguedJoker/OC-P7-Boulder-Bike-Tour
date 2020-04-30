# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


@boulderBikeRaceEvent = Event.create!(
  { :name => 'Boulder Bike tour',
      :city => 'Boulder',
      :state => 'Colorado',
     :latitude => 40.016573,
       :longitude =>  -105.286382,
      :date => DateTime.new(2020, 04, 01,00, 00, 00 ), 
      :category => 'Bike race',
      :numberOfParticipants => '20',
       :description => 'Annual Boulder, CO bike race'}
       )

@boulderBikeRaceEvent.flikr_photo_tags.create!([
    {
      "hashtag": "#bikerace",
      },
      {
        "hashtag": "#BoulderBikeTour",
      }
    ])


@boulderBikeRaceEvent.riders.create!(


    { 
        "firstName": "Dustin",
        "lastName": "Green",
        "cityOfOrigin": "Hickory Hills",
        "stateOfOrigin": "IL",
        "description": "male",
        "latitiude": 40.00,
        "longitude": -105.35
    },

    {
    "firstName": "Jason",
    "lastName": "Finn",
    "cityOfOrigin": "Huntington Beach",
    "stateOfOrigin": "CA",
    "description": "male",
    "latitude": 39.95,
    "longitude": -105.24
    },
    
    {
    "firstName": "Howard",
    "lastName": "Thompson",
    "cityOfOrigin": "Hale",
    "stateOfOrigin": "MO",
    "description": "male",
    "latitude": 40.06,
    "longitude": -105.26
    },

    {
    "firstName": "Maggie",
    "lastName": "Lantz",
    "cityOfOrigin": "Fort Myers",
    "stateOfOrigin": "IL",
    "description": "female"
    "latitude": 40.03,
    "longitude": -105.23

    },

    {
    "firstName": "Lawrence",
    "lastName": "Duran",
    "cityOfOrigin": "Fort Myers",
    "stateOfOrigin": "FL",
    "description": "male"
    "latitude": 40.04,
    "longitude": -105.23

    },

    {
    "firstName": "Irene",
    "lastName": "Molina",
    "cityOfOrigin": "Tucson",
    "stateOfOrigin": "AZ",
    "description": "female"
    "latitude": 39.96,
    "longitude": -105.22

    },

    {

    "firstName": "Nancy",
    "lastName": "Garner",
    "cityOfOrigin": "Baltimore",
    "stateOfOrigin": "MD",
    "description": "female",
    "latitude": 39.98,
    "longitude": -105.21

    },

    {

    "firstName": "Tara",
    "lastName": "Taylor",
    "cityOfOrigin": "Minneapolis",
    "stateOfOrigin": "MN",
    "description": "female",
    "latitude": 40.00,
    "longitude": -105.25

    },

    {

    "firstName": "Alejandro",
    "lastName": "Smith",
    "cityOfOrigin": "Scarborough",
    "stateOfOrigin": "ME",
    "description": "male",
    "latitude": 40.02,
    "longitude": -105.30

    },

    {

    "firstName": "Tricia",
    "lastName": "Renshaw",
    "cityOfOrigin": "Mystic",
    "stateOfOrigin": "CT",
    "description": "female",
    "latitude": 40.02,
    "longitude": -105.30

    },

    {

    "firstName": "Travis",
    "lastName": "Cook",
    "cityOfOrigin": "Twin Lakes",
    "stateOfOrigin": "WI",
    "description": "male",
    "latitude": 40.01,
    "longitude": -105.20

    },

    {

    "firstName": "Joan",
    "lastName": "Brooks",
    "cityOfOrigin": "Norfolk",
    "stateOfOrigin": "VA",
    "description": "female",
    "latitude": 39.98,
    "longitude": -105.24

    },

    {

    "firstName": "Joseph",
    "lastName": "Rodgers",
    "cityOfOrigin": "Wayne",
    "stateOfOrigin": "NJ",
    "description": "male",
    "latitude": 39.99,
    "longitude": -105.25

    },

    {

    
    "firstName": "Matthew",
    "lastName": "Gregson",
    "cityOfOrigin": "Brashear",
    "stateOfOrigin": "MO",
    "description": "male",
    "latitude": 40.01,
    "longitude": -105.29

    },

    {

    "firstName": "Katie",
    "lastName": "Dunlap",
    "cityOfOrigin": "Marion",
    "stateOfOrigin": "VA",
    "description": "male",
    "latitude": 39.97,
    "longitude": -105.27

    },

    {

    "firstName": "Leo",
    "lastName": "Howard",
    "cityOfOrigin": "Dallas",
    "stateOfOrigin": "TX",
    "description": "male",
    "latitude": 39.97,
    "longitude": -105.27

    },

    {

    "firstName": "Maria",
    "lastName": "Baisden",
    "cityOfOrigin": "Raleigh",
    "stateOfOrigin": "NC",
    "description": "female",
    "latitude": 40.00,
    "longitude": -105.29

    },

    {

    "firstName": "Sandy",
    "lastName": "Townsend",
    "cityOfOrigin": "Newport",
    "stateOfOrigin": "PA",
    "description": "female",
    "latitude": 40.00,
    "longitude": -105.29

    },

    {

    "firstName": "Melinda",
    "lastName": "Stephenson",
    "cityOfOrigin": "Kahului",
    "stateOfOrigin": "HI",
    "description": "female",
    "latitude": 39.99,
    "longitude": -105.30

    },

    {

    "firstName": "Jason",
    "lastName": "Nicols",
    "cityOfOrigin": "Alexandria",
    "stateOfOrigin": "VA",
    "description": "male",
    "latitude": 40.01,
    "longitude": -105.32

    },
)