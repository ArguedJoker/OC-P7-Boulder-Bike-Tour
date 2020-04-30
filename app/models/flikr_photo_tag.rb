class FlikrPhotoTag < ApplicationRecord
  belongs_to :event
  validates :hashtag, inclusion: {in: ['#bikerace', '#BoulderBikeTour']}
end
