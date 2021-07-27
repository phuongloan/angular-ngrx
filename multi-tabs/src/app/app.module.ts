import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { tabsReducer } from './store/tabs/tabs.reducer';
import { counterReducer } from './store/counter/counter.reducer';
import { reducers } from './store/reducer';
// import { EffectsModule } from '@ngrx/effects';
// import { AppEffects } from './effects';
import { reduceState, StoreModule } from '@ngrx/store';
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
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'supplier', children: [
          { path: 'index', component: SuppllierComponent },
          { path: 'detail/:id', component: SupplierDetailComponent },
          { path: '', redirectTo: 'index', pathMatch: 'full' },
        ]
      },
      {
        path: 'hotel', children: [
          { path: 'index', component: HotelComponent },
          { path: 'detail', component: HotelDetailComponent },
          { path: '', redirectTo: 'index', pathMatch: 'full' },
        ]
      },
      {
        path: 'mapping', children: [
          { path: 'index', component: MappingComponent },
          { path: '', redirectTo: 'index', pathMatch: 'full' },
        ]
      },
      {
        path: 'reservation', children: [
          { path: 'index', component: ReservationComponent },
          { path: '', redirectTo: 'index', pathMatch: 'full' },
        ]
      },
      {
        path: 'notice', children: [
          { path: 'index', component: NoticeComponent },
          { path: '', redirectTo: 'index', pathMatch: 'full' },
        ]
      },
      { path: '', redirectTo: '/supplier/index', pathMatch: 'full' },

    ]),
    StoreModule.forRoot({ count: counterReducer }),
    StoreModule.forFeature('appState', reducers),
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
