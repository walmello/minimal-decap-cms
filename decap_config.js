export default {
  "backend": {
    "name": "git-gateway",
    "branch": "main"
  },
  "media_folder": "uploads",
  "public_folder": "build/uploads",
  "collections": [
    {
      "name": "events",
      "label": "Events",
      "editor": {
        "preview": false
      },
      "folder": "build/events/entries",
      "create": true,
      "slug": "{{slug}}",
      "format": "json",
      "fields": [
        {
          "name": "title",
          "label": "Title",
          "widget": "string"
        },
        {
          "label": "Featured",
          "name": "featured",
          "widget": "boolean",
          "default": false
        },
        {
          "name": "description",
          "label": "Description",
          "widget": "text"
        },
        {
          "label": "Cover Image",
          "name": "image",
          "widget": "image",
          "required": false
        },
        {
          "name": "location",
          "label": "Location",
          "widget": "string"
        },
        {
          "name": "dateTime",
          "label": "Datetime",
          "widget": "datetime"
        }
      ]
    },
    {
      "name": "blog",
      "label": "Blog",
      "editor": {
        "preview": false
      },
      "folder": "build/blog/entries",
      "create": true,
      "slug": "{{slug}}",
      "format": "json",
      "fields": [
        {
          "label": "Title",
          "name": "title",
          "widget": "string"
        },
        {
          "label": "Description",
          "name": "description",
          "widget": "text"
        },
        {
          "label": "Tags",
          "name": "tags",
          "widget": "list",
          "allow_add": true,
          "required": false
        },
        {
          "label": "Featured",
          "name": "featured",
          "widget": "boolean",
          "default": false
        },
        {
          "label": "Options",
          "name": "options",
          "widget": "object",
          "collapsed": true,
          "fields": [
            {
              "label": "Publish Date",
              "name": "date",
              "widget": "datetime"
            },
            {
              "label": "Order",
              "name": "order",
              "widget": "number",
              "value_type": "int",
              "default": 0
            }
          ]
        },
        {
          "label": "Cover Image",
          "name": "image",
          "widget": "image",
          "required": false
        },
        {
          "label": "Body",
          "name": "body",
          "widget": "markdown"
        }
      ]
    }
  ]
}