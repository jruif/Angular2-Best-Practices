/**
 * main.ts.ts
 *
 * @Author: jruif
 * @Date: 16/9/27 下午6:44
 */

import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);