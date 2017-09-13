import { Injectable } from '@angular/core';

@Injectable()

export class MenuListService {

	mListServ = [{
		img: 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg',
		title: 'Cupidatat ex cupidatat',
		summary: 'Dolor officia et cillum fugiat',
		mediaDate: '15 Feb, 2014',
		shortTitle: 'Id dolore et'
	},{
		img: 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg',
		title: 'Dolor cillum',
		summary: 'Laborum reprehenderit magna culpa mollit',
		mediaDate: '25 Mar, 2017',
		shortTitle: 'Id Laborum eu'
	},{
		img: 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg',
		title: 'Dolore labore ut minim cupidatat',
		summary: 'Incididunt duis',
		mediaDate: '21 Dec, 2014',
		shortTitle: 'Lorem ipsum laborum'
	},{
		img: 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg',
		title: 'Deserunt sed',
		summary: 'Mollit consequat reprehenderit in',
		mediaDate: '11 June, 2014',
		shortTitle: 'Lorem ipsum do minim duis'
	}];

	getMenuList() {
		return this.mListServ;
	}

	updateMenuList(nItem:any) {

		var newItem = {
			img: 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg',
			title: nItem.title,
			summary: nItem.summary,
			mediaDate: nItem.mediaDate,
			shortTitle: nItem.shortTitle
		};

		this.mListServ.push(newItem);
	}

	deleteMenuList(mListItm:any) {
		let index = this.mListServ.indexOf(mListItm);

		if(index >= 0) {
			this.mListServ.splice(index, 1);
		}
	}

}