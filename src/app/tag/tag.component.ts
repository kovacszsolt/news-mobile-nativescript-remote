import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RemoteService} from "~/app/service/remote";
import {SearchBar} from "tns-core-modules/ui/search-bar";

@Component({
    selector: "Tag",
    styleUrls: ['tag.css'],
    templateUrl: "./tag.component.html"
})
export class TagComponent implements OnInit {
    public items = [];
    private page = 1;

    constructor(private http: HttpClient, private remoteService: RemoteService) {
    }

    private loadData() {
        this.remoteService.getTag('game',this.page).subscribe((response) => {
            this.items = this.items.concat(response.content);
        });
    }

    ngOnInit(): void {
        this.loadData();
    }

    loadMoreItems() {
        this.page++;
        this.loadData();
    }

}
