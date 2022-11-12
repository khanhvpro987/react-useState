import * as React from 'react';
import { Typography, Box, Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function TodoList() {
	const storageItem = JSON.parse(localStorage.getItem('item'));

	const [Item, setItem] = React.useState('');
	const [Items, setItems] = React.useState(storageItem ?? []);

	const handleItem = () => {
		setItems((prev) => {
			let Id;
			if (storageItem) {
				Id = storageItem.length += 1;
			} else {
				Id = 1;
			}

			const newItem = { id: Id, content: Item, isCompleted: false };
			const newItems = [...prev, newItem];

			const jsonItems = JSON.stringify(newItems);
			localStorage.setItem('item', jsonItems);

			return newItems;
		});
		setItem('');
	};

	const handleItemClicked = (id) => {
		setItems(
			Items.map((item) => {
				
				if (item.id === id) item.isCompleted = !item.isCompleted;
				return item;
			})
		);
		console.log(id);
	};

	console.log(Items);

	return (
		<>
			<Typography
				variant='h4'
				component={'h2'}>
				Todo List
			</Typography>
			<Box
				display='flex'
				justifyContent='space-between'>
				<TextField
					hiddenLabel
					variant='standard'
					fullWidth
					placeholder='Add To-do job here'
					autoFocus
					sx={{ padding: 2 }}
					value={Item}
					onChange={(event) => setItem(event.target.value)}
				/>
				<Button
					variant='contained'
					size='small'
					sx={{ padding: 0 }}
					onClick={handleItem}>
					<AddIcon fontSize='small' />
				</Button>
			</Box>
			<List>
				{Items.map((item) => (
					<ListItem
						disablePadding
						key={item.id}>
						<ListItemButton
							onClick={() => handleItemClicked(item.id)}>
							<ListItemText
								primary={item.content}
								sx={{ color: '#000' }}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</>
	);
}
