import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'test';
  name: string = '';
  address: string = '';

  responseName: string ='';
  responseAddress: string = '';
  constructor(private appService: AppService) {
   
  }

  submit(){
   const userData = {
      Name: this.name,
      Address: this.address,
    };
    this.appService.savePerson(userData).subscribe(
      (response) => {
        this.responseName = response.name;
        this.responseAddress = response.address;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
