import { Injectable } from '@angular/core';

@Injectable()

export class InfoService {

	infoArr = [{
		id: '01',
		comments: 'Sed sint ullamco exercitation in in culpa minim duis.'
	}, {
		id: '02',
		comments: 'Ad reprehenderit enim reprehenderit dolor ut quis dolore cupidatat excepteur laboris enim incididunt mollit consectetur pariatur non labore eu ut dolore eiusmod occaecat in sunt tempor exercitation dolor mollit ut in.'
	}, {
		id: '03',
		comments: 'Dolor dolore dolore cupidatat et nostrud esse mollit culpa et et id velit dolor aute amet sunt ea ad sit culpa ea aute excepteur sed.'
	}, {
		id: '04',
		comments: 'Ut duis reprehenderit reprehenderit non id fugiat eu in non quis est dolore ad non quis nostrud laboris sed consequat nulla sit deserunt qui sit nulla eu labore eiusmod reprehenderit.'
	}];

	getInfoById(smId:string) {
		return this.infoArr.filter(itm => itm.id == smId);
	}
}