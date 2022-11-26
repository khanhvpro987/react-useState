import { useCallback, useState } from 'react';
import CallbackContent from '../../components/CallbackContent';
// let timerId;

export default function UseCallback() {
	const [count, setCount] = useState(0);

	// const handleIncrease = () => {
	// 	setCount((prevCount) => prevCount + 1);
	// };

	const handleIncrease = useCallback(() => {
		setCount((prevCount) => prevCount + 1);
	}, []);

	return (
		<div style={{ padding: '10px 32px' }}>
			<h1>UseCallback Example</h1>
			<h1>{count}</h1>
			<CallbackContent onIncrease={handleIncrease}/>
		</div>
	);
}
