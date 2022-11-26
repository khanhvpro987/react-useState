import { useState } from 'react';
import Content from '../../components/MemoContent';

export default function Memo() {
	const [count, setCount] = useState(0);

	const increase = () => {
		setCount(count + 1);
	};

	return (
		<>
			<Content count={count} />
			<ul>
				<li>Là một Higher Order Component (HOC)</li>
				<li>
					Memo sẽ kiểm tra xem những props truyền vào component có
					thay đổi hay không. Nếu có thì rerender lại component.
				</li>
				<li>
					Memo giúp chúng ta hạn chế được việc rerender component
					không cần thiết
				</li>
			</ul>

			<div style={{ padding: '10px 32px' }}>
				<h1>{count}</h1>
				<button onClick={increase}>Click!</button>
			</div>
		</>
	);
}
