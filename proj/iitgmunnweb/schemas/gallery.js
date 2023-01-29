export default {
    name: 'gallery',
    type: 'document',
    title: 'Gallery',
    fields: [
      {
        name: 'edition_num',
        type: 'string',
        title: 'Edition'
      },
      {
        name: 'id',
        type: 'number',
        title: 'ID'
      },
      {
        name: 'img_urls',
        type: 'array',
        of: [{type:'string'}],
        title:'Images'
      },
    ]
}