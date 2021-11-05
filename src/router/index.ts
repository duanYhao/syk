import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	},
})


// 全局前置守卫  可返回false 或者  一个路由地址
router.beforeEach((to,from) => { // next 可选参数
	// return false // 返回false以取消导航
})

// 全局解析守卫
router.beforeResolve(async to => {

})

// 全局后置钩子
router.afterEach((to, from) => { // 没有next参数

})
export default router
