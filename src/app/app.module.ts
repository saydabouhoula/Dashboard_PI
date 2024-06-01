import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlcoComponent } from './alco/alco.component';
import { SboulaComponent } from './sboula/sboula.component';
import { FacialRecognitionComponent } from './facial-recognition/facial-recognition.component';
import { Login1Component } from './login1/login1.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { MlComponent } from './ml/ml.component';
import { TestComponent } from './test/test.component'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { Ml2Component } from './ml2/ml2.component';
@NgModule({
  declarations: [
    AppComponent,
    AlcoComponent,
    SboulaComponent,
    FacialRecognitionComponent,
    Login1Component,
    AboutComponent,
    MlComponent,
    TestComponent,
    Ml2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
