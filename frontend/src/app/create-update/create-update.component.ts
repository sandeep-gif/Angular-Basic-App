import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/shared/blog.service';
import { Blog } from 'src/app/blog';


@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})

export class CreateUpdateComponent implements OnInit {
  public blog!:Blog;
  constructor(private blogService:BlogService, private router:Router) { }

  ngOnInit(): void {
    this.blog = this.blogService.getter();
  }

  createOrUpdate(){
    if(this.blog._id==undefined)
    {
    this.blogService.createBlog(this.blog).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/']);
      },

      error => {
        console.log(error);
      }
    )}
    
    else{
      this.blogService.updateBlog(this.blog, this.blog._id).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/']);
        },
  
        error => {
          console.log(error);
      })
    
    }
  }
}


