import axios from "axios";
import {authHeader} from "@/utils/authHeader";

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
	    window.localStorage.removeItem('token');
			window.location.replace(window.location.origin + '/#/login');
			return;
		}
		return Promise.reject(err?.message);
	}
};
