import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/";
import { Injectable } from "@angular/core";
import { User } from "../user";
import { ApiServiceService } from "../api-service.service";



@Injectable()
export class IdentifiantResolver implements Resolve<any> {

    user: Observable<User>;

    constructor(private api:ApiServiceService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
            this.user=this.api.getUser(route.params['login']);
        return this.user;
    }
}