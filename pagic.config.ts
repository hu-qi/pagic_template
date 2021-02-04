export default {
    srcDir: 'src',
    theme: 'blog',
    plugins: ['blog'],
    title: 'pagic template',
    description: 'Use this template to create a Pagic site with the blog theme.',
    github: 'https://github.com/hu-qi/pagic_template',
    blog: {
        root: '/posts/',
        social: {
          github: 'hu-qi/pagic_template',
          email: 'huqi@gpdi.com',
          twitter: 'huqii',
          v2ex: 'huqi',
          zhihu: 'fashaoge'
        }
      },
    nav: [
        {
          text: 'Homepage',
          link: '/index.html',
          icon: 'czs-home-l',
        },
        {
          text: 'Categories',
          link: '/categories/index.html',
          icon: 'czs-category-l',
        },
        {
          text: 'Tags',
          link: '/tags/index.html',
          icon: 'czs-tag-l',
        },
        {
          text: 'About',
          link: '/about/index.html',
          icon: 'czs-about-l',
        },
        {
          text: 'Archives',
          link: '/archives/index.html',
          icon: 'czs-box-l',
        },
        {
          text: 'Friends',
          link: '/links/index.html',
          icon: 'czs-link-l',
        },
      ],
};
