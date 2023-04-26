import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { ResponsiveDirective } from './services/responsive.directive';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    ResponsiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
