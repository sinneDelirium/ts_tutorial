type UserRole = "guest" | "user" | "admin"; // Union
type User = {
  id: number;
  username: string;
  role: UserRole;
}
type UpdatedUser = Partial<User>; // Partial, all properties are optional

let users: User[] = [
  { id: 1, username: "user1", role: "user" },
  { id: 2, username: "user2", role: "admin" },
  { id: 3, username: "user3", role: "guest" },
];

const updateUser = (id: number, updates: UpdatedUser): void => {
  let user = users.find(user => user.id === id);
  if (!user) {
    throw new Error(`User by id ${id} not found`);
  }
  // assign updates properties to user since same keys
  Object.assign(user, updates);
  // Works the same as Object.assign
  // for (let key in updates) {
  //   user[key] = updates[key];
  // }
};

// Cannot just user Partial<User> as the type for newUser since
// need to include username and role, but not id
// So, use Omit<User, "id"> to exclude id from User
// Can use | to union strings in Omit
const addNewUser = (newUser: Omit<User, "id">): User => {
  let id = users.length + 1;
  let user = { id, ...newUser };
  users.push(user);
  return user;
};

updateUser(1, { username: "user1-updated" });
updateUser(2, { role: "user" });
updateUser(3, { username: "user3-updated", role: "admin" });

addNewUser({ username: "user4", role: "user" });

console.log(users);