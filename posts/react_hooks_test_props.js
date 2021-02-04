import projectConfig from '/pagic.config.js';
import ReactHooksTest from './react_hooks_test_content.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/react_hooks_test.tsx",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/react_hooks_test.html",
    'title': "React hooks test",
    'content': React.createElement(ReactHooksTest, { config: {
            blog: {
                root: '/posts/',
                social: {
                    email: 'huqi@gpdi.com',
                    github: 'hu-qi/pagic_template',
                    twitter: 'huqii',
                    v2ex: 'huqi',
                    zhihu: 'fashaoge'
                }
            },
            branch: 'master',
            description: 'Use this template to create a Pagic site with the blog theme.',
            exclude: [
                '**/.*',
                '**/package.json',
                '**/package-lock.json',
                '**/node_modules',
                'pagic.config.ts',
                'pagic.config.tsx',
                '**/config.gypi',
                '**/CVS',
                '**/npm-debug.log',
                'dist'
            ],
            github: 'https://github.com/hu-qi/pagic_template',
            include: undefined,
            nav: [
                {
                    icon: 'czs-home-l',
                    link: '/index.html',
                    text: 'Homepage'
                },
                {
                    icon: 'czs-category-l',
                    link: '/categories/index.html',
                    text: 'Categories'
                },
                {
                    icon: 'czs-tag-l',
                    link: '/tags/index.html',
                    text: 'Tags'
                },
                {
                    icon: 'czs-about-l',
                    link: '/about/index.html',
                    text: 'About'
                },
                {
                    icon: 'czs-box-l',
                    link: '/archives/index.html',
                    text: 'Archives'
                },
                {
                    icon: 'czs-link-l',
                    link: '/links/index.html',
                    text: 'Friends'
                }
            ],
            outDir: 'dist',
            plugins: [
                'clean',
                'init',
                'md',
                'tsx',
                'script',
                'layout',
                'out',
                'blog'
            ],
            port: 8000,
            root: '/',
            serve: false,
            srcDir: 'src',
            theme: 'blog',
            title: 'pagic template',
            watch: false
        }, content: null, head: null, layoutPath: "posts/_layout.tsx", outputPath: "posts/react_hooks_test.html", pagePath: "posts/react_hooks_test.tsx", script: null, title: "React hooks test" }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/front_matter_test.md",
                "title": "Front matter test",
                "link": "test_pages/front_matter_test.html",
                "date": "2021-02-04T14:14:04.000Z",
                "updated": null,
                "author": "test",
                "contributors": [
                    "huqi"
                ],
                "excerpt": "This is a front matter test page. The front matter content outputPath: test_pages/front_matter_test.html title: Front matter test toc: null prev: null next: null "
            },
            {
                "pagePath": "posts/myreadme.md",
                "title": "Build personal blog at top speed",
                "link": "posts/myreadme.html",
                "date": "2021/02/04",
                "updated": null,
                "author": "huqi",
                "contributors": [
                    "huqi"
                ],
                "categories": [
                    "Blog"
                ],
                "tags": [
                    "Deno",
                    "React",
                    "Pagic",
                    "Vercel"
                ],
                "excerpt": "Pagic Pagic It is a static website generator driven by DeNO + react. It has simple configuration, supports rendering MD / TSX files into static pages, and has a large number of official or third-party themes an...",
                "cover": "https://assets.vercel.com/image/upload/v1595320886/front/home/globe-texture.jpg"
            },
            {
                "pagePath": "posts/markdown_test.md",
                "title": "Markdown test",
                "link": "posts/markdown_test.html",
                "date": "2021/02/04",
                "updated": "2021年02月04日15:55:59",
                "author": "test",
                "contributors": [
                    "huqi"
                ],
                "categories": null,
                "tags": [
                    "MarkDown",
                    "Test"
                ],
                "excerpt": "This page contains the features about markdown supported by Pagic. GitHub flavored markdown The followed content is copied from https://guides.github.com/features/mastering-markdown/ Text It's very easy to make...",
                "cover": "../assets/hello-world/1.png"
            },
            {
                "pagePath": "posts/hello_world.md",
                "title": "Hello World",
                "link": "posts/hello_world.html",
                "date": "2021/02/03",
                "updated": null,
                "author": "huqi",
                "contributors": [
                    "huqi"
                ],
                "categories": [
                    "Hello World"
                ],
                "tags": [
                    "First"
                ],
                "excerpt": "Hello, my friends!",
                "cover": "/assets/1612406852801-image.png"
            }
        ],
        "categories": [
            {
                "name": "Blog",
                "count": 1
            },
            {
                "name": "Hello World",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "Deno",
                "count": 1
            },
            {
                "name": "First",
                "count": 1
            },
            {
                "name": "MarkDown",
                "count": 1
            },
            {
                "name": "Pagic",
                "count": 1
            },
            {
                "name": "React",
                "count": 1
            },
            {
                "name": "Test",
                "count": 1
            },
            {
                "name": "Vercel",
                "count": 1
            }
        ]
    }
};
