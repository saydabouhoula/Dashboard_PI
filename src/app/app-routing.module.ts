import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { AlcoComponent } from './alco/alco.component';
import { SboulaComponent } from './sboula/sboula.component';
import { FacialRecognitionComponent } from './facial-recognition/facial-recognition.component';
import { Login1Component } from './login1/login1.component';
import { AboutComponent } from './about/about.component';
import { MlComponent } from './ml/ml.component';
import { TestComponent } from './test/test.component';
import { Ml2Component } from './ml2/ml2.component';
import { ProfileComponent } from './profile/profile.component';
import { Ml2AlcoComponent } from './ml2-alco/ml2-alco.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'test', component: TestComponent, canActivate: [AuthGuard] },
  {path:'ml',component:MlComponent, canActivate: [AuthGuard]},
  {path:'ml2alco',component:Ml2AlcoComponent, canActivate: [AuthGuard]},
  {path:'ml2',component:Ml2Component, canActivate: [AuthGuard]},
  {path:'login',component:Login1Component},
  {path:'about',component:AboutComponent},
  {path:'profile',component:ProfileComponent},
  {path:'Alco', component:AlcoComponent, canActivate: [AuthGuard]},
  {path:'Sboula', component:SboulaComponent, canActivate: [AuthGuard]},
  {path:'test', component:TestComponent},
  {path:'aa',component:FacialRecognitionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
