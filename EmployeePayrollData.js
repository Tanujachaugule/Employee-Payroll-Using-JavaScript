console.log("Welcome To Employee Payroll Data")
//Creating employee payroll data with id, name and salary
class EmployeePayrollData{

    //constructor
    constructor(id, name, salary,gender,startDate){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    getName() {
        return this._name;
      }
      setName(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
        if (nameRegex.test(name)) {
          this.name = name;
        } else 
        throw 'name is incorrect';
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
        } else 
        throw 'gender should be M or F';
      }
      getSalary(){ return this.salary; }
    setSalary(salary){
        let salaryRegex = RegExp('^[1-9][0-9]*$');
        if (salaryRegex.test(salary))
            this.salary = salary;
        else
            throw "SALARY is Incorrect";
    }
    getStartDate(){ return this.startDate; }
    setStartDate(startDate){
        if(startDate <= new Date())
            this.startDate = startDate;
        else
            throw "START DATE is Incorrect";
    }
      toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
        return "Id = " + this.id + ",\tName = " + this.name + ",\tSalary = " + this.salary +
         ",\tGender = " + this.gender + ",\tStart Date = " + employeeDate;
    }
}

//calling the constructor
let employeePayrollData = new EmployeePayrollData(1, "Tanuja", 500000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
employeePayrollData.name = "Maya";
employeePayrollData.salary = 40000;
console.log(employeePayrollData.toString());

let newemployeePayrollData = new EmployeePayrollData(4, "Shubham", 55000, "M", new Date());
console.log(newemployeePayrollData.toString());

