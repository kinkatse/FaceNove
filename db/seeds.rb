# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Post.delete_all
Comment.delete_all
Like.delete_all

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

# slightly randomized order for a better looking index:
Post.create!(body: "Hello, this is Demo's first post", user_id: demo.id)
Post.create!(body: "I like to play tennis, does anyone want to play?", user_id: kinka.id)
Post.create!(body: "I'm a barbie girl and a carly girl", user_id: carly.id)
Post.create!(body: "Skiing is cool", user_id: bob.id)
Post.create!(body: "Oh my god, this is my second post!", user_id: demo.id)
Post.create!(body: "I am really liking the color theme function for this app because I can change it to my favorite color, green!", user_id: kinka.id)
Post.create!(body: "I love mochi <3", user_id: carly.id)
Post.create!(body: "Does anyone wanna talk about that last Demon Slayer episode?! That animation was insane!! One day, I want to be able to do something creative to that extent", user_id: kinka.id)
Post.create!(body: "I just fell into the soft snow. It was nice.", user_id: bob.id)
Post.create!(body: "I'm getting sick of snow in Canada these days. I just wanna go out and have fun! A trip under the hot sun would be nice...", user_id: carly.id)
Post.create!(body: "I can create, read, update and delete posts!", user_id: demo.id)
Post.create!(body: "Sometimes when no one is looking, I put some snow in my mouth and imagine I'm eating ice cream", user_id: bob.id)
Post.create!(body: "The food in NYC is great but the food in Hong Kong is unmatched. I miss the food over there!", user_id: kinka.id)
Post.create!(body: "I like dancing but wish I could do it as a living. It's hard to make money in that industry unless you are really good.", user_id: carly.id)
Post.create!(body: "What? People think I'm too obsessed with skiing and want me to talk about something else. Well I like to water ski as well", user_id: bob.id)
Post.create!(body: "I have recently been getting into cooking and use HelloFresh. It's been a fun experience so far and learned a lot with how ingredients mix. I think my prep skills have improved since the first day it would take me around 30 minutes to prep the ingredients but now I can do it in half the time! But the mess in the kitchen after I cook is the worst part. I wish I could just avoid that because that can take an additional hour every time and feels like a major waste of time... But the food is good and somewhat affordable so that's a good balance, especially since it's cheaper and healthier than ordering from UberEats.", user_id: kinka.id)
Post.create!(body: "Can someone give me a ride to the mall...?", user_id: carly.id)
Post.create!(body: "Welcome to FaceNove!", user_id: demo.id)

# # demo posts
# Post.create!(body: "Hello, this is Demo's first post", user_id: demo.id)
# Post.create!(body: "Oh my god, this is my second post!", user_id: demo.id)
# Post.create!(body: "I can create, read, update and delete posts!", user_id: demo.id)
# Post.create!(body: "Welcome to FaceNove!", user_id: demo.id)

# # carly posts
# Post.create!(body: "I'm a barbie girl and a carly girl", user_id: carly.id)
# Post.create!(body: "I love mochi <3", user_id: carly.id)
# Post.create!(body: "I'm getting sick of snow in Canada these days. I just wanna go out and have fun! A trip under the hot sun would be nice...", user_id: carly.id)
# Post.create!(body: "I like dancing but wish I could do it as a living. It's hard to make money in that industry unless you are really good.", user_id: carly.id)
# Post.create!(body: "Can someone give me a ride to the mall...?", user_id: carly.id)

# # kinka posts
# Post.create!(body: "I like to play tennis, does anyone want to play?", user_id: kinka.id)
# Post.create!(body: "I am really liking the color theme function for this app because I can change it to my favorite color, green!", user_id: kinka.id)
# Post.create!(body: "Does anyone wanna talk about that last Demon Slayer episode?! That animation was insane!! One day, I want to be able to do something creative to that extent", user_id: kinka.id)
# Post.create!(body: "The food in NYC is great but the food in Hong Kong is unmatched. I miss the food over there!", user_id: kinka.id)
# Post.create!(body: "I have recently been getting into cooking and use HelloFresh. It's been a fun experience so far and learned a lot with how ingredients mix. I think my prep skills have improved since the first day it would take me around 30 minutes to prep the ingredients but now I can do it in half the time! But the mess in the kitchen after I cook is the worst part. I wish I could just avoid that because that can take an additional hour every time and feels like a major waste of time... But the food is good and somewhat affordable so that's a good balance, especially since it's cheaper and healthier than ordering from UberEats.", user_id: kinka.id)

# # bob posts
# Post.create!(body: "Skiing is cool", user_id: bob.id)
# Post.create!(body: "I just fell into the soft snow. It was nice.", user_id: bob.id)
# Post.create!(body: "Sometimes when no one is looking, I put some snow in my mouth and imagine I'm eating ice cream", user_id: bob.id)
# Post.create!(body: "What? People think I'm too obsessed with skiing and want me to talk about something else. Well I like to water ski as well", user_id: bob.id)