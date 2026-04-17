function formatName(firstName, lastName) {
  return lastName.trim().toUpperCase() + " " +
    firstName.trim().charAt(0).toUpperCase() +
    firstName.trim().slice(1).toLowerCase();
}

console.log(formatName(" esther ", " ogbu "));