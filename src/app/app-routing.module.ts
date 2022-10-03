import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { PageNotFoundComponent } from './layout/components/page-not-found/page-not-found.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    {
                        path: '', loadChildren: () => import('./layout/components/dashboard/dashboard.module').then(m => m.DashboardModule)
                    },
                    {
                        path: 'pages', loadChildren: () => import('./layout/components/pages/pages.module').then(m => m.PagesModule)
                    }
                ]
            },
            {
                path: 'auth',
                loadChildren: () => import('./layout/components/auth/auth.module').then(m => m.AuthModule)
            },
            {
                path: '**', component: PageNotFoundComponent
            }
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
