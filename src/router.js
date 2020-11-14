import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import(/* webpackChunkName:'Home' */'./views/Home.vue');
const Users = () => import(/* webpackChunkName:'Users' */'./views/Users.vue');
const UsersPosts = () => import(/* webpackChunkName:'UsersPosts' */'./views/UsersPosts.vue');
const UsersProfile = () => import(/* webpackChunkName:'UsersProfile' */'./views/UsersProfile.vue');
const HeaderUsers = () => import(/* webpackChunkName:'HeaderHome' */'./views/HeaderUsers.vue');
const HeaderHome = () => import(/* webpackChunkName:'HeaderUsers' */'./views/HeaderHome.vue');

/*
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import UsersPosts from './views/UsersPosts.vue';
import UsersProfile from './views/UsersProfile.vue';
import HeaderUsers from './views/HeaderUsers.vue';
import HeaderHome from './views/HeaderHome.vue';
*/

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', 
      components: {
        default: Home,
        header: HeaderHome
      }
    },
    {
      path: '/users/:id', 
      components: {
        default: Users,
        header: HeaderUsers
      },
      props: {
        default: true,
        header: false
      },
      children: [
        { path: 'posts', component: UsersPosts, name: 'users-id-posts'},
        { path: 'profile', component: UsersProfile, name: 'users-id-profile'}
      ]
    },
  ],
  scrollBehavior() {
    return {
      selector: '#nextUser',
    }
  }
});