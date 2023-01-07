import UseEffect from '../pages/UseEffect';
import Home from '../pages/Home';
import Memo from '../pages/Memo';
import UseCallback from '../pages/UseCallback';
import UseRef from '../pages/UseRef';
import UseMemo from '../pages/UseMemo';
import UseReducer from '../pages/UseReducer';
import UseContext from '../pages/UseContext';
import TestAxios from '../pages/TestAxios';
import Login from '../pages/Login';
import LoginLayout from '../layouts/Login';

const publicRoutes = [
	{ path: '/', component: Home },
	{
		path: '/use-ref',
		component: UseRef,
		layout: null,
	},
	{
		path: '/use-effect',
		component: UseEffect,
		layout: null,
	},
	{
		path: '/use-call-back',
		component: UseCallback,
		layout: null,
	},
	{
		path: '/memo',
		component: Memo,
		layout: null,
	},
	{
		path: '/use-memo',
		component: UseMemo,
		layout: null,
	},
	{
		path: '/use-reducer',
		component: UseReducer,
		layout: null,
	},
	{
		path: '/use-context',
		component: UseContext,
		layout: null,
	},
	{
		path: '/test-axios',
		component: TestAxios,
		layout: null,
	},
	{
		path: '/login',
		component: Login,
		layout: LoginLayout,
	},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
