import {Component, ContentChild, AfterContentInit} from '@angular/core';

import { TexxtDirective } from './test.directive';

@Component({
	selector: 'card',
	templateUrl: './card.html',
	styleUrls: ['./card.css']
})

export class CardComponent implements AfterContentInit{


	@ContentChild(TexxtDirective) txxtContentChild: TexxtDirective;

	ngAfterContentInit() {
	   console.log(this.txxtContentChild.txxEleRef.nativeElement.children[0]);
	}

}