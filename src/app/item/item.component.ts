import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RemoteService} from '~/app/service/remote';
import {ActivatedRoute} from '@angular/router';
import {ItemModel} from '~/app/model/item.model';

@Component({
    selector: 'Item',
    styleUrls: ['item.css'],
    templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
    public item = new ItemModel();
    private slug = '';

    constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private remoteService: RemoteService) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.slug = params.slug;
            this.remoteService.getSlug(this.slug).subscribe((response) => {
                this.item = response;
            });
        });


    }

    goBack() {

    }

    openSettings() {

    }
}
