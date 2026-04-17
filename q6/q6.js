function displayProfile(profile) {
  const { name, age, city, hobby } = profile;
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`City: ${city}`);
  console.log(`Hobby: ${hobby.join(", ")}`);
}

const myProfile = {
  name: "Alexander",
  age: 20,
  city: "Peru",
  hobby: ["Cooking"],
};

console.log("Profile Information:");
displayProfile(myProfile);