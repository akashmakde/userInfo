import { ApiService } from './api.service';
import { AddUserComponent } from './add-user/add-user.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
   alluserData=[]
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'DOB','gender','status'];
  dataSource = new MatTableDataSource<any>(this.alluserData);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private dialog: MatDialog,private api:ApiService,private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
   this.getAllUsers();
  }
  addData() {
		let dialogRef = this.dialog.open(AddUserComponent, {
      // height:'40%',
      width:'50%',
			data: {
				action: "new",
				// userId: id,
			},
		});
		dialogRef.afterClosed().subscribe((result) => {
      if(result === 'success' ){
        this.getAllUsers();    

          this._snackBar.open("User Added Successfully",'', {
            duration: 1000
          });
 
      }
			console.log("CustomerInfoComponent -> openDialog -> result", result);
			
			console.log("The dialog was closed");
		});
	}
getAllUsers(){
  this.api.getAllUser().subscribe((res:any)=>{
    console.log(res);
    this.alluserData=res.records;
    this.alluserData.forEach((element, index) => {
      element.index = index + 1; //adding index
    });    
   
    this.dataSource = new MatTableDataSource(this.alluserData);
    this.dataSource.paginator = this.paginator;
  })
}
}


