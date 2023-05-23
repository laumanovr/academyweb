export const authHeader = () => {
	const token = window.localStorage.getItem('token');
	if (token) {
		return {Authorization: `Bearer ${token}`};
	}
	return {};
};
