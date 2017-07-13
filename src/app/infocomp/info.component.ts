import { Component } from '@angular/core';
import { InfoService } from './info.service'; 


@Component({
	selector: 'info-comp',
	templateUrl: './info.html',
	providers: [
		InfoService
	]
})

export class InfoComponent {

	constructor(private inSrv: InfoService) {}

	itmInfo: Object;

	ngOnInit() { }

	showInfo(id: string){
		this.itmInfo = this.inSrv.getInfoById(id)[0];
		// console.log(id);
	}

}