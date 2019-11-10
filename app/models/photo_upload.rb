class PhotoUpload < ApplicationRecord
  validates :title, presence: true
  validate :ensure_photo


  has_one_attached :photo

  belongs_to :day,
  foreign_key: :day_id,
  class_name: :Day

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "Photo must be attached"
    end
  end
  
end