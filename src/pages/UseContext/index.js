import { createContext, useState } from 'react';
import ContextContent from '../../components/ContextContent';

export const ThemeContext = createContext();

export default function UseContext() {
	const [theme, setTheme] = useState('dark');

	const handleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<ThemeContext.Provider value={theme}>
			<div style={{ padding: 20 }}>
				<button onClick={handleTheme}>Toggle theme</button>
				<ContextContent />
			</div>
		</ThemeContext.Provider>
	);
}
