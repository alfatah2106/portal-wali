import { AppItem } from './types';
import { Map, BookOpen, BookHeart, Users, Wallet, MoonStar, Building, Coins } from 'lucide-react';

export const portalData: AppItem[] = [
  {
    id: '1',
    nama: 'Monitoring Liburan',
    deskripsi: 'Pantau aktivitas dan lokasi santri selama masa liburan.',
    link: 'https://monitoniring-pondok-pesantren-alfatah.pages.dev/',
    IconComponent: Map,
    bgIcon: 'bg-emerald-100',
    warnaIcon: 'text-emerald-600',
    status: null // Available
  },
  {
    id: '2',
    nama: 'Keuangan',
    deskripsi: 'Informasi tagihan, pembayaran SPP, dan tabungan santri.',
    link: 'https://tagihan-keuangan-alfatah.pages.dev/',
    IconComponent: Wallet,
    bgIcon: 'bg-rose-100',
    warnaIcon: 'text-rose-600',
    status: null
  },
  {
    id: '3',
    nama: 'Madrasah',
    deskripsi: 'Sistem akademik, nilai, dan absensi kelas madrasah.',
    link: '#',
    IconComponent: BookOpen,
    bgIcon: 'bg-blue-100',
    warnaIcon: 'text-blue-600',
    status: 'Pengembangan'
  },
  {
    id: '4',
    nama: 'Tahfidz',
    deskripsi: 'Pencatatan setoran hafalan dan mutabaah yaumiyah.',
    link: '#',
    IconComponent: BookHeart,
    bgIcon: 'bg-purple-100',
    warnaIcon: 'text-purple-600',
    status: 'Pengembangan'
  },
  {
    id: '5',
    nama: 'Kesantrian',
    deskripsi: 'Pencatatan pelanggaran, kedisiplinan, dan perizinan.',
    link: '#',
    IconComponent: Users,
    bgIcon: 'bg-amber-100',
    warnaIcon: 'text-amber-600',
    status: 'Pengembangan'
  }
];
