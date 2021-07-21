import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { tabsReducer } from './store/tabs/tabs.reducer';
import { counterReducer } from './store/counter/counter.reducer';
import { reducers } from './store/reducer';
// import { EffectsModule } from '@ngrx/effects';
// import { AppEffects } from './effects';
import { StoreFeatureModule, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { Tab1Component } from './pages/tab1/tab1.component';
import { Tab2Component } from './pages/tab2/tab2.component';
import { Tab3Component } from './pages/tab3/tab3.component';
import { Tab4Component } from './pages/tab4/tab4.component';
import { Tab5Component } from './pages/tab5/tab5.component';
import { Tab6Component } from './pages/tab6/tab6.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Tab1DetailComponent } from './pages/tab1-detail/tab1-detail.component';
import { Tab2DetailComponent } from './pages/tab2-detail/tab2-detail.component';
import { MyCounterComponent } from './components/my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    Tab1Component,
    Tab2Component,
    Tab3Component,
    Tab4Component,
    Tab5Component,
    Tab6Component,
    HeaderComponent,
    FooterComponent,
    Tab1DetailComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'tab-1', component: Tab1Component, children: [
          { path: 'tab-1-detail/:id', component: Tab1DetailComponent }
        ]
      },
      {
        path: 'tab-2', component: Tab2Component, children: [
          { path: 'tab-2-detail', component: Tab2DetailComponent },
        ]
      },
      { path: 'tab-3', component: Tab3Component },
      { path: 'tab-4', component: Tab4Component },
      { path: 'tab-5', component: Tab5Component },
      { path: 'tab-6', component: Tab6Component },
      { path: '', redirectTo: '/tab-1', pathMatch: 'full' },

    ]),
    StoreModule.forRoot({ count: counterReducer, tabs: tabsReducer }),
    StoreModule.forFeature('appState', reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
