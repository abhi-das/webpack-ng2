import { Component } from '@angular/core';
import { MenuListService } from '../services/menu.list.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'menu-list',
	templateUrl: './menu.list.html',
	styleUrls: ['./menu.list.css'],
	providers: [ MenuListService ]
})

export class MenuListComponent {

	tblRows: any;
	form: any;

	constructor(private mListServices: MenuListService) {}

	ngOnInit() {

		this.tblRows = this.mListServices.getMenuList();
		this.form = new FormGroup({
			title: new FormControl(),
			shortTitle: new FormControl(),
			mediaDate: new FormControl(),
			summary: new FormControl()
		});

	}

	addRowHandler(formVals:any) {

		this.mListServices.updateMenuList(formVals);
	}

	deleteHandler(tbRw:any) {
		this.mListServices.deleteMenuList(tbRw);
	}

}