console.log("Welcome To Employee Payroll Data")
//Creating employee payroll data with id, name and salary
class EmployeePayrollData{

    //constructor
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getName() {
        return this._name;
      }
      setName(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
        if (nameRegex.test(name)) {
          this.name = name;
        } else throw 'name is incorrect';
      }
    
      getId() {
        return this._id;
      }
      setId(id) {
        let idRegex = RegExp('^[^0]');
        if (idRegex.test(id)) {
          this.id = id;
        } else throw 'id should not start with 0 or negative number';
      }
      getGender() {
        return this._gender;
      }
      setGender(gender) {
        let genderRegex = RegExp('[M|F]');
        if (genderRegex.test(gender)) {
          this.gender = gender;
        } else throw 'gender should be M or F';
      }

    toString(){
        return "Id = " + this.id + "\nName = " + this.name + "\nSalary = " + this.salary;
    }
}
//calling the constructor
let employeePayrollData = new EmployeePayrollData(1, "Tanuja", 500000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
employeePayrollData.name = "Maya";
employeePayrollData.salary = 40000;
console.log(employeePayrollData.toString());