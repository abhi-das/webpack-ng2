import { Routes, RouterModule } from '@angular/router';

import { CardListComponent } from './card-list/card.list.component';

import { CountryList } from './country-list/country.list.component';
import { CountryDetail } from './country-detail/country.detail.component';

const routes = [
	{ path: 'cards', component: CardListComponent},
	{ path: 'countrylist', component: CountryList},
	{ path: 'countrydetail', component: CountryDetail},
	{ path: '', pathMatch: 'full', redirectTo: 'cards'}
];

export const AppRoute = RouterModule.forRoot(routes);