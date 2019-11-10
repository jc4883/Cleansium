export const fetchPhotoUploads = (dayId) => {
  return $.ajax({
    method: "GET",
    url: `/api/days/${dayId}/photo_uploads`
  })
}

export const createPhotoUpload = (dayId, formData) => {
  return $.ajax({
    method: "POST",
    url: `/api/days/${dayId}/photo_uploads`,
    data: formData,
    contentType: false,
    processData: false,
  })
}

export const deletePhotoUpload = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/photo_uploads/${id}`,
  })
}

export const fetchPhotoUpload = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/photo_uploads/${id}`
  })
}