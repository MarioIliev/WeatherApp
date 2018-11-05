import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'details/:town', component: DetailsComponent},
    { path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}