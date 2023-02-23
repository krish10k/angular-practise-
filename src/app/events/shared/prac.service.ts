import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private url = "https://jsonplaceholder.typicode.com/users";

    constructor(private httpClient: HttpClient) { }
    getPosts() {
        return this.httpClient.get(this.url);
        // this.httpClient.get(this.url).subscribe(
        //     data => {
        //         const posts = data;
        //         console.log(posts)
        //         return posts;

        //     },
        //     error => {
        //         console.log(error)
        //         return error;
        //     }

        // )
        // return [];

    }
}