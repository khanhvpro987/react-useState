import { useContext } from 'react';
import { ThemeContext } from '../../pages/UseContext';

export default function Paragraph() {
	const theme = useContext(ThemeContext);
    console.log(theme);

	return <p className={theme}>UseContext Example</p>;
}
