import UseEffect from '../pages/UseEffect';
import Home from '../pages/Home';
import Memo from '../pages/Memo';
import UseCallback from '../pages/UseCallback';
import UseRef from '../pages/UseRef';
import UseMemo from '../pages/UseMemo';
import UseReducer from '../pages/UseReducer';
import UseContext from '../pages/UseContext';

const publicRoutes = [
	{ path: '/', component: Home },
	{
		path: '/use-ref',
		component: UseRef,
	},
	{
		path: '/use-effect',
		component: UseEffect,
	},
	{
		path: '/use-call-back',
		component: UseCallback,
	},
	{
		path: '/memo',
		component: Memo,
	},
	{
		path: '/use-memo',
		component: UseMemo,
	},
	{
		path: '/use-reducer',
		component: UseReducer,
	},
	{
		path: '/use-context',
		component: UseContext,
	},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
