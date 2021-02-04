import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "tags/Test/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/Test/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'title': "Test",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
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
