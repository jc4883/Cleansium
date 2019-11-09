@days.each do |day|
  json.set! day.id do 
    json.partial! 'day', day: day
  end
end

