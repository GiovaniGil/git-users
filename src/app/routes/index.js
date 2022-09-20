export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/app/components/pages/user/UserListPage.vue'),
  },
  {
    path: '/:username',
    name: 'userDetails',
    props: true,
    component: () => import('@/app/components/pages/user/UserDetailsPage.vue'),
  },
];
