import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "tags/First/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/First/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'title': "First",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
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
