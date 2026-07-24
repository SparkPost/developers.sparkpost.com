# developers.sparkpost.com

This repo contains the code and documentation that powers [developers.sparkpost.com](https://developers.sparkpost.com).

## Get started

### Requirements

To develop with this repository, you must have the following:

1. [Node](https://nodejs.org/en/download/): version 16 (e.g. 16.20.x, easiest via [nvm](https://github.com/nvm-sh/nvm) or [nodenv](https://github.com/nodenv/nodenv)). Newer versions of Node are not supported — this site runs Gatsby 2/webpack 4, which breaks on Node 17+. The `.node-version` file pins 14.16.1, which is what the Netlify build uses; both 14 and 16 work locally.
2. [Python](https://www.python.org/) 3.11 or earlier available as `python3` (or exported as `PYTHON`). Python 3.12+ removed `distutils`, which `node-gyp` needs to compile the `sharp` image library. With Homebrew: `brew install python@3.11`, then `export PYTHON=$(brew --prefix python@3.11)/bin/python3.11` before installing.
3. On Apple Silicon Macs: `libvips` (`brew install vips`), since the old `sharp` version used here has no ARM prebuilt binaries and must compile against a system libvips.
4. A [clone](https://help.github.com/articles/cloning-a-repository/) of this repo

### Installing dependencies

1. `cd developers.sparkpost.com` to go into the website directory
1. Run `npm run bootstrap` to install the npm dependencies

Note: the repo's `.npmrc` sets `legacy-peer-deps=true` — required because npm 7+ enforces peer dependencies strictly and this dependency tree predates that. If you install with a tool that ignores `.npmrc`, pass `--legacy-peer-deps` yourself.

### Local development

When developing locally, you have two options: developing the whole website or develop _just_ the API reference section. All content will hot-reload. If you aren't seeing changes, restart the development server.

#### Develop the website

This will develop the whole developer site.

1. Run `npm run develop`
1. Open [http://localhost:4000/](http://localhost:4000/) to view the website.

#### Develop API reference

**This is what you want if you are making documentation changes.**

This will only develop the API reference pages and skip unnecessary queries.

1. Run `npm run docs`
2. Open [http://localhost:4000/api/](http://localhost:4000/api/) to view the docs.

#### Develop Netlify Lambda Functions

To develop [Netlify Functions](https://www.netlify.com/docs/functions/) locally, run `npm run lambda`. This will start a second development server for the serverless functions.

Each file located in the `lambda/` directory will be deployed as a serverless function.

## Contributing

You'll find the all the content, pages, and data inside the `content` folder. If you are contributing content, take a
few minutes and read through the [contributing guidelines](CONTRIBUTING.md).

### Create a branch

Create a branch for your work in the repo:

1. `git checkout main` to checkout the main branch
1. `git pull origin main` to get the lastest code
1. `git checkout -b your-branch-name` to create a branch

### Make your changes

1. Follow the [Local development](#local-development) instructions to start the development server
1. Make your changes as needed
1. Changes to any files in the `content` and `src` directories will [hot-reload](https://code-cartoons.com/hot-reloading-and-time-travel-debugging-what-are-they-3c8ed2812f35).
1. If you make changes files in the `plugins` and `gatsby` directories or any top-level files, you will need to restart the server.

### Push your changes

1. Stage and commit your changes (`git add -A && git commit -m "Describe what you did"`)
1. Push your changes (`git push origin your-branch-name`)
1. [Create a Pull Request](https://help.github.com/articles/creating-a-pull-request/) against the `main` branch. Netlify will publish a [deploy preview](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/) so you can share and preview your changes as a live site.

## Troubleshooting

### npm related issues

#### `ERESOLVE could not resolve` during npm run bootstrap
1. npm 7+ enforces peer dependencies strictly, which this dependency tree cannot satisfy.
2. The repo's `.npmrc` sets `legacy-peer-deps=true` to handle this — make sure you are installing from the repo root.
3. If installing another way, pass `--legacy-peer-deps` to `npm install`.

### Python related issues

#### `ModuleNotFoundError: No module named 'distutils'` during npm run bootstrap
1. The distutils package was removed in Python 3.12, but `node-gyp` (used to compile `sharp`) needs it.
2. Install Python 3.11 (`brew install python@3.11`) and point node-gyp at it: `export PYTHON=$(brew --prefix python@3.11)/bin/python3.11`, then run `npm run bootstrap` again.
3. _or_ create a virtual environment (venv) with Python 3.12+ and `pip install setuptools`

### Apple Silicon (M1/M2/...) related issues

#### `fatal error: 'vips/vips8' file not found` during npm run bootstrap
1. The old `sharp` version used here has no prebuilt binaries for ARM Macs, so it compiles against a system-wide "libvips".
2. Install it with [brew](https://brew.sh/): ```brew install vips```
3. Proceed with ```npm run bootstrap``` again


#### `FATAL ERROR: wasm code commit Allocation failed - process out of memory` during npm run docs
1. Install `node v.16.14.0` (you can use [nodenv or node-build](https://github.com/nodenv/node-build) for that)
2. Proceed with `npm run docs` again
