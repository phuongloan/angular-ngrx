import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Tab } from "../../tabs";
import * as fromRoot from '../../store/tabs/tabs.selector';
import { SupplierService } from 'src/app/services/supplier.service';
import { Subject } from "rxjs"
import { takeUntil } from "rxjs/operators"

@Component({
  selector: 'app-suppllier',
  templateUrl: './suppllier.component.html',
  styleUrls: ['./suppllier.component.css']
})
export class SuppllierComponent implements OnInit, OnDestroy {
  data: any = null;
  componentDestroyed$: Subject<boolean> = new Subject();
  displayedColumns: string[] = ['code', 'name', 'type', 'country'];
  dataSource = this.supplierService.getItems();
  constructor(private store: Store<{ tabs: Tab[] }>, private supplierService: SupplierService) {

  }

  ngOnInit(): void {
    this.store.select(fromRoot.getCurrentTab).pipe(takeUntil(this.componentDestroyed$)).subscribe((item: Tab) => {
      //this.tab = item;

      // if (this.tab != undefined) {
      //   if (this.tab.tabData == null) {
      //     this.data = this.supplierService.getItems();
      //     let data = this.data;
      //     this.store.dispatch(updateDataItem({ item, data }));

      //   }
      //   else {
      //     this.data = this.tab.tabData;

      //   }
      // }

    });
  }
  ngOnDestroy() {
    this.componentDestroyed$.next(true)
    this.componentDestroyed$.complete()
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
