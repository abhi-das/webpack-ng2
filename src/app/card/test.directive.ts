import {Directive, ElementRef} from '@angular/core';


@Directive({
	selector: '[texxt]'
})

export class TexxtDirective {

	constructor(public txxEleRef: ElementRef) {}

}