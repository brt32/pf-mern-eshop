import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@home.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@home.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@home.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
