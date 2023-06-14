import {Injectable} from '@angular/core';
import {LoginData} from "../models/login-data";
import {Observable} from "rxjs";
import axios from "axios";
import {HttpClient} from "@angular/common/http";
@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private baseUrl = 'http://localhost:3000';
	constructor(private http: HttpClient) {}

	login(data: FormData) {
		// return this.http.post(`${this.baseUrl}/user/login`, data);
		return axios.post(`${this.baseUrl}/user/login`, data);
	}

	register(data: FormData) {
		// return this.http.post(`${this.baseUrl}/user/register`, data);
		return axios.post(`${this.baseUrl}/user/register`, data);
	}

}
