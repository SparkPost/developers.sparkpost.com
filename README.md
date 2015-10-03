# SparkPost Developer Community Portal
This is a private repo to host the SparkPost Organization Github Page which will serve as the developer community site.
See the associated [Confluence Page](https://confluence.int.messagesystems.com/display/DEVRELATIONS/SparkPost+Developer+Community+Portal) for more details.

## Contributing
Because any changes pushed to the `master` branch are immediately live, all pull requests are to be merged into the `develop` branch. Releases will happen by merging `develop` into `master`. At that point a Github tag & release will be created.

### Prerequisite
The site utilizes a static site generator called [Jekyll](http://jekyllrb.com/).
The following must be installed in order run Jekyll locally.
- [Ruby](http://www.ruby-lang.org/en/downloads/)
- [RubyGems](http://rubygems.org/pages/download)

### Local Development Setup
1. Clone the repo `git clone git@github.com:SparkPost/sparkpost.github.io.git`
2. Switch to the repo directory `cd sparkpost.github.io`
3. Run `./script/bootstrap` to install dependencies
4. Run `./script/server` to start the built-in development server in safe mode which is used by GitHub Pages. *The server will watch for changes and regenerate automatically.*
5. Optional - in a separate terminal tab, run `bundle exec guard` to trigger livereload when files change
6. Open <http://localhost:4000/> to view the site
7. When finished hit `ctrl + c` in the terminal window to stop the server

### Submitting Updates
1. Make sure you are on the `develop` branch `git checkout develop`
2. Pull latest changes from Github `git pull origin develop`
3. Create a new feature branch `git checkout -b ISSUE-XX`
4. Make changes and view them using the built-in development server.
5. Commit any changes `git commit -am "Some relevant message"`
6. Push your branch to Github `git push origin ISSUE-XX`
7. Create a [Pull Request](https://github.com/SparkPost/sparkpost.github.io/pulls) to submit changes for review
8. Once your Pull Request has been reviewed and merged, delete your branch

### Deploying to Staging
A second repo has been created for staging since GitHub will not generate branches other than master.

1. Add the staging remote if it doesn't exist `git remote add staging git@github.com:SparkPost/devhub-staging.git`
2. Push the develop branch to staging into the gh-pages branch `git push staging develop:gh-pages`
3. Open http://sparkpost.github.io/devhub-staging to view the site
