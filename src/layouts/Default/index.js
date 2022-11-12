import Header from '../../components/Header';
// import SideBar from '../../components/SideBar';

export default function DefaultLayout({ children }) {
	return (
		<>
			<Header />
			{/* <SideBar /> */}
			{children}
		</>
	);
}
