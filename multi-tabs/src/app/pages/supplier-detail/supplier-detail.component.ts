import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import * as fromRoot from '../../store/pages/pages.selector';
import { SupplierService } from 'src/app/services/supplier.service';

import { updatePageData } from 'src/app/store/pages/pages.actions';
import { updateTabName, updatePageId, updateChangedStatus } from '../../store/tabs/tabs.actions';
@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css']
})
export class SupplierDetailComponent implements OnInit, OnDestroy {
  pageData: any = null;
  isCreate: boolean = true;
  pageId: string = 'supplierCreate';
  pageTitle: string = 'Supplier Create';
  supplierId: string | null = '';
  constructor(private store: Store, private titleService: Title, private supplierService: SupplierService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.supplierId = params.get('id');
      // Do more processing here if needed
      if (this.supplierId) {
        this.isCreate = false;
        this.pageId = 'supplier' + this.supplierId;
      }
      this.store.select(fromRoot.getPageState(this.pageId)).subscribe((page: any) => {
        this.pageData = { ...page };
      });
      if (!this.pageData || (Object.keys(this.pageData).length === 0)) {
        let data =
        {
          ...this.supplierService.getSupplierDetail(this.supplierId), pageId: this.pageId,
          count: 0
        }

        this.store.dispatch(updatePageData({ page: data }))
      }
      this.pageTitle = this.isCreate ? 'Supplier Create' : 'Supplier - ' + this.pageData.name;

    });

  }
  ngOnInit(): void {
    let currentName = this.titleService.getTitle().replace('OMC Admin - ', '');
    this.titleService.setTitle('OMC Admin - ' + this.pageTitle);
    this.store.dispatch(updateTabName({ currentName, newName: this.pageTitle }));
    this.store.dispatch(updatePageId({ tabName: this.pageTitle, pageId: 'supplier' + this.pageData.code }))
  }
  update() {
    this.store.dispatch(updatePageData({ page: { ...this.pageData } }))
    this.store.dispatch(updateChangedStatus({ tabName: this.pageTitle, changedStatus: true }));
  }
  ngOnDestroy(): void {
    // console.log('destoied')
  }
}
