import fs from 'fs'

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeWords(str) {
  return str.split(" ").map(word => capitalize(word)).join(" ");
}

const collections = fs.readdirSync('./app/collections').map(file => {
  const path = './app/collections/' + file
  const content = JSON.parse(fs.readFileSync(path, 'utf-8'), null, 2)

  const fields = content.fields.map(field => {
      return {
        name: field.name.toLowerCase(),
        label: capitalizeWords(field.name),
        widget: field.type
      }
    })

  fields.unshift({
    name: 'title',
    label: 'Title',
    widget: 'string',
    required: true
  })

  //console.log(fields)

  return {
    name: content.name.toLowerCase(),
    label: capitalizeWords(content.name),
    editor: {
      preview: false
    },
    folder: 'src/' + content.name.toLowerCase() + '/entries',
    create: true,
    slug: "{{name}}",
    format: "json",
    fields: fields
  }
})

export default {
  "backend": {
    "name": "git-gateway",
    "branch": "main"
  },
  "media_folder": "src/uploads",
  "public_folder": "uploads",
  collections
}
