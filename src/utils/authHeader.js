export const authHeader = () => {
	const vuex = JSON.parse(window.localStorage?.vuex);
	const token = vuex?.auth?.token;
	if (token) {
		return {Authorization: `Bearer ${token}`};
	}
	return {};
};
