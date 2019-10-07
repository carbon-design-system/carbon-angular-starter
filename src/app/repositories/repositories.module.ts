import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepoPageComponent } from './repo-page/repo-page.component';


@NgModule({
	declarations: [RepoPageComponent],
	imports: [
		CommonModule,
		RepositoriesRoutingModule
	]
})
export class RepositoriesModule { }
