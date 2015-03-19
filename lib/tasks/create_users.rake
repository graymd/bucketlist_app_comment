task create_users: :environment do

  User.create!({
    email: 'test@test.com',
    password: "password",
    admin: 1,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    bucket_list_item_ids: [1, 2, 3, 4, 5]
  })

  20.times do
    User.create!({
    email: Faker::Internet.email,
    password: "password",
    admin: 0,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    })
  end

end
