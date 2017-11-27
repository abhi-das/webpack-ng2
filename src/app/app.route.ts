import { Routes, RouterModule } from '@angular/router';

import { CountryList } from './country-list/country.list.component';
import { CountryDetail } from './country-detail/country.detail.component';

const routes = [
	{ path: 'countrylist', component: CountryList},
	{ path: 'countrydetail', component: CountryDetail},
	{ path: '', pathMatch: 'full', redirectTo: 'countrylist'}
];

export const AppRoute = RouterModule.forRoot(routes);