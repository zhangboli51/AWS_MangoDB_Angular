import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpecialEventComponent } from './special-event/special-event.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent} from './events/events.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/event',
    pathMatch: 'full'
  },
  {
      path: 'events',
      component: EventsComponent  
  },
  {
    path:'special',
    component: SpecialEventComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
