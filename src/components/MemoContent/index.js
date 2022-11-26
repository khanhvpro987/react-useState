import { memo } from 'react';

function MemoContent({ count }) {
	console.log('re-render');
	return (
		<>
			<h1>Memo Example {count}</h1>
		</>
	);
}

export default memo(MemoContent);
