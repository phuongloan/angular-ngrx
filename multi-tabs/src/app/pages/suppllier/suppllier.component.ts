import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/pages/pages.selector';
import { getIsReload } from '../../store/reload/reload.selector';
import { updatePageData } from 'src/app/store/pages/pages.actions';
import { SupplierService } from 'src/app/services/supplier.service';
import { Subject } from "rxjs"
import { updatePageId, updateChangedStatus } from '../../store/tabs/tabs.actions';

@Component({
  selector: 'app-suppllier',
  templateUrl: './suppllier.component.html',
  styleUrls: ['./suppllier.component.css']
})
export class SuppllierComponent implements OnInit, OnDestroy {
  data: any = null;
  componentDestroyed$: Subject<boolean> = new Subject();
  displayedColumns: string[] = ['code', 'name', 'type', 'country'];
  constructor(private store: Store, private supplierService: SupplierService) {

    this.store.select(fromRoot.getPageState('supplierList')).subscribe((page: any) => {
      this.data = { ...page };
    });
    let isReload$: boolean = false;
    this.store.select(getIsReload).subscribe((isReload: boolean) => {
      isReload$ = isReload;
    });
    if (!this.data || (Object.keys(this.data).length === 0) || isReload$) {
      let data = {
        pageId: 'supplierList',
        data: {
          supplierList: this.supplierService.getItems()
        },
        count: 0
      }
      this.store.dispatch(updatePageData({ page: data }))
      this.store.dispatch(updateChangedStatus({ tabName: 'Supplier', changedStatus: false }));

    }
    // if (isReload$) {
    //   let data = {
    //     pageId: 'supplierList',
    //     data: {
    //       supplierList: this.supplierService.getItems()
    //     },
    //     count: 0
    //   }
    //   this.store.dispatch(updatePageData({ page: data }))
    // }


  }
  ngOnInit(): void {
    this.store.dispatch(updatePageId({ tabName: 'Supplier', pageId: 'supplierList' }))
  }

  ngOnDestroy(): void {

  }
  increment() {
    this.data.count++;
    this.update();
  }

  decrement() {
    this.data.count--;
    this.update();
  }

  reset() {
    this.data.count = 0;
    this.store.dispatch(updatePageData({ page: { ...this.data } }))
    this.store.dispatch(updateChangedStatus({ tabName: 'Supplier', changedStatus: false }));

  }
  update() {
    this.store.dispatch(updatePageData({ page: { ...this.data } }));
    //this.store.dispatch(updateChangedStatus({ tabName: 'Supplier', changedStatus: true }));
  }
}
