import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from '../blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blog!: Blog;
  private baseUrl : string ='http://localhost:4000';
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http : HttpClient) { }

  createBlog(blog:Blog){
    return this.http.post(this.baseUrl+'/create', blog, {headers:this.headers});
  }

  readBlogs(){
    return this.http.get(this.baseUrl+'/read', {headers:this.headers});
  }

  readBlog(blog:Blog){
    return this.http.get(this.baseUrl+'/read/:id', {headers:this.headers});
  }

  updateBlog(blog:Blog, id:string){
    return this.http.put(this.baseUrl+'/update/'+id, blog, {headers:this.headers});
  }

  deleteBlogs(id:string){
    return this.http.delete(this.baseUrl+'/delete/'+id, {headers:this.headers});
  }
  

  setter(blog:Blog){
    this.blog=blog;
  }

  getter(){
    return this.blog;
  }

  
}
