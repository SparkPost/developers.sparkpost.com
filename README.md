# SparkPost Developer Community Portal

[![Build Status](https://travis-ci.org/SparkPost/developers.sparkpost.com.svg?branch=develop)](https://travis-ci.org/SparkPost/developers.sparkpost.com) [![Slack Status](http://slack.sparkpost.com/badge.svg)](http://slack.sparkpost.com)

This repo hosts the code that powers the [SparkPost Developer Hub](https://developers.sparkpost.com/).

## Contributing
Because any changes pushed to the `master` branch are immediately live, all pull requests are to be merged into the `develop` branch. 
The site uses Travis CI to test and build changes in the `develop` branch and push them to `master`. The `master` branch will only hold the generated site.

### Prerequisite
The site utilizes a static site generator called [Jekyll](http://jekyllrb.com/).
The following must be installed in order run Jekyll locally.
- [Ruby](http://www.ruby-lang.org/en/downloads/)
- [RubyGems](http://rubygems.org/pages/download)

### Local Development Setup
1. Clone the repo `git clone git@github.com:SparkPost/developers.sparkpost.com.git`
2. Switch to the repo directory `cd developers.sparkpost.com`
3. Run `./script/bootstrap` to install dependencies  
   - note: if you get `An error occurred while installing eventmachine` you may need to make sure openssl is installed on a newer Mac OS X. To do this, first try `brew install openssl`, if already installed, try `brew link openssl --force`
4. Run `./script/server` to start the built-in development server. *The server will watch for changes and regenerate automatically.*
5. Optional - in a separate terminal tab, run `bundle exec guard` to trigger livereload when files change
6. Open <http://localhost:4000/> to view the site
7. When finished hit `ctrl + c` in the terminal window to stop the server

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
