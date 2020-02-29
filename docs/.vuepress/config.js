module.exports = {
  description: 'Capture and monitor detailed error logs with nice dashboard and UI',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/small-logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/bugphix/bugphix-laravel' },
      { text: 'Report Issue', link: 'https://github.com/bugphix/bugphix-laravel/issues/new' }
    ],
    nextLinks: true,
    prevLinks: true,
    sidebar: [
      {
        title: 'Installation',
        path: '/installation/',
      },
      {
        title: 'Introduction',
        path: '/introduction/',
      },
      {
        title: 'Application usage',
        path: '/application-usage/',
      },
      {
        title: 'Dashboard',
        path: '/dashboard/',
      }
    ]
  }
}