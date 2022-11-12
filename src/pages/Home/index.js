import { Container } from '@mui/material';
import TodoList from '../../components/TodoList';

export default function Home() {
	return (
		<>
			<Container sx={{ marginTop: 4 }}>
				<TodoList />
			</Container>
		</>
	);
}
