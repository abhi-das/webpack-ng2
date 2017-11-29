import {Component, ViewChildren, ContentChild, QueryList, AfterViewInit} from '@angular/core';

import { CardComponent } from '../card/card.component';

@Component({
	selector: 'card-list',
	templateUrl: './card-list.html',
	styleUrls: ['./card-list.css']
})

export class CardListComponent implements AfterViewInit {

	@ViewChildren(CardComponent) cardChildren: QueryList<CardComponent>;


	private cardArr: CardComponent[];

	ngAfterViewInit() {

		this.cardArr = this.cardChildren.toArray();
		// console.log(this.cardArr[0]);

	}

	
}