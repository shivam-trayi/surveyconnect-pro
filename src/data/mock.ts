import React from 'react';
import { FeatureCard, StepItem, Testimonial, Logo, Slide } from '@/types';

// SVG Icons as React elements (not components to avoid JSX in .ts file)
export const GlobeIcon = React.createElement('svg', {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('circle', { key: 'circle', cx: 12, cy: 12, r: 10 }),
  React.createElement('path', { key: 'path1', d: 'm6.93 6.93 10.14 10.14' }),
  React.createElement('path', { key: 'path2', d: 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' })
]);

export const BarChartIcon = React.createElement('svg', {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('line', { key: 'line1', x1: 12, x2: 12, y1: 20, y2: 10 }),
  React.createElement('line', { key: 'line2', x1: 18, x2: 18, y1: 20, y2: 4 }),
  React.createElement('line', { key: 'line3', x1: 6, x2: 6, y1: 20, y2: 16 })
]);

export const ShieldIcon = React.createElement('svg', {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('path', { key: 'path', d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' })
]);

export const NetworkIcon = React.createElement('svg', {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('path', { key: 'path1', d: 'm13.11 7.664 1.78 2.672' }),
  React.createElement('path', { key: 'path2', d: 'm6.8 6.8 10.4 10.4' }),
  React.createElement('circle', { key: 'circle1', cx: 12, cy: 12, r: 2 }),
  React.createElement('circle', { key: 'circle2', cx: 7, cy: 7, r: 2 }),
  React.createElement('circle', { key: 'circle3', cx: 17, cy: 17, r: 2 })
]);

export const UserPlusIcon = React.createElement('svg', {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('path', { key: 'path', d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }),
  React.createElement('circle', { key: 'circle', cx: 9, cy: 7, r: 4 }),
  React.createElement('line', { key: 'line1', x1: 19, x2: 19, y1: 8, y2: 14 }),
  React.createElement('line', { key: 'line2', x1: 22, x2: 16, y1: 11, y2: 11 })
]);

export const SearchIcon = React.createElement('svg', {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('circle', { key: 'circle', cx: 11, cy: 11, r: 8 }),
  React.createElement('path', { key: 'path', d: 'm21 21-4.35-4.35' })
]);

export const ActivityIcon = React.createElement('svg', {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('path', { key: 'path', d: 'M3 12h4l3-9 4 18 3-9h4' })
]);

export const DollarSignIcon = React.createElement('svg', {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  React.createElement('line', { key: 'line1', x1: 12, x2: 12, y1: 2, y2: 22 }),
  React.createElement('path', { key: 'path', d: 'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' })
]);

export const features: FeatureCard[] = [
  {
    id: 'access',
    title: 'Easy Project Access',
    subtitle: 'Browse and join live research studies quickly with our intuitive project matching system.',
    icon: SearchIcon
  },
  {
    id: 'tracking',
    title: 'Real-time Tracking',
    subtitle: 'Monitor performance, completes, and quotas with comprehensive analytics dashboards.',
    icon: ActivityIcon
  },
  {
    id: 'network',
    title: 'Global Network',
    subtitle: 'Connect with international research firms and expand your business worldwide.',
    icon: GlobeIcon
  },
  {
    id: 'security',
    title: 'Secure & Compliant',
    subtitle: 'GDPR and ISO-minded data protection ensures your operations meet global standards.',
    icon: ShieldIcon
  }
];

export const steps: StepItem[] = [
  {
    id: 1,
    title: 'Register',
    description: 'Create your vendor profile and get verified in minutes.',
    icon: UserPlusIcon
  },
  {
    id: 2,
    title: 'Get Projects',
    description: 'Receive auto-matched projects and invitations based on your expertise.',
    icon: SearchIcon
  },
  {
    id: 3,
    title: 'Run Surveys',
    description: 'Manage traffic quality and participant engagement with our tools.',
    icon: BarChartIcon
  },
  {
    id: 4,
    title: 'Track & Earn',
    description: 'Monitor performance with detailed dashboards and receive timely payouts.',
    icon: DollarSignIcon
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'sarah',
    name: 'Sarah Johnson',
    company: 'Global Insights Ltd',
    avatarUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiMxQTczRTgiLz4KPGV4dCB4PSI1MCUiIHk9IjUwJSIgZHk9Ii4zZW0iIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0cHgiIGZvbnQtd2VpZ2h0PSI2MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNKPC90ZXh0Pgo8L3N2Zz4K',
    quote: 'VendorPortal transformed our research operations. The platform\'s ease of use and global reach helped us scale our business by 300% in just one year.',
    rating: 5
  },
  {
    id: 'michael',
    name: 'Michael Chen',
    company: 'Asia Research Network',
    avatarUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiMzNEE4NTMiLz4KPGV4dCB4PSI1MCUiIHk9IjUwJSIgZHk9Ii4zZW0iIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0cHgiIGZvbnQtd2VpZ2h0PSI2MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1DPC90ZXh0Pgo8L3N2Zz4K',
    quote: 'The real-time analytics and automated matching system saves us hours every week. It\'s exactly what the industry needed.',
    rating: 5
  },
  {
    id: 'elena',
    name: 'Elena Rodriguez',
    company: 'European Market Studies',
    avatarUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM2QjcyODAiLz4KPGV4dCB4PSI1MCUiIHk9IjUwJSIgZHk9Ii4zZW0iIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0cHgiIGZvbnQtd2VpZ2h0PSI2MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVSPC90ZXh0Pgo8L3N2Zz4K',
    quote: 'Outstanding platform with excellent security standards. The GDPR compliance features give us complete peace of mind.',
    rating: 5
  }
];

export const clientLogos: Logo[] = [
  {
    id: 'kantar',
    name: 'Kantar',
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjNlbSIgZmlsbD0iIzZCNzI4MCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4IiBmb250LXdlaWdodD0iNjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5LYW50YXI8L3RleHQ+Cjwvc3ZnPgo=',
    href: '#'
  },
  {
    id: 'ipsos',
    name: 'Ipsos',
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjNlbSIgZmlsbD0iIzZCNzI4MCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4IiBmb250LXdlaWdodD0iNjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JcHNvczwvdGV4dD4KPHN2Zz4K',
    href: '#'
  },
  {
    id: 'nielsen',
    name: 'Nielsen',
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjNlbSIgZmlsbD0iIzZCNzI4MCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4IiBmb250LXdlaWdodD0iNjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5OaWVsc2VuPC90ZXh0Pgo8L3N2Zz4K',
    href: '#'
  },
  {
    id: 'yougov',
    name: 'YouGov',
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjNlbSIgZmlsbD0iIzZCNzI4MCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4IiBmb250LXdlaWdodD0iNjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Zb3VHb3Y8L3RleHQ+Cjwvc3ZnPgo=',
    href: '#'
  }
];

export const showcaseSlides: Slide[] = [
  {
    id: 'dashboard',
    type: 'screenshot',
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIzNjAiIHJ4PSIxMiIgZmlsbD0id2hpdGUiLz4KPHN2ZyB4PSI0MCIgeT0iNDAiIHdpZHRoPSI1MjAiIGhlaWdodD0iMzIwIj4KPHN2ZyB4PSIwIiB5PSIwIiB3aWR0aD0iNTIwIiBoZWlnaHQ9IjYwIj4KPHJlY3Qgd2lkdGg9IjUyMCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzFBNzNFOCIvPgo8dGV4dCB4PSIyMCIgeT0iMzUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4cHgiIGZvbnQtd2VpZ2h0PSI2MDAiPkFuYWx5dGljcyBEYXNoYm9hcmQ8L3RleHQ+CjwvcmVjdD4KPC9zdmc+CjxyZWN0IHg9IjAiIHk9IjgwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjEwMCIgcng9IjgiIGZpbGw9IiNGM0Y0RjYiLz4KPHJlY3QgeD0iMjgwIiB5PSI4MCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjAiIHk9IjIwMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIxMjAiIHJ4PSI4IiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjI2MCIgeT0iMjYwIiBmaWxsPSIjNkI3MjgwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0cHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlByb2plY3QgUGVyZm9ybWFuY2UgQ2hhcnQ8L3RleHQ+CjwvcHZnPgo8L3N2Zz4K',
    alt: 'Analytics Dashboard Screenshot'
  },
  {
    id: 'projects',
    type: 'screenshot',
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIzNjAiIHJ4PSIxMiIgZmlsbD0id2hpdGUiLz4KPHN2ZyB4PSI0MCIgeT0iNDAiIHdpZHRoPSI1MjAiIGhlaWdodD0iMzIwIj4KPHN2ZyB4PSIwIiB5PSIwIiB3aWR0aD0iNTIwIiBoZWlnaHQ9IjYwIj4KPHJlY3Qgd2lkdGg9IjUyMCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzM0QTg1MyIvPgo8dGV4dCB4PSIyMCIgeT0iMzUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4cHgiIGZvbnQtd2VpZ2h0PSI2MDAiPkF2YWlsYWJsZSBQcm9qZWN0czwvdGV4dD4KPC9yZWN0Pgo8L3N2Zz4KPHJlY3QgeD0iMCIgeT0iODAiIHdpZHRoPSI1MjAiIGhlaWdodD0iNjAiIHJ4PSI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjAiIHk9IjE2MCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSI2MCIgcng9IjgiIGZpbGw9IiNGM0Y0RjYiLz4KPHJlY3QgeD0iMCIgeT0iMjQwIiB3aWR0aD0iNTIwIiBoZWlnaHQ9IjYwIiByeD0iOCIgZmlsbD0iI0YzRjRGNiIvPgo8dGV4dCB4PSIyNjAiIHk9IjE4NSIgZmlsbD0iIzZCNzI4MCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Qcm9qZWN0IExpc3RpbmdzPC90ZXh0Pgo8L3N2Zz4KPC9zdmc+Cg==',
    alt: 'Available Projects Interface'
  }
];

export const countries = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Netherlands',
  'Spain',
  'Italy',
  'Japan',
  'Singapore',
  'Brazil',
  'Mexico',
  'India',
  'South Africa'
];