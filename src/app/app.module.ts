import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {RootComponent} from "~/app/root/root.component";
import {ItemComponent} from "~/app/item/item.component";
import {CardComponent} from '~/app/card/card.component';
import {TagComponent} from '~/app/tag/tag.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule

    ],
    declarations: [
        AppComponent,
        RootComponent,
        ItemComponent,
        CardComponent,
        TagComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
