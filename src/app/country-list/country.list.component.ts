import { Component } from '@angular/core';
import { CountryServices } from '../services/country.service';


@Component({
	selector: 'country-list',
	templateUrl: './country.list.html',
  	styleUrls: ['./country.list.css'],
  	providers: [CountryServices]
})

export class CountryList { 

	loadCouList: CountryData[];

	constructor(private _cServ: CountryServices) {}

	ngOnInit() {

		this.loadCouList = this._cServ.getCountry();

		// console.log(this.loadCouList)
	}

}

export interface CountryData {
	id: String,
	info: {
		countryCode: String,
		countryName: String
	}
}