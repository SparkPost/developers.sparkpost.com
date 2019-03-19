<div id="changelog">
<h1>Message Scope 1.x Change Log</h1>

<table class="sidebar">
	<tr><th>Quick Links</th></tr>
	<tr><td><a href="#1.2.4">Message Scope 1.2.4 released on 2013-07-02</a></td></tr>
	<tr><td><a href="#1.2.2">Message Scope 1.2.2 released on 2013-01-28</a></td></tr>
</table>

<h2><a name="1.2.4">Message Scope 1.2.4 released on 2013-07-02</a></h2>
<ul>
<li>Fixed ticket #PKG-49: Upgrade to Apache 2.2.24 which addresses security vulnerability</li>
<li>Fixed ticket #PKG-50: Upgrade to PHP 5.3.24 which addresses security vulnerability</li>
<li>Fixed ticket #MSC-4: Add email address validation in Search Parameters</li>
<li>Fixed ticket #MSC-6 & MSC-7: Too many open files filling up Scope Ingestors node</li>
</ul>

<h2><a name="1.2.2">Message Scope 1.2.2 released on 2013-01-28</a></h2>
<ul>
<li>Fixed ticket #BZ4039: Updated example driver to work with the new UI driver API</li>
<li>Fixed ticket #BZ4720: Fixed an issue in which invalid remediation lists are shown (or valid remediation lists are not shown) when adding entries to IP-based lists.</li>
<li>Fixed ticket #BZ5245: Added additional information regarding hostname configuration values at install-time</li>
<li>Fixed ticket #BZ5861: Improved error handling around processing of stale and invalid data.</li>
<li>Fixed ticket #BZ5863: Fixed an issue in which entry point events are not returned for some searches, causing errors in the UI.</li>
<li>Fixed ticket #BZ6111: Changed semantics of the Janitor process to only remove stale data. Indexes are no longer merged.</li>
<li>Fixed ticket #BZ6130: Fixed an issue in which UTF-8 data can the UI to not display any results for a search.</li>
<li>Fixed ticket #BZ6167: Fixed a bug in which custom-defined required fields can make it impossible to complete a search in IE8.</li>
<li>Fixed ticket #BZ6200: Improve localized display of dates and times based on the user's clock.</li>
<li>Fixed ticket #BZ6242: Improve handling and interpretation of dates and times to reflect the value of the user's clock.</li>
<li>Fixed ticket #BZ6303: Fix an issue in which the 'Today' button would not populate the date / time range filter.</li>
<li>Fixed ticket #BZ6304: Stricter validation rules are applied to date ranges in searches.</li>
<li>Fixed ticket #BZ6609: this release supports the upgrade from 1.2.0 to 1.2.2 as well as the upgrade from 1.2.1 to 1.2.2</li>
<li>Fixed ticket #BZ6612: Existing config files will be backed up prior to upgrade.  After upgrade, any custom changes to the config files need to be re-applied.</li>
<li>Fixed ticket #ESC-134: Upgrade now possible for multinode installations, e.g. web/db on one node and ingestor on other node(s)</li>
</ul>

</div>
