/**
 * app.module.ts
 *
 * @Author: jruif
 * @Date: 16/9/27 下午6:12
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/first/first';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}