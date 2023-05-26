import {sendDeleteRequest, sendGetRequest, sendPostRequest} from '@/api/api.service';

export class Subscription {
	constructor () {
	}

	fetchSubscriptions() {
		const url = 'iap/subscriptions';
		return sendGetRequest(url);
	}

	fetchStripeProducts() {
	  const url = 'iap/stripe/products';
	  return sendGetRequest(url);
	}

	createSubscription(body) {
		const url = 'iap/stripe/subscription';
		return sendPostRequest(url, body);
	}

	cancelSubscription(subId) {
	  const url = `iap/stripe/subscriptions/${subId}`;
		return sendDeleteRequest(url, '');
	}
}

export default new Subscription();
