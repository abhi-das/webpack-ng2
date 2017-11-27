import { Injectable } from '@angular/core';

@Injectable()

export class CountryServices {

	cList = [
		{
			id: '001', 
			info: {
				countryCode: 'NL',
				countryName: 'Newzeland'
			}
		},{
			id: '002', 
			info: {
				countryCode: 'SL',
				countryName: 'Sri Lanka'
			}
		},{
			id: '003',
			info: {
				countryCode: 'IN',
				countryName: 'India'
			}
		}
	];

	getCountry() {
		return this.cList;
	}


}