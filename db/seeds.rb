# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# user_one = User.create(username: 'zicko', password_digest: '1234')
# user_two = User.create(username: 'zile', password_digest: 'hello')

users = [
    {
        username: 'user_one',
        password: '1234'
    },
    {
        username: 'user_two',
        password: 'abcd'
    },
    {
        username: 'uset_tree',
        password: 'xyz'
    }
]

users.map do |user|
    User.find_or_create_by(username: user[:username]) do |u|
        u.username = user[:username]
        u.password = user[:password]
    end
end