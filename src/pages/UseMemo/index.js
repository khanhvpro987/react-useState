import { useMemo, useState } from 'react';

// let timerId;

export default function UseMemo() {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [products, setProducts] = useState([]);

	const handleSubmit = () => {
		setProducts([
			...products,
			{
				name,
				price: parseInt(price),
			},
		]);
	};

	// const total = products.reduce((result, prod) => {
	// 	console.log('re-render total price');
	// 	return result + prod.price;
	// }, 0);

	const total = useMemo(() => {
		const result = products.reduce((result, prod) => {
			console.log('re-render total price');
			return result + prod.price;
		}, 0);

		return result;
	}, [products]);

	return (
		<div style={{ padding: '10px 32px' }}>
			<input
				value={name}
				placeholder='Enter name'
				onChange={(e) => setName(e.target.value)}
			/>
			<br />
			<input
				value={price}
				placeholder='Enter price'
				onChange={(e) => setPrice(e.target.value)}
			/>
			<br />
			<button onClick={handleSubmit}>Add</button>
			<br />
			Total: {total}
			<ul>
				{products.map((product, index) => (
					<li key={index}>
						{product.name}: {product.price}
					</li>
				))}
			</ul>
		</div>
	);
}
