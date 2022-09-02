import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private employeeservice:EmployeeService,private route:Router) { }
  employee:Employee = new Employee();

  ngOnInit(): void {
  }

  saveemployee(){
    this.employeeservice.createEmployee(this.employee).subscribe((data)=>{
       console.log(data);
       this.gotoemplist();
    },err=>{
      console.log(err)
    })
  }
  
  gotoemplist(){
    this.route.navigate(['/employees'])
  }
  onSubmit(){
   console.log(this.employee)
   this.saveemployee();
 

  }


}
