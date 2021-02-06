import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
    imports: [ CommonModule, BrowserAnimationsModule ],
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