import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/Login'
  },
  {
    name: 'login',
    component: () => import('./view/Login'),
    meta: {
      title: '登录'
    }
  },
  {
    name: 'home',
    component: () => import('./view/Home'),
    meta: {
      title: 'home'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
