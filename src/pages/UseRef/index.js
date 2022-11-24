import { useRef, useState } from 'react';

// let timerId;

export default function UseRef() {
	const [count, setCount] = useState(60);

	let timerId = useRef();
	// let timerId;

	const handleStart = () => {
		timerId.current = setInterval(() => {
			setCount((prevCount) => prevCount - 1);
		}, 1000);

		console.log('start: ', timerId.current);
	};

	const handleStop = () => {
		clearInterval(timerId.current);

		console.log('Stop: ', timerId.current);
	};
	return (
		<>
			<h1>useRef() example</h1>
			<ul>
				<li>Lưu các giá trị sang một tham chiếu bên ngoài</li>
				<li>Function component</li>
			</ul>

			<h1>{count}</h1>
			<button onClick={handleStart}>Start</button>
			<button onClick={handleStop}>Stop</button>
		</>
	);
}
