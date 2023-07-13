# Shifter Headless 11ty Starter Template

![](https://github.com/getshifter/shifter-headless-11ty-tailwind/assets/1872327/bfcfa6ad-4eeb-45f9-978a-9b64ea9abeb8)

The Shifter Headless 11ty Starter Template is a starting point for building headless WordPress websites using 11ty and Shifter. It offers a solid foundation for creating fast, scalable, and SEO-friendly websites with a decoupled frontend and WordPress as a headless CMS.

Key Features:

- Built with 11ty: A static site generator that transforms templates into HTML, CSS, and JavaScript.
- Headless WordPress: Utilize WordPress as a headless CMS to manage content.
- Shifter: Seamless integration with Shifter, a serverless WordPress hosting and deployment platform.
- Scalable architecture: Easily scale your website as your content grows and traffic increases.

These features provide a solid foundation for building headless WordPress websites using 11ty and Shifter. The template allows you to create fast, scalable, and SEO-friendly websites with a decoupled frontend and WordPress as the content management system.

[Live Demo](https://shifter-headless-11ty-tailwind.netlify.app)

---

## Getting Started

1. Clone this repository:

```
git clone https://github.com/getshifter/shifter-headless-11ty-tailwind.git site
```

2. Change into the working directory:

```
cd site
```

3. Install dependencies:

```
npm install
```

4. Start local development server:

```
npm run serve
```

This command watches for changes and serves the site locally on http://localhost:8080.

5. Create a production build:

```
npm run build
```

---

## How To: Navigation

The top navigation is the main feature of this starter template and can be found in `/src/_includes/components/navigation.njk`.

To add links to the navigation, add the `eleventyNavigation` object to any page with the desired order:

```yaml
---
eleventyNavigation:
  key: Your Page Name
  order: 1
---
```

The navigation bar will automatically include the pages specified in the `eleventyNavigation` object. The active state will be highlighted based on the currently opened URL, even for subpages.

To change the styles of the navigation items, modify the code in `/_includes/components/navigation.njk`.

---

## How To: Blog

To add a blog post, create a new file in `_src/blog/posts`. The post will automatically appear in the post list.

---

## Images

Place your images in `_src/img` and reference them in your markup like this:

```html
<img src="/img/example-image.jpg">
```

---
