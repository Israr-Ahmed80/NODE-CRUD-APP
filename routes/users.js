import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

var users = [];

//All Users

router.get("/", (req, res) => {
  res.send(users);
});

//Create New User

router.post("/", (req, res) => {
  const newUser = req.body;
  const userId = uuidv4();
  users.push({ ...newUser, id: userId });
  res.send(`The new user "${newUser.firstName}" added to database!`);
});

//Get user by Id

router.get("/:id", (req, res) => {
  const userToFind = req.params.id;
  const detectedUser = users.find((newUser) => newUser.id === userToFind);
  res.send(detectedUser);
  console.log(`User with the ID: ${userToFind} is detected!`);
});

//Delete User

router.delete("/:id", (req, res) => {
  const userToDelete = req.params.id;
  users = users.filter((newUser) => newUser.id !== userToDelete);
  res.send(`User with ID: ${userToDelete} is deleted from the database`);
});

//Edit / Update User

router.patch("/:id", (req, res) => {
  const userToUpdate = req.params.id;
  const { firstName, lastName, age } = req.body;
  const updatedUser = users.find((newUser) => newUser.id === userToUpdate);

  if (firstName) updatedUser.firstName = firstName;
  if (lastName) updatedUser.lastName = lastName;
  if (age) updatedUser.age = age;

  res.send(`User with ID: ${userToUpdate} has been updated!`);
});

export default router;
