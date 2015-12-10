source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'rake'
gem 'github-pages', versions['github-pages']
gem 'guard'
gem 'guard-livereload'
gem "html-proofer"
