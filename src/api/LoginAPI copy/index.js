import request from '../../utils/request';

const LoginAPI = async (email, password) => {
	try {
		const res = await request.post('login', {
			email: email,
			password: password,
		});
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
export default LoginAPI;
