class CheckingAccount {
  
  constructor(id, email, firstName, lastName) {
    this.clientId(id);
    this.emaill(email);
    this.firstNames(firstName);
    this.lastNames(lastName);
  }

  clientId(value) {
    if (value.length !== 6) {
      throw TypeError("Client ID must be a 6-digit number");
    }
    this.clientId = this.clientId;
  }

  emaill(value) {
    const regex = /[a-zA-Z0-9]+\@[a-zA-Z]+\.[a-zA-Z]+/g;
    if (value.match(regex) === null) {
      throw TypeError("Invalid e-mail");
    }
    this.emaill = this.emaill;
  }

  firstNames(value) {
    const letters = /[A-za-z]+/g;
    if (value.length < 3 || value.length > 20) {
      throw TypeError("First name must be between 3 and 20 characters long");
    } else if (value.match(letters) === null) {
      throw TypeError("First name must contain only Latin characters");
    }
    this.firstNames = this.firstNames;
  }

  lastNames(value) {
    const letters = /^[A-Za-z]+$/g;
    if (value.length < 3 || value.length > 20) {
      throw TypeError("Last name must be between 3 and 20 characters long");
    } else if (value.match(letters) === null) {
      throw TypeError("Last name must contain only Latin characters");
    }
    this.lastNames = this.lastNames;
  }
}
let acc = new CheckingAccount("1314", "ivan@some.com", "Ivan", "Petrov");
console.log(acc);
