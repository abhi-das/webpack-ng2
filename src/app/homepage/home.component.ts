import { Component, ViewChild } from '@angular/core';

import { HomeService } from './home.service';
import { InfoComponent } from '../infocomp/info.component';


@Component({
	selector: 'home-page',
	templateUrl: './home.html',
	providers: [
		HomeService
	],
	styleUrls: ['./home.styles.css']
})


export class HomeComponent {
	
	itms: Array<any>;

	@ViewChild(InfoComponent) infoComp: InfoComponent;

	constructor(private hSrv: HomeService) {}


	ngOnInit() {

		this.itms = this.hSrv.getThings();
	}

	showInfoFromChild(idx:string) {
		// console.log(idx)
		this.infoComp.showInfo(idx);
	}

}