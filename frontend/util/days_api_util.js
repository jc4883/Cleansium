export const fetchDays = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/days',
    })
}

export const createDay = (day) => {
  return $.ajax({
    method: "POST",
    url: "api/day",
    data: { day }
  })
}

export const fetchDay = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/days/${id}`,
    data: id 
  })
}

export const updateDay = (day) => {
  return $.ajax({
    method: "PATCH",
    url: `api/days/${day.id}`,
    data: { day }
  })
}

export const deleteDay = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/days/${id}`,
  })
}