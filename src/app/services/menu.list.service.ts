import { Injectable } from '@angular/core';

@Injectable()

export class MenuListService {

	mListServ = [{
		title: 'Cupidatat ex cupidatat',
		shortTitle: 'Id dolore et',
		summary: 'Dolor officia et cillum fugiat Aute consectetur do nisi pariatur exercitation excepteur ut in irure aliquip ad dolore culpa ut cillum in excepteur cupidatat consectetur dolor eu non minim nostrud exercitation aliqua sit consequat ea velit laboris nisi eiusmod.'
	},{
		title: 'Dolor cillum',
		shortTitle: 'Id Laborum eu',
		summary: 'Laborum reprehenderit magna culpa mollit Excepteur proident in sed dolor enim in anim consequat magna culpa laboris in tempor proident sunt reprehenderit labore fugiat id eu deserunt ex in deserunt cillum exercitation pariatur non irure.'
	},{
		title: 'Dolore labore ut minim cupidatat',
		shortTitle: 'Lorem ipsum laborum',
		summary: 'Incididunt duis Veniam in tempor nulla irure irure eiusmod sunt duis deserunt ex labore proident nulla ut elit cupidatat aliqua ut sint id amet cupidatat ea velit non.'
	},{
		title: 'Deserunt sed',
		shortTitle: 'Lorem ipsum do minim duis',
		summary: 'Mollit consequat reprehenderit in Lorem ipsum ut ullamco ex minim labore laboris eu elit consequat sed exercitation in in fugiat aliquip sed consectetur aliquip velit cillum exercitation voluptate dolor veniam adipisicing fugiat dolore.'
	}];

	getMenuList() {
		return this.mListServ;
	}

	updateMenuList(nItem:any) {

		var newItem = {
			title: nItem.title,
			summary: nItem.summary,
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