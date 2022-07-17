import Layout from '@/layouts';
import DashboardIcon from '@/assets/assets-slide-dashboard.svg';

export default [
  {
    path: '/teach-demo',
    component: Layout,
    redirect: '/teach-demo/css',
    name: 'dashboard',
    meta: { title: '__teach-demo', icon: DashboardIcon },
    children: [
      {
        path: 'css-demo',
        name: 'css-demo',
        component: () => import('@/pages/__teach-demo/css-demo/index.vue'),
        meta: { title: 'css-demo' },
      },
      {
        path: 'ts-demo',
        name: 'ts-demo',
        component: () => import('@/pages/__teach-demo/ts-demo/index.vue'),
        meta: { title: 'ts-demo' },
      },
      {
        path: 'vue-demo',
        name: 'vue-demo',
        component: () => import('@/pages/__teach-demo/vue-demo/index.vue'),
        meta: { title: 'vue-demo' },
      },
    ],
  },
];
