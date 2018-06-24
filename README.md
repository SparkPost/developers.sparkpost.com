# SparkPost Developer Site

[![Slack Status](http://slack.sparkpost.com/badge.svg)](http://slack.sparkpost.com)

This is the [Developer Site](https://developers.sparkpost.com/) and API reference for SparkPost.


### Installation

Download a copy of this repository.

```sh
git clone https://github.com/SparkPost/developers.sparkpost.com.git
```

Install the project and plugin dependencies:

```sh
npm run bootstrap
```

### Editing API Reference Content

To _only_ build the API reference run:

```sh
npm run docs
```

You can find the API reference content inside the `content/api` folder.

The paths and categories are defined in `content/api/table-of-contents.json`



### Editing the Developer Site

Run the app:

```sh
npm run develop
```

Need a GitHub key.


### Conventions

1. File and Folder names


### Architecture

#### Components

#### Sources

#### Transforms

#### Netlify CMS

#### API Reference


### API Documentation Development Setup

The API documentation is generated from [sparkpost-api-documentation](https://github.com/SparkPost/sparkpost-api-documentation). See the [README](https://github.com/SparkPost/sparkpost-api-documentation/blob/master/README.md) in that repo for details on that build process.

For an easy dev setup:

- Check out sparkpost-api-documentation
- Check out developers.sparkpost.com alongside
- Start the API docs watch-and-build process:

```bash
cd sparkpost-api-documentation
grunt staticDev
# This will write to ../developers.sparkpost.com/_api by default
```

- Start the DevHub watch-and-build process:

```bash
cd ../developers.sparkpost.com
./script/server
# This will regenerate the DevHub when API docs files are changed
```

[Visit the local DevHub site](http://localhost:4000/).

Now when you change either the API docs or DevHub code, the site will be regenerated.

### Submitting Updates
1. Make sure you are on the `develop` branch `git checkout develop`
2. Pull latest changes from Github `git pull origin develop`
3. Create a new feature branch `git checkout -b ISSUE-XX`
4. Make changes and view them using the built-in development server.
5. Run `rake site:test` to test your changes. (We use [html-proofer](https://github.com/gjtorikian/html-proofer) for testing)
6. Commit any changes `git commit -am "Some relevant message"`
7. Push your branch to Github `git push origin ISSUE-XX`
8. Create a [Pull Request](https://github.com/SparkPost/developers.sparkpost.com/pulls) to submit changes for review
9. Once your Pull Request has been reviewed and merged, delete your branch
