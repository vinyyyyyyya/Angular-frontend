import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  constructor(private employeeservice:EmployeeService,private route:ActivatedRoute) { }
   
  id!:number;
  employee!:Employee;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employee=new Employee();
    this.employeeservice.getEmployeeById(this.id).subscribe((data)=>{
        this.employee=data;
    })
  }



}
