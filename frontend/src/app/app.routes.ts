import { Routes } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'login',pathMatch:'full'
    },
    {
        path:'login',component:LayoutComponent,children:[
            {
                path:"dashboard",
                component:DashboardComponent
            }
        ]
    },
    
];
