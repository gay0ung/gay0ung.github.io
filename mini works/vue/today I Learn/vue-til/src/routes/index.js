import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index.js';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    // 여기는 로그인만 했을때 이동 가능하다. meta를 이용해 권한을 부여했다.
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
      meta: { auth: true },
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

router.beforeEach((to, form, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log('인증이 필요합니다.');
    next('/login');
    return;
    // 빠져나가는 구간 밑에 reuturn을 해줘야 다음 next를 실행하지 않는다.
  }
  next();
  // 호출해야 다음 페이지로 갈수 있다.
});

// (to, from, next)
// to-> 이동하는 페이지
// from ->  현재페이지
// next -> 페이지 이동할때 호출하는 api
export default router;
