# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

day1 = Day.create(rating: 5, comment: "it was a great day", user_id: 1, day_index: 1)
day2 = Day.create(rating: 5, comment: "it was a great day", user_id: 1, day_index: 2)
day3 = Day.create(rating: 5, comment: "it was a great day", user_id: 1, day_index: 3)
