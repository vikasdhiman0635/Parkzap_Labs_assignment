import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserregisterservicesService } from '../Service/userregisterservices.service';
import { ageValidator } from './age.Validator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  birthdate: Date;
  age: number;

  constructor(private fb: FormBuilder, private router: Router,
    private service: UserregisterservicesService) { }

  ngOnInit() { }

  rForm = this.fb.group({
    name: ['', [Validators.required]],
    age: ['', [Validators.required]],
    email: ['', [Validators.required,Validators.email]],
    mobile: ['', [Validators.required,Validators.maxLength(10)]]
  });

  public CalculateAge() 
  {
    if (this.rForm.value.age) {
      const bdate = new Date(this.rForm.value.age);
      const timeDiff = Math.abs(Date.now() - bdate.getTime());
      this.rForm.value.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }
    // console.log(this.rForm.value.age);
  }

  addpost(data) {
    this.CalculateAge();
    if(this.rForm.value.age<18)
    {
      alert("Your age is leser then 18");
    }
    if(this.rForm.value.age>=18)
    {
      console.log(this.rForm.value);
      this.service.savedata(this.rForm.value).subscribe((Response) => {
      // console.log(Response);
        if (Response != null) {
          alert("Your data is stored successful");
        }
      });
    }
  }

}
