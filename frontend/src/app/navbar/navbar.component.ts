import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/shared/blog.service';
import { Blog } from '../blog'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  catagory : any;
  constructor(private router:Router, private blogService:BlogService) { }

  ngOnInit(): void {
  }

  newBlog(event:any){
    event.preventDefault();
    this.blogService.setter(new Blog())
    this.router.navigate(['/createUpdate'])
  }

}
