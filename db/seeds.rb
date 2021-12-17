# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
User.create!(email: 'demo@mail.com', password: 'password', firstName: 'Demo', lastName: 'User', birthdate: '1-1-2000', gender: 'Male', bio: '', hometown: '', education: '', work: '', relationship: '', website: '')
User.create!(email: 'coder123@gmail.com', password: '123123', firstName: 'Kin Ka', lastName: 'Tse', birthdate: '1-1-2000', gender: 'Male', bio: 'I like tennis!', hometown: 'Brooklyn', education: 'Tennis University', work: 'Halo Agency Employee', relationship: 'Dating', website: 'https://github.com/kinkatse')
User.create!(email: 'BobJason@gmail.com', password: '123123', firstName: 'Bob', lastName: 'Jason', birthdate: '11-11-2011', gender: 'Male', bio: 'I like skiing!', hometown: 'Queens', education: 'Skiing University', work: 'Tutoring', relationship: 'Single', website: 'None')
User.create!(email: 'Haha@gmail.com', password: '123123', firstName: 'Carly', lastName: 'Lau', birthdate: '3-3-2003', gender: 'Female', bio: 'I like dancing!', hometown: 'Manhattan', education: 'Dancing University', work: 'Waitress', relationship: 'Dating', website: 'None')

demo = User.find_by(email: 'demo@mail.com')
kinka = User.find_by(email: 'coder123@gmail.com')
bob = User.find_by(email: 'BobJason@gmail.com')
carly = User.find_by(email: 'Haha@gmail.com')

# demo.profilePicUrl.attach(io: File.open("app/assets/images/FaceNovel-Demo-ProfPic-Center9.png"), filename: "FaceNovel-Demo-ProfPic-Center9.png")
# kinka.profilePicUrl.attach(io: File.open("app/assets/images/Facenovel-Kin-Profile-Pic.png"), filename: "Facenovel-Kin-Profile-Pic.png")
# bob.profilePicUrl.attach(io: File.open("app/assets/images/Facenovel-Bob-Profile-Pic.png"), filename: "Facenovel-Bob-Profile-Pic.png")
# carly.profilePicUrl.attach(io: File.open("app/assets/images/Facenovel-Carly-Profile-Pic.png"), filename: "Facenovel-Carly-Profile-Pic.png")

# demo.coverPicUrl.attach(io: File.open("app/assets/images/Facenovel-Demo-Background2.png"), filename: "Facenovel-Demo-Background2.png")
# kinka.coverPicUrl.attach(io: File.open("app/assets/images/Facenovel-Kin-Cover-Pic.png"), filename: "Facenovel-Kin-Cover-Pic.png")
# bob.coverPicUrl.attach(io: File.open("app/assets/images/Facenovel-Bob-Cover-Pic.png"), filename: "Facenovel-Bob-Cover-Pic.png")
# carly.coverPicUrl.attach(io: File.open("app/assets/images/Facenovel-Carly-Cover-Pic.png"), filename: "Facenovel-Carly-Cover-Pic.png")