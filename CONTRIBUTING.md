# Contributing

Thank you for your interest in contributing to the SparkPost Developer Site!

## API reference

The API reference broadly follows [API Blueprint](https://apiblueprint.org/), an an open source extension of markdown designed for writing API specs, with a copule of [extensions](#api-blueprint-extensions).

Each top-level section in the API reference has a corresponding file under `content/api/`. Each file represents either an API endpoint such as /api/v1/transmissions or a high-level concept like "template language". When adding a new API reference page, be sure to add it to the table of contents. If a file is not listed in the table of contents, it won't get generated.

If you are looking for API reference history before July 2018, visit the archived [sparkpost-api-documentation](https://github.com/SparkPost/sparkpost-api-documentation) repository.

Here are some resources for learning API Blueprint and Markdown:

* https://help.apiary.io/api_101/api_blueprint_tutorial/
* https://help.apiary.io/api_101/mson-tutorial/
* https://guides.github.com/features/mastering-markdown/
* https://apiblueprint.org/documentation/tutorial.html

### Table of Contents

**Location**:  `content/api/table-of-contents.json`

The table of contents is set in the `table-of-contents.json` file. It contains an array of "category" objects. Each of those objects has a `pages` key which contains an array of file names.

When adding a new API reference page, be sure to add it to the table of contents. If a file is not listed in the table of contents, it wont get generated.

### Metadata

Each API Blueprint file starts with metadata. At minimum, it needs the `FORMAT` and `title`.

* `FORMAT` - Denotes the document is an API Blueprint file. It should always be `1A`.
* `title`  - Use to set the page `<title>` tag and title in the navigation bar.
* `description` - Use to set the page description.
* `label` - (Optional) An additional label to be shown next to the navigation link. This is great for calling out a new endpoint.
* `full` - (Optional) Use this to set the layout to be a single column. Set to `true` for pages that are purely markdown.

### Content

#### Organizing your API file

As a general rule, API reference files should start with an introduction and description of the resource object followed by the endpoints and methods, ordered by their CRUD operations.

1. **Introduction**: A description of the endpoint, what is used for, and any additional knowledge the user should know about the endpoint. For example, the subaccount introduction covers what subaccounts are, what endpoints support them, and what the `X-MSYS-SUBACCOUNT` is.
1. **{Resource} Object**: This should be [data structure](#data-structure) and a sample containing all the attributes a single instance of the resource will have.
1. **Create a {Resource}**: This should be followed by any endpoints that are related to the initial setup of the resource. For instance, "Verify a Sending Domain" should be listed directly after this, since the verification step is key to setting up your sending domain.
1. **Retrieve a {Resource}**
1. **Update a {Resource}**
1. **Delete a {Resource}**
1. **List all {Resource}s**
1. **{Sub Category}**: Sub categories include things that are not directly related to the top-level use or any series of endpoints that should be siloed from the rest of the documentation. Examples of this are the [Webhooks Documentation endpoints](https://developers.sparkpost.com/api/webhooks/#webhooks-documentation) and [Scheduled Transmissions](https://developers.sparkpost.com/api/transmissions/#scheduled-transmissions)
    1. **Introduction**
    1. **Create**
    1. **etc...**

### API Blueprint parts

#### [Resource Group](https://apiblueprint.org/documentation/tutorial.html#resource-groups)

Each file should only have a single Resource Group equal to the resource you're describing.

**Example**

```
# Group Sending Domains
```

The markdown directly following the title should include the Introduction and {Resource} Object sections.

#### [Resources](https://apiblueprint.org/documentation/tutorial.html#resource)

Resources tend to add noise and lead to poor organization (i.e. grouping create and list together simply because they have the same URI.)

Avoid using them, unless you are creating a sub category.

**Example**

```
## Documentation [/documentation]
```

#### [Actions](https://apiblueprint.org/documentation/tutorial.html#actions)

Actions are the meat and potatoes of the documentation. They describe each action you can take.

**Example**

```
### Create a Sending Domain [POST /sending-domains]
```

The description should include any details about the action the user is going to take, along with a [data structure](#data-structure) with all possible options _for that action_. If something can be set on creation, but not on update, don't include it in the update body.

Each action should have one Request; in rare circumstances it may make sense to have two, but you should never go above that.

#### [Requests](https://apiblueprint.org/documentation/specification.html#def-request-section) and [Responses](https://apiblueprint.org/documentation/specification.html#def-response-section)

Every request should have a response with a `200` status code. If there are any cases where a non-obvious error will be returned or where an error won't follow our standard format, a sample error response should also be included.

### API Blueprint Extensions

API Blueprint and markdown are powerful formats. However to reach the full level of flexibility needed, we added extensions to the format.

#### Data Structure

API Blueprint has a concept of [data structures](https://apiblueprint.org/documentation/specification.html#def-data-structures) for defining any structure of data in the API using [MSON](https://apiblueprint.org/documentation/mson/tutorial.html). With our flavor, these can be added anywhere in the API Blueprint files.

To add a data structure, add a markdown list with first item's text set to "Data Structure". To set a different title (the default is "Request Body"), add a colon followed by the new title.

```
<!-- Create a data structure -->
+ Data Structure

<!-- Create a data structure with a specific title -->
+ Data Structure: My title
```

Add [MSON](https://apiblueprint.org/documentation/mson/tutorial.html) items to define the different attributes.


```
+ Data Structure
    + <attribute name>: `<value>` (<type> | enum[<type>], required) - <description>

        <additional description>

        + Default: `<default value>`
        + `<enumeration value 1>`
        + `<enumeration value 2>`
        ...
        + `<enumeration value N>`
```


Data Structures can also receive a sample, which they will display on the right of content.

```
+ Data Structure
    ...
+ Sample

    ```
    {
        "sample_json": "goes here"
    }
    ```
```



**Example**:

```
+ Data Structure
    + domain (string) - Domain name for which SparkPost will receive inbound emails.
+ Sample

    ```
    {
        "domain": "inbounddomain.test.com"
    }
    ```
```


#### Banner

The `<Banner>` component allows you to define an alert. Only use a banner when calling out something that will change how the user uses the action or resource. If you are simply describing the endpoint, put it as the description.

**Status Values**:

* `success` - For best practices.
* `info` - For general information.
* `warning` - For weird gotchas or limitations.
* `danger` - For describing API errors or calling out possible state-conflicts outside the user's control.


**Example**

```
<Banner status="info"><strong>Note</strong>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, cumque.</Banner>
```


#### REPL

The `<REPL>` component allows you to insert a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) for a live playground of the SparkPost template language.

Inside the `<REPL>` You can add 3 code blocks: an `html` code block, a `json` code block, and a `results` code block.

The `html` code will be used as the HTML body for the preview. The `json` code will be used as the substitution data. The `results` code will be used as the initial preview content. If no `results` field is given, a preview request will be made when the page loads.

If the `json` code block is first, the **Data** tab will be selected. Otherwise the **HTML** tab will be open.

**Example**

~~~
<REPL>
```html
{{ value }}
```
```json
{
    "value": "Hello 👋"
}
```
```results
Hello 👋
```
</REPL>
~~~
