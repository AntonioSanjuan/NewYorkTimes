import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RequestAuthInterceptor } from 'src/app/interceptors/httpAuthorization.interceptor';
import { StoreModule } from '@ngrx/store';

// Core modules
const modules = [BrowserModule, BrowserAnimationsModule, HttpClientModule];

@NgModule({
  declarations: [],
  imports: [StoreModule.forRoot({}), ...modules],
  exports: [...modules],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestAuthInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
