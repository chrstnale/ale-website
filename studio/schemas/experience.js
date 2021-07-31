export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'date',
        title: 'Date',
        type: 'string',
      },
      {
        name: 'place',
        title: 'Place',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'blockContent',
      },
      {
        name: 'expType',
        title: 'Experience Type',
        type: 'string',
        options: {
            list: [
                {value: "work", title: "Work"},
                {value: "volunteer", title: "Volunteer"},
                {value: "education", title: "Education"},
            ],
        },
      },
      {
        name: 'expSize',
        title: 'Experience Size',
        type: 'string',
        options: {
            list: [
                {value: "big", title: "Big"},
                {value: "medium", title: "Medium"},
                {value: "small", title: "Small"},
            ],
        },
      },
    ],
  }
  