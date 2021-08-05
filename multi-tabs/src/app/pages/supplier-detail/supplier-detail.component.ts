import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import * as fromRoot from '../../store/pages/pages.selector';
import { SupplierService } from 'src/app/services/supplier.service';

import { getIsReload } from '../../store/reload/reload.selector';
import { updatePageData } from 'src/app/store/pages/pages.actions';
import { updateTabName } from '../../store/tabs/tabs.actions';
@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css']
})
export class SupplierDetailComponent implements OnInit {
  data: any = null;
  constructor(private store: Store, private titleService: Title, private supplierService: SupplierService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.select(fromRoot.getPageState('supplier' + id)).subscribe((page: any) => {
      this.data = { ...page };
    });
    let isReload$: boolean = false;
    this.store.select(getIsReload).subscribe((isReload: boolean) => {
      isReload$ = isReload;
    });
    if (!this.data || (Object.keys(this.data).length === 0) || isReload$) {
      let data = {
        pageId: 'supplier' + id,
        data: this.supplierService.getSupplierDetail(id),
        count: 0
      }
      this.store.dispatch(updatePageData({ page: data }))
    }
  }
  ngOnInit(): void {
    let currentName = this.titleService.getTitle().replace('OMC Admin - ', '');
    this.titleService.setTitle('OMC Admin - Supplier - ' + this.data.data.name);
    this.store.dispatch(updateTabName({ currentName, newName: 'Supplier - ' + this.data.data.name }))
  }

}
