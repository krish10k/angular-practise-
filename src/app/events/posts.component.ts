import { Component, OnInit } from "@angular/core"
import { PostService } from "./shared/prac.service";
@Component({
    selector: "post-list",
    template: `
    <h1>Hello<h1>
    <div  *ngFor="let post of posts">
    <span>{{post.name}}</span>
    </div>
    `
})

export class PostComponent implements OnInit {
    posts: any
    constructor(private postService: PostService) {

    }
    ngOnInit() {
        this.postService.getPosts().subscribe(
            data => { this.posts = data; },
            (error) => { console.log(error); }
        )
    }
}
