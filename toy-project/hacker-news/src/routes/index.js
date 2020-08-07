import Vue from 'vue';
import VueRouter from 'vue-router';
//import createListView from '../views/CreateListView.js';
import bus from '@/utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      //path: url주소
      path: '/news',
      // 컴포넌트간 template이 비슷한 경우 name을 줘서 상황에 따라 살짝식 변화시켜줄수 있다.
      name: 'news',
      //component: url주소로 갔을 때 표시될 컴포넌트
      //component: createListView('NewsView'),
      component: () => import('@/views/NewsView.vue'),
      beforeEnter: (to, from, next) => {
        // console.log('to : ', to);
        // console.log('from : ', from);
        // console.log(next);
        // 호출 예시
        // if(to.matched === ''){
        //   next();
        // }else {
        //   router.replace('/login')
        // }

        // next()를 호출해야만 해당 url로 이동한다.
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched news');
            //bus.$emit('end:spinner');
            next();
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
    {
      path: '/ask',
      name: 'ask',
      //component: createListView('AskView'),
      component: () => import('@/views/AskView.vue'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched ask');
            bus.$emit('end:spinner');
            next();
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      //component: createListView('JobsView'),
      component: () => import('@/views/JobsView.vue'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched jobs');
            bus.$emit('end:spinner');
            next();
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
    {
      path: '/user/:id',
      component: () => import('@/views/UserView.vue'),
    },
    {
      path: '/item/:id',
      component: () => import('@/views/ItemView.vue'),
    },
  ],
});
