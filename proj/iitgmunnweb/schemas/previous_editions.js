export default {
    name: 'previous_editions',
    type: 'document',
    title: 'Previous Editions',
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
        name: 'council',
        type: 'array',
        of: [{type:'string'}],
        title:'Council Name'
      },
      {
        name: 'counciltext',
        type: 'array',
        of: [{type: 'string'}],
        title: 'Description'
      },
      {
        name: 'councilimg',
        type: 'array',
        of: [{type: 'string'}],
        title: 'Cover Image'
      },
    //   {
    //     name: 'council',
    //     type: 'array',
    //     of: [{
    //         type: 'object',
    //         fields: [
    //             {name: 'council_name', type: 'string', title: 'Council Name'},
    //             {name: 'council_text', type: 'string', title: 'About Info'},
    //             {name: 'council_img', type: 'string', title: 'Cover Image'}
    //         ]
    //     }],
    //     title: 'Council'
    //   },
    ]
}