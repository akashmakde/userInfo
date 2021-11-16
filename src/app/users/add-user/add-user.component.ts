import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm:FormGroup
  constructor(private dialogRef: MatDialogRef<AddUserComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
    private fb : FormBuilder,private api:ApiService
    ) { }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      gender:[],
      dob:[],
    })

  }

  onSubmit(){
    console.log(this.addUserForm.value);
    let data =
    {  
      fields: {
      "First Name": this.addUserForm.get('firstName').value,
      "Last Name":this.addUserForm.get('lastName').value,
      "Date of Birth":this.addUserForm.get('dob').value,
      "Status": "Active",
      "Gender": this.addUserForm.get('gender').value,
      }
    };
    console.log(data);
    
    this.api.addUser(data).subscribe((res)=>{
      console.log(res);
      
    })
    this.dialogRef.close('success');

  }
}
