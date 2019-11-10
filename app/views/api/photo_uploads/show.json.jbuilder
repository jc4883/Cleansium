json.set! :uploads do
  json.set! @photo_upload.id do
    json.extract! @photo_upload, :id, :title, :description, :day_id, :created_at
    if @delete != true
      json.photoUrl url_for(@photo_upload.photo)
      json.is_image @is_image
    end
  end
end