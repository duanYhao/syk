const routes = [
	{
		path: '/',
		component: () => import('@/views/index.vue'),
		// beforeEnter: (to, from) => { // 路由独享的守卫

		// },
	},
	{
		path: '/login',
		component: () => import('@/views/login.vue'),
		meta: {
		}
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/views/notFound.vue')
	}
]
export default routes;
