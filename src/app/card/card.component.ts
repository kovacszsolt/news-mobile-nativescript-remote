import {Component, Input, OnInit} from '@angular/core';
import {ItemEventData} from "tns-core-modules/ui/list-view";
import {Router} from "@angular/router";
import {ItemModel} from '~/app/model/item.model';

@Component({
    selector: "Card",
    styleUrls: ['card.css'],
    templateUrl: "./card.component.html"
})
export class CardComponent implements OnInit {
    @Input() item=new ItemModel({});

    constructor(private router: Router) {
    }


    ngOnInit(): void {
    }

    onItemTap(args: ItemEventData) {

        //const index = args.index;
       // console.log('args', this.items[index]);
        this.router.navigate(["item", this.item.meta.slug]);
    }


    onTagTap(args) {
        //const index = args.index;
        console.log('hello',args);
        // console.log('args', this.items[index]);
        this.router.navigate(["tag", args]);
    }

}
