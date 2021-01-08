import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterHomeComponent } from './starter-home/starter-home.component';
import {
	ButtonModule,
	DialogModule,
	GridModule,
	ListModule, NumberModule, TableModule,
	TabsModule,
	TilesModule,
} from 'carbon-components-angular';

import { StarterHomeRoutingModule } from './starter-home-routing.module';
import { DeleteModule, DownloadModule, SaveModule, SettingsModule } from '@carbon/icons-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		StarterHomeRoutingModule,
		GridModule,
		ListModule,
		TabsModule,
		TilesModule,
		NumberModule,
		TableModule,
		DialogModule,
		ButtonModule,
		DeleteModule,
		SaveModule,
		DownloadModule,
		SettingsModule,
		FormsModule
	],
	declarations: [StarterHomeComponent]
})
export class StarterHomeModule { }
