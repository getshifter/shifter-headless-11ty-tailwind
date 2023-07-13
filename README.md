# Shifter Headless 11ty Starter Template

![](https://camo.githubusercontent.com/fb45684b4c95654c90d8c4b4f93b495d3c73e706824b57b6d6f2a448d2fbc16d/68747470733a2f2f63646e2e676574736869667465722e636f2f363937396432633230653066313463343666366236656163383635396336313336613062346136372f75706c6f6164732f323032332f30332f312d31303234783632362e706e67)

The Shifter Headless 11ty Starter Template is a starting point for building headless WordPress websites using 11ty and Shifter. It offers a solid foundation for creating fast, scalable, and SEO-friendly websites with a decoupled frontend and WordPress as a headless CMS.

Key Features:

- Minimalistic design
- Automatic active states in the navigation based on the current URL
- Easy addition of pages to the navigation
- Simple blog structure
- Example of including JSON data
- Built with Tailwind CSS

[Live Demo](https://clever-newton-cbb08a.netlify.app)

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