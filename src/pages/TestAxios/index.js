import { useEffect, useState } from 'react';
import * as request from '../../utils/request';

export default function TestAxios() {
	const [datas, setDatas] = useState([]);
	const [postData, setPostData] = useState({});
	const [clicked, setClicked] = useState(false);
	useEffect(() => {
		const fetchApi = async () => {
			try {
				const res = await request.get('users', {
					params: {
						page: 1,
					},
				});
				setDatas(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchApi();
	}, []);

	console.log(datas);

	const handleClicked = async () => {
		try {
			const res = await request.post('users', {
				params: {
					name: 'morpheus',
					job: 'leader',
				},
			});
			setPostData(res);
			setClicked(true);
		} catch (error) {
			console.log(error);
		}
	};

	console.log(postData);

	return (
		<div>
			<h1>Test Axios Page</h1>
			<h2>Get Request</h2>
			<ul>
				{datas.map((data) => (
					<li key={data.id}>{data.email}</li>
				))}
			</ul>
			<h2>Post Request</h2>
			<button onClick={() => handleClicked()}>Post Request</button>
			{clicked && (
				<ul>
					<li>Name: {postData.params.name}</li>
					<li>Job: {postData.params.job}</li>
					<li>ID: {postData.id}</li>
					<li>Created at: {postData.createdAt}</li>
				</ul>
			)}
		</div>
	);
}
