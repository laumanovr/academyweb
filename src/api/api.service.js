import axios from "axios";
import {authHeader} from "@/utils/authHeader";
import store from "@/store/index";

const BASE_URL = 'https://apiacademy.mybimiboo.dev';

export const sendGetRequest = (url) => sendRequest('GET', url);

export const sendPostRequest = (url, data) => sendRequest('POST', url, data);

export const sendPutRequest = (url, data) => sendRequest('PUT', url, data);

export const sendDeleteRequest = (url, data) => sendRequest('DELETE', url, data);

const sendRequest = async (method, finalUrl, data={}) => {
	const url = `${BASE_URL}/${finalUrl}`;
	const isFormData = data instanceof FormData;
	const config = {
		method,
		url,
		data,
		headers: {
			...authHeader(),
			'Content-Type': !isFormData ? 'application/json' : '',
		},
	};
	try {
		const res = await axios(config);
		return res.data;
	} catch (err) {
	  if (err?.response?.status === 401) {
	    await store.dispatch('auth/logout');
	    setTimeout(() => {
				store.dispatch('loader/setLoader', false);
				window.location.reload();
			}, 500);
			return;
		}
		return Promise.reject(err?.message);
	}
};
