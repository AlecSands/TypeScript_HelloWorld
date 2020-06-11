function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "Alec",
    lastName: "Sands"
};
document.body.textContent = greeter(user);
