import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: any;
  employee = new Employee();

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(
      (res) => {
        this.employees = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getEmployeesData() {
    this.dataService.getData().subscribe((res) => {
      this.employees = res;
    });
  }

  insertData() {
    //console.log(this.employee);
    this.dataService.insertData(this.employee).subscribe((res) => {
      this.getEmployeesData();
    });
  }

  deleteData(id) {
    //console.log(id);
    this.dataService.deleteData(id).subscribe((res) => {
      this.getEmployeesData();
    });
  }
}
