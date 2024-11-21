const { User } = require("../models");

const userData = [
  {
    username: "alistair100",
    password: "password",
    first_name: "Alistair",
    last_name: "Houghton",
    user_bio: "I really like barbeques. Steak is my favourite food.",
    user_image: "user1.jpg",
  },
  {
    username: "matt100",
    password: "password",
    first_name: "Matthew",
    last_name: "Williams",
    user_bio: "I really like Italian food. Pasta is my favourite food.",
    user_image: "user2.jpg",
  },
  {
    username: "vienna100",
    password: "password",
    first_name: "Vienna",
    last_name: "Borowska",
    user_bio: "I really like Italian food. Pizza is my favourite food.",
    user_image: "user3.jpg",
  },
  {
    username: "sampreeti",
    password: "password",
    first_name: "Sampreeti",
    last_name: "Das",
    user_bio: "I really like Indian food. Fish is my favourite food.",
    user_image: "user4.jpg",
  },
  {
    username: "Delia",
    password: "password",
    first_name: "Delia",
    last_name: "Smith",
    user_bio: "I really like cakes. Sugar is my favourite food.",
    user_image: "delia.jpg",
  },
  {
    username: "Gordon",
    password: "password",
    first_name: "Gordon",
    last_name: "Ramsay",
    user_bio: "I really like pies. Pastry is my favourite food.",
    user_image: "gordon.jpg",
  },
  {
    username: "Nigella",
    password: "password",
    first_name: "Nigella",
    last_name: "Lawson",
    user_bio: "I really like rich dishes. Chocolate is my favourite food.",
    user_image: "sample-profile.jpg",
    user_image: "nigella.jpg",
  },
  {
    username: "Jamie",
    password: "password",
    first_name: "Jamie",
    last_name: "Oliver",
    user_bio: "I really like salads. Veg is my favourite food.",
    user_image: "sample-profile.jpg",
    user_image: "jamie.jpg",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
