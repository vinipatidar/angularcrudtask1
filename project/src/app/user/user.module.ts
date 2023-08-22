import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { SliderComponent } from './shared/slider/slider.component';
import { FeatureCategoryComponent } from './shared/feature-category/feature-category.component';
import { SubscribeComponent } from './shared/subscribe/subscribe.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MyPageComponent } from './pages/my-page/my-page.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { ProductBoxComponent } from './shared/product-box/product-box.component';


@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    SliderComponent,
    FeatureCategoryComponent,
    SubscribeComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    MyPageComponent,
    MyProfileComponent,
    ProductBoxComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
