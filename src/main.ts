import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

// If you want to activate the service worker just follow the instructions at https://angular.io/guide/service-worker-getting-started
platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch((err) => console.error(err));
