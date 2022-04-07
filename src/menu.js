import {
  mdiAccountCircle,
  mdiDesktopMac,
  mdiLock,
  // mdiAlertCircle,
  mdiMonitorShimmer,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiAccountGroup
  // mdiResponsive
} from '@mdi/js'

export default [
  'General',
  [
    {
      to: '/',
      icon: mdiDesktopMac,
      label: 'Dashboard'
    }
  ],
  'Menu',
  [
    {
      to: '/tables',
      label: 'Transaksi',
      subLabel: 'Submenus Example',
      icon: mdiTable,
      menu: [
        {
          to: '/pemesanan',
          label: 'Pemesanan',
          icon: mdiSquareEditOutline
        },
        {
          to: '/daftarpemesanan',
          label: 'Daftar Pemesanan',
          icon: mdiSquareEditOutline
        },
        {
          to: '/validasipembayaran',
          label: 'Validasi Pembayaran',
          icon: mdiSquareEditOutline
        }
      ]
    },
    {
      label: 'Produk',
      subLabel: 'Submenus Example',
      icon: mdiViewList,
      menu: [
        {
          label: 'Daftar Produk'
        },
        {
          label: 'Kategori Produk'
        }
      ]
    },
    {
      to: '/daftarpegawai',
      label: 'Daftar Pegawai',
      icon: mdiSquareEditOutline
    },
    {
      to: '/penggajian',
      label: 'Penggajian',
      icon: mdiSquareEditOutline
    },
    {
      label: 'Keuangan',
      subLabel: 'Submenus Example',
      icon: mdiViewList,
      menu: [
        {
          label: 'Laporan Pengeluaran'
        },
        {
          label: 'Laporan Penjualan'
        }
      ]
    },
    {
      to: '/user',
      label: 'User',
      icon: mdiAccountGroup,
      updateMark: true
    },
    {
      to: '/member',
      label: 'Member',
      icon: mdiSquareEditOutline
    },
    {
      to: '/forms',
      label: 'Forms',
      icon: mdiSquareEditOutline
    },
    {
      to: '/ui',
      label: 'UI',
      icon: mdiTelevisionGuide
    },
    // {
    //   to: '/responsive',
    //   label: 'Responsive',
    //   icon: mdiResponsive
    // },
    {
      to: '/profile',
      label: 'Profile',
      icon: mdiAccountCircle
    },
    {
      to: '/login',
      label: 'Login',
      icon: mdiLock
    }
    // {
    //   to: '/error',
    //   label: 'Error',
    //   icon: mdiAlertCircle
    // }
  ],
  'About',
  [
    {
      href: '#',
      label: 'Test',
      icon: mdiMonitorShimmer,
      target: '_blank'
    }
  ]
]
