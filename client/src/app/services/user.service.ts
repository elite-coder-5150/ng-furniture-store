import {Injectable} from '@angular/core';
import axios from "axios";

@Injectable({
	providedIn: 'root'
})
export class UserService {
	public apiUrl: string = 'http://localhost:3000';

	constructor() {}

	getUsers(): Promise<any> {
		return axios.get(`${this.apiUrl}/users`);
	}

	// q: what does the above function do?
	// a: it sends a request to the server to get all users

	getUser(id: string): Promise<any> {
		return axios.get(`${this.apiUrl}/user/${id}`);
	}

	// q: what does the above function do?
	// a: it sends a request to the server to get a user

	createUser(data: FormData): Promise<any> {
		return axios.post(`${this.apiUrl}/user`, data);
	}

	// q: what does the above function do?
	// a: it sends a request to the server to create a user

	updateUser(id: string, data: FormData): Promise<any> {
		return axios.put(`${this.apiUrl}/user/${id}`, data);
	}

	// q: what does the above function do?
	// a: it sends a request to the server to update a user

	deleteUser(id: string): Promise<any> {
		return axios.delete(`${this.apiUrl}/user/${id}`);
	}

	// q: what does the above function do?
	// a: it sends a request to the server to delete a user
}
