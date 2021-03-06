import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/',
    name: 'home',
    component: Home
  },
  {
    meta: {
      title: 'Transaksi'
    },
    path: '/tables',
    name: 'tables',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tables" */ '@/views/Tables.vue')
  },
  {
    meta: {
      title: 'Pemesanan'
    },
    path: '/pemesanan',
    name: 'pemesanan',
    component: () => import(/* webpackChunkName: "tables" */ '@/views/Pemesanan.vue')
  },
  {
    meta: {
      title: 'Daftar Pemesanan'
    },
    path: '/daftarpemesanan',
    name: 'daftarpemesanan',
    component: () => import(/* webpackChunkName: "tables" */ '@/views/DaftarPemesanan.vue')
  },
  {
    meta: {
      title: 'Daftar Pegawai'
    },
    path: '/daftarpegawai',
    name: 'daftarpegawai',
    component: () => import(/* webpackChunkName: "tables" */ '@/views/DaftarPegawai.vue')
  },
  {
    meta: {
      title: 'Penggajian'
    },
    path: '/penggajian',
    name: 'penggajian',
    component: () => import(/* webpackChunkName: "tables" */ '@/views/Penggajian.vue')
  },
  {
    meta: {
      title: 'User'
    },
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "tables" */ '@/views/User.vue')
  },
  {
    meta: {
      title: 'Member'
    },
    path: '/member',
    name: 'member',
    component: () => import(/* webpackChunkName: "tables" */ '@/views/Member.vue')
  },
  {
    meta: {
      title: 'Validasi Pembayaran'
    },
    path: '/validasipembayaran',
    name: 'validasipembayaran',
    component: () => import(/* webpackChunkName: "tables" */ '@/views/ValidasiPembayaran.vue')
  },
  {
    meta: {
      title: 'Forms'
    },
    path: '/forms',
    name: 'forms',
    component: () => import(/* webpackChunkName: "forms" */ '@/views/Forms.vue')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '@/views/Profile.vue')
  },
  {
    meta: {
      title: 'Ui'
    },
    path: '/ui',
    name: 'ui',
    component: () => import(/* webpackChunkName: "ui" */ '@/views/Ui.vue')
  },
  {
    meta: {
      title: 'Responsive layout'
    },
    path: '/responsive',
    name: 'responsive',
    component: () => import(/* webpackChunkName: "responsive" */ '@/views/Responsive.vue')
  },
  {
    meta: {
      title: 'Login',
      fullScreen: true
    },
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    meta: {
      title: 'Error',
      fullScreen: true
    },
    path: '/error',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '@/views/Error.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
