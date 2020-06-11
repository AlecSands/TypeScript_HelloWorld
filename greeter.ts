interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " "+ person.lastName;
}

let user = {
  firstName: "Alec",
  lastName: "Sands"
};

document.body.textContent = greeter(user);
