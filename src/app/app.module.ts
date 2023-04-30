import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home-area/home/home.component';
import { PersonalInfoComponent } from './components/home-area/personal-info/personal-info.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { ResponsiveDirective } from './services/responsive.directive';
import { EducationComponent } from './components/home-area/education/education.component';
import { ExperienceComponent } from './components/home-area/experience/experience.component';
import { SkillsComponent } from './components/home-area/skills/skills.component';
import { ContactComponent } from './components/contact-area/contact/contact.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    ResponsiveDirective,
    HeaderComponent,
    HomeComponent,
    PersonalInfoComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent
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
