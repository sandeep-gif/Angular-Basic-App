import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/blog.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blog } from '../blog';
import { Router } from '@angular/router';
import { FullblogComponent } from '../fullblog/fullblog.component'; //'../fullblog/fullblog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  blogs: any;

  blogForm! : FormGroup;
  showModal:boolean = false;
  editMode:boolean = false;

  constructor(public blogService:BlogService, private router:Router) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.readBlogs().subscribe(res => {
      console.log(res);
      this.blogs = res;
    })
  }

  doUpdate(blog:Blog){
    this.blogService.setter(blog);
    this.router.navigate(['/createUpdate'])
  }

  doDelete(blog:Blog){
    this.blogService.deleteBlogs(blog._id).subscribe(
      data =>{
        this.blogs.splice(this.blogs.indexOf(blog),1);
      },
      error => {
        console.log(error)
      }

    )
  }



    
}


