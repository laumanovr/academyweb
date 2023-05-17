import {sendGetRequest, sendPutRequest} from '@/api/api.service';

export class CabinetApi {
	constructor () {
		this.profileUrl = 'http://3.124.239.218:8000/com.bimiboo.learning.games';
		this.subscriptionUrl = 'http://3.124.239.218:8001';
	}

	fetchCurrentUser () {
		const url = `${this.profileUrl}/me`;
		return sendGetRequest(url);
	}

	updateCurrentUser(body) {
		const url = `${this.profileUrl}/me`;
		return sendPutRequest(url, body);
	}

	fetchSubscriptions() {
		const url = `${this.subscriptionUrl}/subscriptions`;
		return sendGetRequest(url);
	}
}

export default new CabinetApi();
