db.users.insert(
    {
        name: 'Ali,',
        age: 21,
        add: 'Berlin',
        hobbies: ['dance', 'sleep'],
        emails: {
            private: 'me@mail.com',
            work: 'you@gmail.com'
    },
    data: Date(),
});

// new one
db.users.insert(
{
    name: 'Nancy,',
    age: 34,
    add: 'Paris',
    data: Date()
});

// new one
db.users.insertMany([
    {
        name: 'Jack,',
        age: 22,
        add: 'Paris',
        data: Date()
    }]);