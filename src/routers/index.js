import UseEffect from '../pages/UseEffect';
import Home from '../pages/Home';
import Memo from '../pages/Memo';
import UseCallback from '../pages/UseCallback';
import UseRef from '../pages/UseRef';

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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
