/*
 * Copyright (c) 2020 "Yipnyap". See https://federation.yipnyap.xyz/oss/frontend for more information.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class HealthService {

	constructor(private http: HttpClient) {
	}

	checkStatus() {
		return this.http
			.get(`${localStorage.getItem('api_base') || 'http://localhost:3000'}/auth/health/alive`)
			.pipe(
				map((result: any) => {
					return result;
				})
			);
	}

}
