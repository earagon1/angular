import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './home/home.component';

import { DetailComponent} from './detail/detail.component';

import { LoginComponent} from './login/login.component';

import { RecordComponent} from './record/record.component';



const routes: Routes = [



{path:"", component:HomeComponent},

{path:"detail", component:DetailComponent},

{path:"login", component:LoginComponent},

{path:"record", component:RecordComponent}


];



@NgModule({

imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]

})

export class AppRoutingModule { }