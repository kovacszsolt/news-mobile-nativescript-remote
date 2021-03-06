import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RemoteService} from "~/app/service/remote";
import {SearchBar} from "tns-core-modules/ui/search-bar";

@Component({
    selector: "Root",
    styleUrls: ['root.css'],
    templateUrl: "./root.component.html"
})
export class RootComponent implements OnInit {
    public items = [];
    private page = 1;

    public searchPhrase: string;

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        alert("You are searching for " + searchBar.text);
    }

    public onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    }



    constructor(private http: HttpClient, private remoteService: RemoteService) {
    }

    private loadData() {
        this.remoteService.getList(this.page).subscribe((response) => {
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
