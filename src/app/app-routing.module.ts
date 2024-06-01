import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlcoComponent } from './alco/alco.component';
import { SboulaComponent } from './sboula/sboula.component';
import { FacialRecognitionComponent } from './facial-recognition/facial-recognition.component';
import { Login1Component } from './login1/login1.component';
import { AboutComponent } from './about/about.component';
import { MlComponent } from './ml/ml.component';
import { TestComponent } from './test/test.component';
import { Ml2Component } from './ml2/ml2.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'ml',component:MlComponent},
  {path:'ml2',component:Ml2Component},
  {path:'login',component:Login1Component},
  {path:'about',component:AboutComponent},
  {path:'Alco', component:AlcoComponent},
  {path:'Sboula', component:SboulaComponent},
  {path:'test', component:TestComponent},
  {path:'aa',component:FacialRecognitionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
