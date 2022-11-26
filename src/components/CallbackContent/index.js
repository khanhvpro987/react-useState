import { memo } from 'react';

function CallbackContent({onIncrease}) {
	console.log('re-render');
	return (
		<>
			<button onClick={onIncrease}>Increase</button>
		</>
	);
}

export default memo(CallbackContent);
