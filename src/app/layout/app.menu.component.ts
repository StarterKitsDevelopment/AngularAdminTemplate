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
                        icon: 'pi pi-fw pi-at',
                        routerLink: ['/pages/activities']
                    },
                    {
                        label: 'Contacts',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/contacts']
                    },
                    {
                        label: 'Employee',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Form',
                                icon: 'pi pi-fw pi-id-card',
                                routerLink: ['/pages/employee/form']
                            },
                            {
                                label: 'Job',
                                icon: 'pi pi-fw pi-briefcase',
                                routerLink: ['/pages/employee/job']
                            }
                        ]
                    },
                    {
                        label: 'File Image',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['/pages/file-image']
                    },
                    {
                        label: 'File Upload',
                        icon: 'pi pi-fw pi-folder',
                        routerLink: ['/pages/file-upload']
                    },
                    {
                        label: 'School',
                        icon: 'pi pi-fw pi-building',
                        routerLink: ['/pages/school']
                    },
                    {
                        label: 'Student',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/pages/student']
                    },
                ]
            },
        ];
    }
}
