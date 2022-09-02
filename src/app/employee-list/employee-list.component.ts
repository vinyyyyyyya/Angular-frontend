import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeservice:EmployeeService,private Route:Router) { }
  employees!: Employee[];

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeservice.getEmplist().subscribe((resp)=>{
      this.employees=resp;
    })
  }

  updateEmployee(id:number){
      this.Route.navigate(['update-employee',id]);
  }

  deleteEmployee(id:number){
    this.employeeservice.deleteEmployee(id).subscribe((data)=>{
      console.log(data);
      this.getEmployees();
    })
  }

  employeedetails(id:number){
    this.Route.navigate(['emp-details',id]);
  }

}
