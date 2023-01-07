import {
	Card,
	Container,
	Typography,
	CardActions,
	TextField,
	CardContent,
	Button,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import LoginAPI from '../../api/LoginAPI';

export default function Login() {
	const { register, handleSubmit, resetField } = useForm();
	const [resData, setResData] = useState({});

	const onSubmit = (data) => {
		resetField('email');
		resetField('password');
		console.log(data);
		const res = LoginAPI(data.email, data.password);
		setResData(res);
	};

	if (resData.length !== 0) {
		console.log(resData);
	}

	return (
		<Container>
			<Card
				sx={{
					maxWidth: '700px',
					background: '#F1F1F1',
					marginX: 'auto',
				}}>
				<CardContent>
					<Typography
						variant='h3'
						gutterBottom
						textAlign='center'>
						LOGIN
					</Typography>
					<form
						noValidate
						autoComplete='off'
						onSubmit={handleSubmit(onSubmit)}>
						<Typography>Email</Typography>
						<CardActions>
							<TextField
								id='email'
								label='Email'
								type='email'
								autoComplete='email'
								required
								fullWidth
								{...register('email', {
									required: true,
									// pattern:
									// 	/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})}
							/>
						</CardActions>
						<Typography>Password</Typography>
						<CardActions>
							<TextField
								id='password'
								label='Password'
								type='password'
								required
								fullWidth
								{...register('password', {
									required: true,
									// pattern:
									// 	/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})}
							/>
						</CardActions>
						<CardActions>
							<Button
								type='submit'
								variant='contained'
								fullWidth>
								Login
							</Button>
						</CardActions>
					</form>
				</CardContent>
			</Card>
		</Container>
	);
}
