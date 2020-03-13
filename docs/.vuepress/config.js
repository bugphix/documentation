module.exports = {
  title: 'Bugphix',
  description: 'Capture and monitor detailed error logs with nice dashboard and UI',
  themeConfig: {
    logo: '/small-logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/bugphix/bugphix-laravel' },
      { text: 'Report Issue', link: 'https://github.com/bugphix/bugphix-laravel/issues/new' }
    ],
    nextLinks: true,
    prevLinks: true,
    lastUpdated: 'Last Updated',
    sidebar: [
      {
        title: 'Introduction',
        path: '/introduction/',
      },
      {
        title: 'Installation',
        path: '/installation/',
      },
      {
        title: 'Application usage',
        path: '/application-usage/',
      },
      {
        title: 'Dashboard',
        path: '/dashboard/',
      },      
      {
        title: 'Features',
        path: '/features/',
      }
    ]
  },
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/google-analytics',{
        'ga': 'UA-160019077-1'
      }
    ],
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }]
  ]
}