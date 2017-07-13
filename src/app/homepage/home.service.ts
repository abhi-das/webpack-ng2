import {  Injectable } from '@angular/core';

@Injectable()

export class HomeService {

	items = [{
		name: 'Thing 1',
		id: '01'
	}, {
		name: 'Thing 2',
		id: '02'
	}, {
		name: 'Thing 3',
		id: '03'
	}, {
		name: 'Thing 4',
		id: '04'
	}];

	getThings() {
		return this.items;
	}

}