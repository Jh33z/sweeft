import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { UserserviceService } from '../shared/userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any[]=[]
  constructor(private userService: UserserviceService){
  }
ngOnInit(){
  this.userService.users().subscribe(data=>{
  this.users = data.list
  console.log(this.users)
 })
}

@HostListener('window:scroll', ['$event'])
  onScroll(event: ElementRef) {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight) {
      this.userService.page++;
      this.userService.users().subscribe(data=>{
        this.users = [...this.users, ...data.list]
       })
    }
  }


}
