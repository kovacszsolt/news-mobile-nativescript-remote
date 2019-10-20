import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RemoteService} from '~/app/service/remote';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'Tag',
    styleUrls: ['tag.css'],
    templateUrl: './tag.component.html'
})
export class TagComponent implements OnInit {
    public items = [];
    private page = 1;
    private tag = '';

    constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private remoteService: RemoteService) {
    }

    private loadData() {
        this.remoteService.getTag(this.tag, this.page).subscribe((response) => {
            this.items = this.items.concat(response.content);
        });
    }

    ngOnInit(): void {
        this.tag = this.activatedRoute.snapshot.params['tag'];
        this.page = 1;
        this.items = [];
        this.loadData();
    }

    loadMoreItems() {
        this.page++;
        this.loadData();
    }

}
