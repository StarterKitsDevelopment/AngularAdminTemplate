import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                    {
                        label: 'Activities',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Contacts',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/auth/login']
                    },
                    {
                        label: 'Employee',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Job',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Form',
                                icon: 'pi pi-fw pi-sign-out',
                                routerLink: ['/auth/login']
                            }
                        ]
                    },
                    {
                        label: 'File Image',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'File Upload',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'School',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/auth/login']
                    },
                    {
                        label: 'Student',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/auth/login']
                    },

                ]
            },
        ];
    }
}
