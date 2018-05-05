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
import {FormsModule} from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import {HttpClientModule} from '@angular/common/http'



// step 1  - configurations - url to component mapping
import{Routes,RouterModule} from '@angular/router'
import { ProductModule } from './product/product.module';
const routes :Routes =[
    {
        path:'',
        component:HomeComponent
    },
    
    {
        path:'cart',
        component:CartComponent
    },
    
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'**',
        component:NotFoundComponent
    },

]

// place holder
// providing links in frotnend

@NgModule(
    {
        imports:[
                // other module dependency
                BrowserModule,// CommonModule , Compile referenced here
                FormsModule,

            // apply  routes to angular
            RouterModule.forRoot(routes),
            HttpClientModule,

                SharedModule,
                // to do lazy loading
                ProductModule


                
        ],

        declarations : [
            AppComponent,
            HeaderComponent,
            FooterComponent,
            HomeComponent,
            ContactComponent,
            AboutComponent,
            CartComponent,
            NotFoundComponent
        ],
        bootstrap:[
            AppComponent
        ] 
    })

    export class AppModule
    {
        
    }