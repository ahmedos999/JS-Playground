function user(name, age) {
  // create obj this
  // this {name = {name} | age = {age}}
  this.name = name;
  this.age = age;

  //   return this
}

user.prototype.ageUp = function () {
  this.age++;
};

const user1 = new user("ahmed", 18);
const user2 = new user("omer", 22);

user1.ageUp();
user2.ageUp();

console.log(user1.name);
console.log(user1.age);

console.log(user2.name);
console.log(user2.age);
