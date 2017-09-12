import { Component } from '@angular/core';

@Component({
	selector: 'menu-list',
	templateUrl: './menu.list.html',
	styleUrls: ['./menu.list.css']
})

export class MenuListComponent {

	public tblRows: any;

	constructor() {}

	ngOnInit() {

		this.tblRows = [{
			img: 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg',
			title: 'Cupidatat ex cupidatat',
			summary: 'Dolor officia et cillum fugiat',
			mediaData: '15 Feb, 2014',
			shortTitle: 'Id dolore et'
		},{
			img: 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg',
			title: 'Dolor cillum',
			summary: 'Laborum reprehenderit magna culpa mollit',
			mediaData: '25 Mar, 2017',
			shortTitle: 'Id Laborum eu'
		},{
			img: 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg',
			title: 'Dolore labore ut minim cupidatat',
			summary: 'Incididunt duis',
			mediaData: '21 Dec, 2014',
			shortTitle: 'Lorem ipsum laborum'
		},{
			img: 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg',
			title: 'Deserunt sed',
			summary: 'Mollit consequat reprehenderit in',
			mediaData: '11 June, 2014',
			shortTitle: 'Lorem ipsum do minim duis'
		}];
	
	}

	addRowHandler() {
		// console.log("add..");
		var addItm = {
			img: 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg',
			title: 'Officia officia Nisi occaecat enim',
			summary: 'New Officia in minim',
			mediaData: '20 September, 2015',
			shortTitle: 'Deserunt in minim'
		};

		this.tblRows.push(addItm);
	}

	deleteHandler(tbRw:any) {
		// console.log('delete action');
		var rowIdx = this.tblRows.indexOf(tbRw);
		this.tblRows.splice(rowIdx, 1);
	}

}