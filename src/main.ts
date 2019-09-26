import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

// Uncomment the following lines to activate the service worker
// if (navigator.serviceWorker) {
// 	navigator.serviceWorker.register('sw.js').then(() => {
// 		console.log('Service worker installed')
// 	}, err => {
// 		console.error('Service worker error:', err);
// 	});
// }

platformBrowserDynamic().bootstrapModule(AppModule);
