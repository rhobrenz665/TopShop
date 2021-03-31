import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: 'Rhob Test',
    email: 'rhob@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Kora Doe',
    email: 'kora@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
