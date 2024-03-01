<h1 align="center">
  Propulse - A landing page template 🚀
</h1>

Propulse is a user-friendly landing page template with NextJS and TailwindCSS. It's easy to customize, allowing you to create a minimalistic site that fits your style using its versatile components.

<hr>

![propulse Mockup](/public/propulseCover.png)

## Key Features:

-   Minimal styling (make it your own!)
-   Accessible, semantic HTML markup
-   Blazingly Fast
-   100/100 Lighthouse performance
-   Responsive & SEO-friendly with canonical URLs, OpenGraph data and Meta tags.
-   Sitemap support
-   Made with NextJS and TailwindCSS

## Demo

Check out the [Demo](https://propulse-nclex.vercel.app/), hosted on Vercel.

## Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `npm install`   | Installs dependencies                        |
| `npm run dev`   | Starts local dev server at `localhost:3000`  |
| `npm run build` | Build your production site to `./next/`      |
| `npm run start` | Preview your build locally, before deploying |

## Update Site Metadata

```js
env: {
  siteTitle: "Your Company",
  siteDescription: "Your company description.",
  siteKeywords: "your company keywords",
  siteUrl: "https://propulse-nclex.vercel.app/,
  siteImagePreviewUrl: "/images/preview.jpeg",
  twitterHandle: "@your_handle"
}
```

## Update Colors

You can update the colors in tailwind.config.js file.

## Update Favicon

Update the manifest.json file and the icons under the public/images/icons folder.
