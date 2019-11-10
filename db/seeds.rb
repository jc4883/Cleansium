# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Day.destroy_all

user1 = User.create!(username: "user1", password: "password")
user2 = User.create!(username: "user2", password: "password")

day1 = Day.create!(rating: 5, comment: "it was a great day", user_id: user1.id, day_index: 1)
day2 = Day.create!(rating: 5, comment: "it was a great day", user_id: user1.id, day_index: 2)
day3 = Day.create!(rating: 5, comment: "it was a great day", user_id: user1.id, day_index: 3)

day4 = Day.create!(rating: 5, comment: "it was a bad day", user_id: user2.id, day_index: 1)
day5 = Day.create!(rating: 5, comment: "it was a bad day", user_id: user2.id, day_index: 2)
day6 = Day.create!(rating: 5, comment: "it was a bad day", user_id: user2.id, day_index: 3)