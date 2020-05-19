class Company {
  constructor() {
    this.departments = [];
  }
  addEmployee(username, salary, position, deparment) {
    if (!username || !position || !deparment) {
      throw new Error("Invalid input!");
    }
    if (
      salary === undefined ||
      salary === null ||
      salary === "" ||
      salary < 0
    ) {
      throw new Error("Invalid input!");
    }
    let incl = this.departments.find(el => el.name === deparment);
    if (!incl) {
      incl = {
        name: deparment,
        employees: [],
        username,
        avarageSalary: function() {
          return (
            this.employees.reduce((a, b) => a + b.salary, 0) /
            this.employees.length
          );
        }
      };
      this.departments.push(incl);
    }
    incl.employees.push({ username, salary, position });
    return `New employee is hired. Name: ${username}. Position: ${position}`;
  }
  bestDepartment() {
    const [best] = [...this.departments].sort((a, b) => {
      return b.avarageSalary() - a.avarageSalary();
    });

    let output = `Best Department is: ${best.name}\n`;
    output += `Average salary: ${best.avarageSalary().toFixed(2)}\n`;
    output += [...best.employees]
      .sort(
        (a, b) => b.salary - a.salary || a.username.localeCompare(b.username)
      )
      .map(e => `${e.username} ${e.salary} ${e.position}`)
      .join("\n");
    return output;
  }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
console.log();

console.log(`Best Department is: Construction
Average salary: 1500.00
Stan 2000 architect
Stanimir 2000 engineer
Pesho 1500 electrical engineer
Slavi 500 dyer
`);

//console.log(`expected 'Best Department is: Human resources\nAverage salary: 2000.00\nStanimir 2000 engineer' to equal 'Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR'`);
