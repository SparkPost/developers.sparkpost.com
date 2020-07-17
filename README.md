# developers.sparkpost.com

This repo contains the code and documentation that powers [developers.sparkpost.com](https://developers.sparkpost.com).

## Get started

### Requirements

To develop with this repository, you must have the following:

1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
1. [Node](https://nodejs.org/en/download/)
1. [npm](https://docs.npmjs.com/troubleshooting/try-the-latest-stable-version-of-npm): version 6 recommended
1. A [clone](https://help.github.com/articles/cloning-a-repository/) of this repo

### Installing dependencies

1. `cd developers.sparkpost.com` to go into the website directory
1. Run `npm run bootstrap` to install the npm dependencies

### Local development

When developing locally, you have two options: developing the whole website or develop _just_ the API reference section. All content will hot-reload. If you aren't seeing changes, restart the development server.

#### Develop the website

This will develop the whole developer site.

1. Run `npm run develop`
1. open [http://localhost:4000/](http://localhost:4000/) to view the website.

#### Develop API reference

**This is what you want if you are making documentation changes.**

testing preview

This will only develop the API reference pages and skip unnecessary queries.

1. You will need a SparkPost API key to generate the docs
1. Run `SPARKPOST_API_KEY=<key> npm run docs`
1. open [http://localhost:4000/api/](http://localhost:4000/api/) to view the docs.

#### Develop Netlify Lambda Functions

To develop [Netlify Functions](https://www.netlify.com/docs/functions/) locally, run `npm run lambda`. This will start a second development server for the serverless functions.

Each file located in the `lambda/` directory will be deployed as a serverless function.

## Contributing

You'll find the all the content, pages, and data inside the `content` folder. If you are contributing content, take a few minutes and read through the [contributing guidelines](CONTRIBUTING.md).

### Create a branch

Create a branch for your work in the repo:

1. `git checkout master` to checkout the main branch
1. `git pull origin master` to get the lastest code
1. `git checkout -b your-branch-name` to create a branch

### Make your changes

1. Follow the [Local development](#local-development) instructions to start the development server
1. Make your changes as needed
1. Changes to any files in the `content` and `src` directories will [hot-reload](https://code-cartoons.com/hot-reloading-and-time-travel-debugging-what-are-they-3c8ed2812f35).
1. If you make changes files in the `plugins` and `gatsby` directories or any top-level files, you will need to restart the server.

### Push your changes

1. Stage and commit your changes (`git add -A && git commit -m "Describe what you did"`)
1. Push your changes (`git push origin your-branch-name`)
1. [Create a Pull Request](https://help.github.com/articles/creating-a-pull-request/) against the `master` branch. Netlify will publish a [deploy preview](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/) so you can share and preview your changes as a live site.

After you push your changes, you may see a commit you didn't make such as `your-branch-name npm audit fix`. We use [auditmated](https://github.com/SparkPost/auditmated) to help keep our dependencies secure and up-to-date. To skip this, use the `--no-verify` command line option when you push your code.
