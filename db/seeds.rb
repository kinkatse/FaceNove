# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
User.create!(email: 'demo@mail.com', password: 'password', firstName: 'Demo', lastName: 'User', birthdate: '2000-1-1', gender: 'Male', bio: '', hometown: '', education: '', work: '', relationship: '', website: '')
User.create!(email: 'coder123@gmail.com', password: '123123', firstName: 'Kin Ka', lastName: 'Tse', birthdate: '2000-1-1', gender: 'Male', bio: 'I like tennis!', hometown: 'Brooklyn', education: 'Tennis University', work: 'Halo Agency Employee', relationship: 'Dating', website: 'https://github.com/kinkatse')
User.create!(email: 'BobJason@gmail.com', password: '123123', firstName: 'Bob', lastName: 'Jason', birthdate: '2011-11-11', gender: 'Male', bio: 'I like skiing!', hometown: 'Queens', education: 'Skiing University', work: 'Tutoring', relationship: 'Single', website: 'None')
User.create!(email: 'Haha@gmail.com', password: '123123', firstName: 'Carly', lastName: 'Lau', birthdate: '1999-12-31', gender: 'Female', bio: 'I like dancing!', hometown: 'Manhattan', education: 'Dancing University', work: 'Waitress', relationship: 'Dating', website: 'None')

demo = User.find_by(email: 'demo@mail.com')
kinka = User.find_by(email: 'coder123@gmail.com')
bob = User.find_by(email: 'BobJason@gmail.com')
carly = User.find_by(email: 'Haha@gmail.com')

# Attaching all the photos to the seeded users
demo.profilePicUrl.attach(io: File.open("app/assets/images/Facenove_Demo_ProfPic.png"), filename: "Facenove_Demo_ProfPic.png")
kinka.profilePicUrl.attach(io: File.open("app/assets/images/User_Kin_ProfPic.png"), filename: "User_Kin_ProfPic.png")
bob.profilePicUrl.attach(io: File.open("app/assets/images/User_Bob_ProfPic.png"), filename: "User_Bob_ProfPic.png")
carly.profilePicUrl.attach(io: File.open("app/assets/images/User_Carly_ProfPic.png"), filename: "User_Carly_ProfPic.png")
demo.coverPicUrl.attach(io: File.open("app/assets/images/Facenove_Demo_Background.png"), filename: "Facenovel-Demo-Background.png")
kinka.coverPicUrl.attach(io: File.open("app/assets/images/User_Kin_CovPic.png"), filename: "User_Kin_CovPic.png")
bob.coverPicUrl.attach(io: File.open("app/assets/images/User_Bob_CovPic.png"), filename: "User_Bob_CovPic.png")
carly.coverPicUrl.attach(io: File.open("app/assets/images/User_Carly_CovPic.png"), filename: "User_Carly_CovPic.png")

Post.create!(post: "Hello, this is Demo's first post", user_id: 1)
Post.create!(post: "Oh my god, this is my second post!", user_id: 1)
Post.create!(post: "I like to play tennis, does anyone want to play?", user_id: 2)