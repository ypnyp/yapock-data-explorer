import { Component, OnInit } from '@angular/core';
import { HealthService } from '../../services/health.service';
import { TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';

@Component({
	selector: 'app-starter-home',
	templateUrl: './starter-home.component.html',
	styleUrls: ['./starter-home.component.scss']
})
export class StarterHomeComponent implements OnInit {
	data: any = {};
	Object = Object;

	simpleModel = new TableModel();

	constructor(private healthService: HealthService) {
	}

	ngOnInit() {
		this.healthService.checkStatus().subscribe(result => {
			setTimeout(() => {
				this.data = result;
			}, 1000);

			this.simpleModel.data = [];

			for (const key in result.plugins) {
				if (result.plugins.hasOwnProperty(key)) {
					this.simpleModel.addRow([new TableItem({data: key}), new TableItem({data: `${result.plugins[key].loaded}`})]);
				}
			}
			this.simpleModel.header = [
				new TableHeaderItem({data: 'Name'}), new TableHeaderItem({data: 'Loaded'})
			];
		});
	}

}
