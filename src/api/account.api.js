import {sendGetRequest, sendPostRequest, sendPutRequest} from '@/api/api.service';

export class AccountApi {
	constructor () {
		this.clientId = 'accounts/com.bimiboo.learning.games';
	}

	signUp(body) {
		const url = `${this.clientId}/signup`;
		return sendPostRequest(url, body);
	}

	login(body) {
	  const url = `${this.clientId}/login`;
	  return sendPostRequest(url, body);
  }

	fetchCurrentUser () {
		const url = `${this.clientId}/me`;
		return sendGetRequest(url);
	}

	updateCurrentUser(body) {
		const url = `${this.clientId}/me`;
		return sendPutRequest(url, body);
	}
}

export default new AccountApi();
