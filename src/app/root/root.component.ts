import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RemoteService} from "~/app/service/remote";
import {ItemEventData} from "tns-core-modules/ui/list-view";
import {Router} from "@angular/router";

@Component({
    selector: "Root",
    styleUrls: ['root.css'],
    templateUrl: "./root.component.html"
})
export class RootComponent implements OnInit {
    public items = [];
    private page = 1;

    constructor(private http: HttpClient, private remoteService: RemoteService, private router: Router) {
    }

    private loadData() {
        this.remoteService.getList(this.page).subscribe((response) => {
            this.items = this.items.concat(response.content);
        });
    }

    ngOnInit(): void {
        this.loadData();
    }

    onItemTap(args: ItemEventData) {
        const index = args.index;
       // console.log('args', this.items[index]);
        this.router.navigate(["item", this.items[index].meta.slug]);
    }

    loadMoreItems() {
        this.page++;
        this.loadData();
    }

}
