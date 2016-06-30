Changelog
==========

For transparency and insight into our release cycle, releases will be numbered 
with the follow format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backwards compatibility bumps the major
* New additions without breaking backwards compatibility bumps the minor
* Bug fixes and misc changes bump the patch

For more information on semantic versioning, please visit http://semver.org/.

---

### 0.20.1 June 14, 2016

* Ensure the dropdown menu is hidden when there is an `$empty` block and blank query.

### 0.20.0 June 04, 2016

* Ensure we don't update the input value on mouseenter (#76)
* Render an `empty` template if no results (#80)

### 0.19.1 May 04, 2016

* Fixed the angular build (_.Event was undefined)

### 0.19.0 Apr 25, 2016

* Allow select handler to prevent menu from being closed (#72)
* Do not trigger the cursorchanged event while entering/leaving nested divs (#71)

### 0.18.0 Apr 07, 2016

* Ability to customize the CSS classes used to render the DOM
* Ensure the `autocomplete:cursorchanged` event is called on `mouseover` as well

### 0.17.3 Apr 04, 2016

* Standalone: ensure we actually use the Zepto object and not whatever is in `window.$`

### 0.17.2 Mar 21, 2016

* Ability to setup the autocomplete on a multi-inputs Zepto selector
* Propagate the `shown` event to the top-level

### 0.17.1 Mar 19, 2016

* REVERT [Ability to setup the autocomplete on a multi-inputs Zepto selector] Fix #59

### 0.17.0 Mar 18, 2016

* Ability to setup the autocomplete on a multi-inputs Zepto selector
* Add a new `shown` event triggered when the dropdown menu is opened and non-empty

BREAKING CHANGE: the standalone object returned by the `autocomplete()` method is now a Zepto object.

### 0.16.2 Jan 22, 2016

* stop using weird zepto package. Stop using chained .data calls
  it seems that chaining them ended up in an `undefined` return value when passing `undefined` as a value

### 0.16.1 Jan 22, 2016

* remove npm-zepto, use zepto original package (now on npm) fixes #48

### 0.16.0 Dec 11, 2015

* Emit a new `autocomplete:updated` event as soon as a dataset is rendered

### 0.15.0 Dec 10, 2015

* Ability to configure the dropdown menu container

### 0.14.1 Dec 2, 2015

* Move Zepto as a dependency (not a peer dep)
* Really use the `query` instead of the `displayKey` (was supposed to be fixed in 0.11.0)

### 0.14.0 Nov 28, 2015

* Move npm-zepto & angular to peerDependencies
* Fixed custom dropdownMenu's footer & header not being displayed properly
* Allow dataset with name=0

### 0.13.1 Nov 25, 2015

* Move the bower release name to `algolia-autocomplete.js` since `autocomplete.js` is already used

### 0.13.0 Nov 25, 2015

* Add Bower release

### 0.12.0 Oct 15, 2015

* Expose the underlying `close`, `open`, ... functions in the standalone build.

### 0.11.1 Oct 13, 2015

* Zepto doesn't work like jQuery regarding the `data` API, it doesn't support serializing objects.

### 0.11.0 Oct 07, 2015

* If the `displayKey` is not specified and the `value` attribute missing, don't update the input value with `undefined`.
* Expose the `sources` object in the Angular.js build as well.

### 0.10.0 Oct 06, 2015

* Add a new `includeAll` option to the `popularIn` source to add an extra suggestion.

### 0.9.0 Oct 01, 2015

* Full CommonJS compliance (moved from browserify to webpack)

### 0.8.0 Sep 24, 2015

* UMD compliance

### 0.7.0 Sep 16, 2015

* New standalone build (including Zepto.js)
* Get rid of lodash-compat and use jQuery, Zepto or Angular.js's helper functions

### 0.6.0 Sep 11, 2015

* Add Zepto.js support.

### 0.5.0 Sep 9, 2015

* The wrapper span will now have a `table-cell` display if the original input was a `block` inside a `table`.

### 0.4.0 Aug 12, 2015

* Add a new `openOnFocus` option to open the dropdown menu when the input is focused

### 0.3.0 July 27, 2015

* Add Angular.js support [#7]

### 0.2.0 July 16, 2015

* Ability to change the layout based on the matching datasets [#11]

### 0.1.0 July 13, 2015

* Start using semantic versioning

### 0.0.2 July 13, 2015

* Ability to keep the dropdown menu opened when the input if blurred [#1]
* Ability to use a custom dropdown menu template [#2]
* Ability to configure a custom header/footer on the dropdown menu [#3]

### 0.0.1 July 12, 2015

* First release based on Twitter's typeahead.js library
* Travis-ci.org, Coveralls.io, Saucelabs.com integration
* CommonJS compatibility
