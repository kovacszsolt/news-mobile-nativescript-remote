import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RemoteService} from "~/app/service/remote";

@Component({
    selector: "Home",
    styleUrls: ['home.css'],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public items = [];

    constructor(private http: HttpClient, private remoteService: RemoteService) {
    }

    ngOnInit(): void {
        console.log('hello amber');
        this.remoteService.getList(1).subscribe((response) => {
            this.items = response.content;
        });
        // Init your component properties here.
    }

}
