import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './ui/header/header.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {GuestComponent} from './components/guest/guest.component';
import {TokenInterceptorService} from './services/token-interceptor/token-interceptor.service';
import {AuthService} from './services/auth/auth.service';
import {AuthGuard} from './auth.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule, MatTabsModule} from '@angular/material';
import {reducers} from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {SharedModule} from './shared/shared.module';
import {DropdownDirective} from './shared/directives/dropdown.directive';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        RegisterComponent,
        GuestComponent,
        DropdownDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        // Validators,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatTabsModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument(),
        SharedModule,
        MatProgressSpinnerModule
    ],
    providers: [AuthService, AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
