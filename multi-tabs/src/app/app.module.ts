import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms'

import { reducers, metaReducers } from './store';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SuppllierComponent } from './pages/suppllier/suppllier.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { MappingComponent } from './pages/mapping/mapping.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { NoticeComponent } from './pages/notice/notice.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SupplierDetailComponent } from './pages/supplier-detail/supplier-detail.component';
import { HotelDetailComponent } from './pages/hotel-detail/hotel-detail.component';
import { MyCounterComponent } from './components/my-counter/my-counter.component';

import { MaterialModule } from './material-module';
import { LayoutModule } from '@angular/cdk/layout';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import ActivateGuard from './store/tabs/activate-guard';
@NgModule({
  declarations: [
    AppComponent,
    SuppllierComponent,
    HotelComponent,
    MappingComponent,
    ReservationComponent,
    NoticeComponent,
    HeaderComponent,
    FooterComponent,
    SupplierDetailComponent,
    HotelDetailComponent,
    MyCounterComponent,
    SideNavComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'supplier', children: [
          {
            path: 'index', component: SuppllierComponent, canActivate: [ActivateGuard], data: { title: 'Supplier', breadCrumb: ['Home', 'Supplier'] }
          },
          { path: 'detail/:id', component: SupplierDetailComponent, canActivate: [ActivateGuard], data: { title: 'Supplier Detail', breadCrumb: ['Home', 'Supplier', 'Supplier Detail'] } },
          { path: 'create', component: SupplierDetailComponent, canActivate: [ActivateGuard], data: { title: 'Supplier Create', breadCrumb: ['Home', 'Supplier', 'Supplier Create'] } },
          { path: '', redirectTo: 'index', pathMatch: 'full' },
        ]
      },
      {
        path: 'hotel', children: [
          { path: 'index', component: HotelComponent, canActivate: [ActivateGuard], data: { title: 'Hotel', breadCrumb: ['Home', 'Hotel'] } },
          { path: 'detail', component: HotelDetailComponent, canActivate: [ActivateGuard], data: { title: 'Hotel Detail', breadCrumb: ['Home', 'Hotel', 'Hotel Detail'] } },
          { path: '', redirectTo: 'index', pathMatch: 'full' },
        ]
      },
      {
        path: 'mapping', children: [
          { path: 'index', component: MappingComponent, canActivate: [ActivateGuard], data: { title: 'Mapping', breadCrumb: ['Home', 'Mapping'] } },
          { path: '', redirectTo: 'index', pathMatch: 'full' },
        ]
      },
      {
        path: 'reservation', children: [
          { path: 'index', component: ReservationComponent, canActivate: [ActivateGuard], data: { title: 'Reservation', breadCrumb: ['Home', 'Reservation'] } },
          { path: '', redirectTo: 'index', pathMatch: 'full' },
        ]
      },
      {
        path: 'notice', children: [
          { path: 'index', component: NoticeComponent, canActivate: [ActivateGuard], data: { title: 'Notice', breadCrumb: ['Home', 'Notice'] } },
          { path: '', redirectTo: 'index', pathMatch: 'full' },
        ]
      },
      { path: '', redirectTo: '/supplier/index', pathMatch: 'full' },

    ]),
    StoreModule.forRoot({},),
    StoreModule.forFeature('appState', reducers, { metaReducers }),
    //StoreModule.forFeature('appState', reducers),
    LayoutModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [ActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
