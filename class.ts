class User {
  email: string;
  name: string;
  private readonly city: string = "jaipur"; // if we  want to make it priveate in js we write #city

  protected coerceCount = 1;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }

  get getTheValue(): string {
    return `this is city ${this.city}`;
  }

  // sets doesn't have any return value

  set setTheValue(abc: string) {
    this.name = abc;
  }

  private deleteToken() {
    console.log("deleted");
  }
}


class subUser extends User {
     family : boolean = true;

     changeCourse () {
        this.coerceCount = 1;   // can access protected property in the child class
     }
}

const Aditya = new User("asd@d.com", "aditya");

export {};
