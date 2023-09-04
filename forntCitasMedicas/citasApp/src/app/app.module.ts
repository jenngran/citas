import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './web/home/home.component';
import { CitasComponent } from './web/citas/citas.component';
import { LoginComponent } from './web/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { libreriasModule } from './web/librerias.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CitasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    libreriasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
