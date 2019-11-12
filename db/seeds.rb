# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Day.destroy_all
PhotoUpload.destroy_all


user1 = User.create!(username: "user1", password: "password")
user2 = User.create!(username: "user2", password: "password")

day1 = Day.create!(rating: 5, comment: "it was a great day", user_id: user1.id, day_index: 1)
day2 = Day.create!(rating: 5, comment: "it was a great day", user_id: user1.id, day_index: 2)
day3 = Day.create!(rating: 5, comment: "it was a great day", user_id: user1.id, day_index: 3)

day1A = Day.create!(rating: 5, comment: "it was a bad day", user_id: user2.id, day_index: 1)
day2A = Day.create!(rating: 5, comment: "it was a bad day", user_id: user2.id, day_index: 2)
day3A = Day.create!(rating: 5, comment: "it was a bad day", user_id: user2.id, day_index: 3)
day4A = Day.create!(rating: 5, comment: "it was a bad day", user_id: user2.id, day_index: 4)
day5A = Day.create!(rating: 5, comment: "it was a bad day", user_id: user2.id, day_index: 5)
day6A = Day.create!(rating: 4, comment: "it was kind of a bad day", user_id: user2.id, day_index: 6)
day7A = Day.create!(rating: 5, comment: "it was a bad day", user_id: user2.id, day_index: 7)
day8A = Day.create!(rating: 4, comment: "it was kind of a bad day", user_id: user2.id, day_index: 8)
day9A = Day.create!(rating: 4, comment: "it was kind of a bad day", user_id: user2.id, day_index: 9)
day10A = Day.create!(rating: 3, comment: "it was an ok day", user_id: user2.id, day_index: 10)
day11A = Day.create!(rating: 3, comment: "it was an ok day", user_id: user2.id, day_index: 11)
day12A = Day.create!(rating: 2, comment: "it was a pretty good day", user_id: user2.id, day_index: 12)
day13A = Day.create!(rating: 4, comment: "it was kind of a bad day", user_id: user2.id, day_index: 13)
day14A = Day.create!(rating: 3, comment: "it was an ok day", user_id: user2.id, day_index: 14)

day15A = Day.create!(rating: 3, comment: "it was a bad day", user_id: user2.id, day_index: 15)
day16A = Day.create!(rating: 2, comment: "it was a bad day", user_id: user2.id, day_index: 16)
day17A = Day.create!(rating: 4, comment: "it was a bad day", user_id: user2.id, day_index: 17)
day18A = Day.create!(rating: 3, comment: "it was a bad day", user_id: user2.id, day_index: 18)
day19A = Day.create!(rating: 1, comment: "it was a bad day", user_id: user2.id, day_index: 19)
day20A = Day.create!(rating: 1, comment: "it was kind of a bad day", user_id: user2.id, day_index: 20)
day21A = Day.create!(rating: 1, comment: "it was a bad day", user_id: user2.id, day_index: 21)
day22A = Day.create!(rating: 2, comment: "it was kind of a bad day", user_id: user2.id, day_index: 22)
day23A = Day.create!(rating: 1, comment: "it was kind of a bad day", user_id: user2.id, day_index: 23)
day24A = Day.create!(rating: 2, comment: "it was an ok day", user_id: user2.id, day_index: 24)
day25A = Day.create!(rating: 1, comment: "it was an ok day", user_id: user2.id, day_index: 25)
day26A = Day.create!(rating: 1, comment: "it was a pretty good day", user_id: user2.id, day_index: 26)
day27A = Day.create!(rating: 1, comment: "it was kind of a bad day", user_id: user2.id, day_index: 27)
day28A = Day.create!(rating: 1, comment: "it was an ok day", user_id: user2.id, day_index: 28)