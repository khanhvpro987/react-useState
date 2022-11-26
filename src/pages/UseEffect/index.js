import { useEffect, useState } from 'react';

export default function Home() {
	const [countdown, setCountdown] = useState(100);
	const [numberType, setNumberType] = useState('Even Number');

	useEffect(() => {
		const timeId = setInterval(() => {
			setCountdown((prevCount) => prevCount - 1);
		}, 1000);
		console.log('Callback Called');
		return () => clearInterval(timeId);
	}, []);

	useEffect(() => {
		if (countdown % 2 === 0) setNumberType('Even Number');
		else setNumberType('Odd Number');
		console.log('Callback2 Called');
	}, [countdown]);

	// setInterval(() => {
	// 	setCountdown(countdown - 1);
	// }, 1000);

	return (
		<div style={{ padding: '10px 32px' }}>
			<h1>useEffect</h1>
			<div>
				<ol>
					<li>Công dụng useEffect</li>
					<ul>
						<li>Update DOM event</li>
						<li>Call API</li>
						<li>Listen DOM Event</li>
						<li>Cleanup</li>
					</ul>
					<li>
						useEffect callback luôn được gọi sau khi component
						mounted
					</li>
					<li>Các trường hợp useEffect</li>
					<ul>
						<li>Không truyền Deps: useEffect(callback).</li>
						<ul>
							<li>
								Callback luôn được gọi mỗi khi component
								re-render.
							</li>
							<li>
								Gọi callback sau khi component thêm element vào
								DOM.
							</li>
						</ul>
						<li>Truyền Deps rỗng: useEffect(callback,[]) </li>
						<ul>
							<li>
								Chỉ gọi callback một lần sau khi component
								mounted
							</li>
						</ul>
						<li>
							Truyền Deps bình thường: useEffect(callback,[deps])
						</li>
						<ul>
							<li>Gọi lại callback mỗi khi deps rerender</li>
						</ul>
					</ul>
				</ol>
			</div>
			<div>
				<h1>{countdown}</h1>
				<h1>{numberType}</h1>
			</div>
		</div>
	);
}
