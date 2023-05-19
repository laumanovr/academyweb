import {sendDeleteRequest, sendGetRequest} from '@/api/api.service';

export class SubscriptionApi {
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

	cancelSubscription(subId) {
	  const url = `/stripe/subscriptions/${subId}`;
		return sendDeleteRequest(url, '');
	}
}

export default new SubscriptionApi();
