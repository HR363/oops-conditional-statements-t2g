
const users = [
  { name: "njuguna", age: 20 },
  { name: "omondi", age: 13 },
  { name: "dante", age: 17 },
  { name: "wanjiru", age: 23 }
];

const adults = [];

for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 18) {
    adults.push(users[i]);
  }
}

console.log("Adults (18+):", adults);

