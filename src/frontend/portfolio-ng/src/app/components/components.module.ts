import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: 
    [
        HomeComponent,
        ContactFormComponent
    ],
    exports: 
    [
        HomeComponent,
        ContactFormComponent
    ]
})
export class ComponentsModule {}