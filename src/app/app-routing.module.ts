import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {RootComponent} from "~/app/root/root.component";
import {ItemComponent} from "~/app/item/item.component";
import {TagComponent} from '~/app/tag/tag.component';

const routes: Routes = [
    { path: "",
        component: RootComponent
    },
    { path: "item/:slug",
        component: ItemComponent
    },
    { path: "tag/:tag",
        component: TagComponent
    }

];
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
