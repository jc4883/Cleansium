class Day < ApplicationRecord
    

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User  
    
    has_many :photo_uploads,
    foreign_key: :day_id,
    class_name: :PhotoUpload

end