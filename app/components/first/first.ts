/**
 * first.ts
 *
 * @Author: jruif
 * @Date: 16/9/27 下午6:47
 */

import { Component } from '@angular/core';

@Component({
    selector: '#root',
    templateUrl: './first.html'
})
export class AppComponent{

    title: string;
    heroes: any[];

    constructor(){
        this.title = "My app";
        this.heroes = [0,"j.ruif",'lalala'];
    }
}