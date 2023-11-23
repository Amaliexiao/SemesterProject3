const fs = require("fs");
const bcrypt = require("bcrypt");

// Sample array of users (replace this with your actual user data)
const users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

// Function to hash passwords for an array of users and save to a file
const hashPasswordsAndSaveToFile = (users, fileName) => {
  users.forEach((user) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) {
          console.error(
            `Error hashing password for user ${user.username}:`,
            err
          );
        } else {
          user.hashedPassword = hash;
          console.log(`Hashed password for user ${user.username}:`, hash);

          // Save the updated user data to a file
          fs.writeFile(fileName, JSON.stringify(users, null, 2), (err) => {
            if (err) {
              console.error("Error saving user data to file:", err);
            } else {
              console.log(`User data saved to ${fileName}`);
            }
          });
        }
      });
    });
  });
};

// Specify the filename
const fileName = "users.json";

// Call the function with the array of users and the filename
hashPasswordsAndSaveToFile(users, fileName);
