import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ItemModel, ItemPageModel} from "../model/item.model";

@Injectable({
    providedIn: 'root'
})
export class RemoteService {
    public constructor(private http: HttpClient) {
    }

    public getList(page): Observable<ItemPageModel> {
        return this.http.get<ItemPageModel>(`https://itnews.cloud/backend/list/${page}/8`).pipe(
            map((response) => {
                return new ItemPageModel(response)
            })
        );
    }

    public getSlug(slug): Observable<ItemModel> {
        return this.http.get<ItemPageModel>(`https://itnews.cloud/backend/${slug}`).pipe(
            map((response) => {
                return new ItemModel(response)
            })
        );
    }

    public getTag(tag,page): Observable<ItemPageModel> {
        return this.http.get<ItemPageModel>(`https://itnews.cloud/backend/tag/${tag}/${page}/8`).pipe(
            map((response) => {
                return new ItemPageModel(response)
            })
        );
    }
}
