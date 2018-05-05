// module is a logical collection of
// components , directives , pipes (filters) 
// services (providers)

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from './shared/shared.module';


@NgModule(
    {
        imports:[
                // other module dependency
                BrowserModule,// CommonModule , Compile referenced here
                SharedModule
        ],

        declarations : [
            AppComponent,
            HeaderComponent,
            FooterComponent,
            HomeComponent,
            ContactComponent,
            AboutComponent
        ],
        bootstrap:[
            AppComponent
        ] 
    })

    export class AppModule
    {
        
    }