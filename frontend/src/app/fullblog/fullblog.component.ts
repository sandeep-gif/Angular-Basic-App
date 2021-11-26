import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/blog.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blog } from '../blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fullblog',
  templateUrl: './fullblog.component.html',
  styleUrls: ['./fullblog.component.css']
})
export class FullblogComponent implements OnInit {

  blog!: Blog;

  constructor(public blogService:BlogService, private router:Router) { }

  ngOnInit(): void {
  }

}
