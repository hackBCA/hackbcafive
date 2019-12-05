# hackBCA V Website

Welcome to the repo for the hackBCA V website!

This website is written with [Next.js](https://nextjs.org), a React-based web framework with SSR.

Staging versions are deployed with [Now](https://zeit.co). Production versions are (for now) deployed with Github Pages in the `gh-pages` branch using a Github Action.

## Serving Locally (Quick Start)
To serve the website locally:
```bash
$ npm install
$ npm run dev
```

Then browse to [localhost:3000](http://localhost:3000).

## File Structure
`components` - Contains reusable components.
`pages` - Contains the pages of the website, one file for each page. Directory structure corresponds to the routes.
`next.config.js` - Configures Next.js. Includes configuration for static export (see [Creating a Page](#creating-a-page)).
`style.scss` - Contains global reset styles and Bootstrap. Should not contain per-component or per-page styles; use [styled-jsx](https://www.github.com/zeit/styled-jsx) for component-specific styles instead.

## Creating a Page
1. Create a new `.jsx` file with a component as its default export.
	* For most pages, use `<ContentPage>`.
2. Add the page to the `pages` array in `next.config.js`.

Here's a sample page:
```jsx
import  ContentPage  from  "../components/ContentPage";

export default () => <ContentPage title={"My Page"}>
	<p>Stuff here</p>
</ContentPage>;
```

## Deploying
To deploy to staging, simply push to a branch.

To deploy to production, push to `master`. **All commits on `master` will be immediately deployed to [hackbca.com](https://hackbca.com).**

## Production Builds
Most of the time, you will not need to create a production build. However, if you need to do so, run `npm run build`, then:

**To serve on production:** `npm start`
**To export a static site:** `npm run export`, then open the `out` folder