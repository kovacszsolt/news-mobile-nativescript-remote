import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {RootComponent} from "~/app/root/root.component";
import {ItemComponent} from "~/app/item/item.component";
/*
const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) }
];

 */
const routes: Routes = [
    { path: "",
        component: RootComponent
    },
    { path: "item/:slug",
        component: ItemComponent
    }
];
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
