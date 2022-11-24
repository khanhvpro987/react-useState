import { useCallback, useState } from 'react';
import Content from '../../components/Content';

// let timerId;

export default function UseCallback() {
	const [count, setCount] = useState(0);

	const increase = () => {
		setCount(count + 1);
	};

	// const increase = useCallback(() => {
	// 	setCount(count + 1);
	// });

	return (
		<>
			<Content onIncrease={increase} />

			<div style={{ padding: '10px 32px' }}>
				<h1>{count}</h1>
			</div>
		</>
	);
}
