import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.local';
import * as fromRoot from './tabs.selector';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { addItem } from './tabs.actions';


@Injectable()
export default class ActivateGuard implements CanActivate {
    private tabsLength: number = 0;
    tabName: string = '';
    url: string = '';
    routerParams: any;
    routerLink: string = '';
    limitTab: number = environment.limitTabs;
    isOnlyFromMenu: boolean = environment.addTabFromLeftMenuOnly;
    constructor(private store: Store, private router: Router) {
        this.store.select(fromRoot.getLengthOfTabs).subscribe((length: number) => {
            this.tabsLength = length;
        });
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let isFromMenu: boolean = this.router.getCurrentNavigation()?.extras.state?.isFromMenu;

        if (this.isOnlyFromMenu) {
            if (!isFromMenu) return true;
        }
        this.url = (state.url == '/' || state.url == '/supplier') ? '/supplier/index' : state.url;
        let isInList = true;
        this.store.select(fromRoot.isInTabs(this.url)).subscribe((isTrue: boolean) => {
            isInList = isTrue;
        });

        if (!isInList) {
            if (this.tabsLength >= this.limitTab) {
                alert('Activation blocked');
                return false;
            } else {
                this.tabName = route.data.title;
                this.routerParams = route.queryParams;
                this.routerLink = this.url.split('?')[0];
                this.store.dispatch(addItem({ item: { tabName: this.tabName, url: this.url, routerParams: this.routerParams, routerLink: this.routerLink } }))
            }
        }
        return true;
    }
    setCanActivate(length: number) {
        this.store.select(fromRoot.getLengthOfTabs).subscribe((length: number) => {
            this.tabsLength = length;
        });
    }
}