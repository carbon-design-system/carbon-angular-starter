import { Component, OnInit } from '@angular/core';

import {
	TableModel,
	TableItem,
	TableHeaderItem,
} from 'carbon-components-angular';

@Component({
	selector: 'app-repo-table',
	templateUrl: './repo-table.component.html',
	styleUrls: ['./repo-table.component.scss']
})
export class RepoTableComponent implements OnInit {
	model = new TableModel();

	constructor() {}

	ngOnInit() {
		this.model.data = [
			[
				new TableItem({ data: 'Repo 1', expandedData: 'Row description' }),
				new TableItem({ data: 'Date' }),
				new TableItem({ data: 'Date' }),
				new TableItem({ data: '123' }),
				new TableItem({ data: '456' }),
				new TableItem({ data: 'Links' }),
			],
			[
				new TableItem({ data: 'Repo 2', expandedData: 'Row description' }),
				new TableItem({ data: 'Date' }),
				new TableItem({ data: 'Date' }),
				new TableItem({ data: '123' }),
				new TableItem({ data: '456' }),
				new TableItem({ data: 'Links' }),
			],
			[
				new TableItem({ data: 'Repo 3', expandedData: 'Row description' }),
				new TableItem({ data: 'Date' }),
				new TableItem({ data: 'Date' }),
				new TableItem({ data: '123' }),
				new TableItem({ data: '456' }),
				new TableItem({ data: 'Links' }),
			],
		];
		this.model.header = [
			new TableHeaderItem({ data: 'Name' }),
			new TableHeaderItem({ data: 'Created' }),
			new TableHeaderItem({ data: 'Updated' }),
			new TableHeaderItem({ data: 'Open Issues' }),
			new TableHeaderItem({ data: 'Stars' }),
			new TableHeaderItem({ data: 'Links' }),
		];
	}
}
