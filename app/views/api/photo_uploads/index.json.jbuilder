
  json.set! :uploads do
    @photo_uploads.each do |photo_upload|
      json.set! photo_upload.id do 
        if photo_upload.photo.image?
          @is_image = true
        else
          @is_image = false
        end

        json.extract! photo_upload, :id, :title, :description, :day_id, :created_at
        json.photoUrl url_for(photo_upload.photo)
        json.is_image @is_image
      end
    end
  end




#json.extract! booking.listing, :id, :title, :description, :price, :location, :lng, :lat, :num_bed, :num_bath, :max_guests, :home_type , :amenities, :host_id
#json.photoUrls booking.listing.pictures.map { |pic| pic.url }