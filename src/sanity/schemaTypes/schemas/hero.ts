const hero = {
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, 
        },
      },
      {
        name: 'title',
        title: 'Hero Title',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Hero Subtitle',
        type: 'text',
      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
      },
    ],
  };

  export default hero