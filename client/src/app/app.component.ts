import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: any;
  
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/account').subscribe({
      next: (data) => this.users = data,
      error: (error) => console.log(error),
      complete: () => console.log('completed')
    });
  }
}
