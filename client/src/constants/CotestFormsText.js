const NAME = [
  {
    type: 'text',
    label: 'Title of your Contest',
    placeholder: 'i.e. Name for Company, Name for App',
    validation: 'isRequire',
    name: 'contestTitle',
  },
  {
    type: 'select',
    label: 'What type of Name are you looking for?',
    validation: 'isRequire',
    name: 'typeOfName',
    options: [
      {label: 'Company', value: 'Company'},
      {label: 'Product', value: 'Product'},
      {label: 'Project', value: 'Project'},
    ]
  },
  {
    name: 'whatBusinessDo',
    type: 'text',
    placeholder: 'e.g. We\'re an online lifestyle brand that provides stylish and high quality apparel to the expert eco-conscious shopper.',
    label: 'What does your company / business do?',
    validation: "isRequire",
  },
  {
    type: 'select',
    label: 'What type of Name are you looking for?',
    validation: 'isRequire',
    name: 'styles',
    options: [
      {label: 'Classic', value: 'Classic'},
      {label: 'Fun', value: 'Fun'},
      {label: 'Professional', value: 'Professional'},
      {label: 'Descriptive', value: 'Descriptive'},
      {label: 'Youthful', value: 'Youthful'},
      {label: 'Any', value: 'Any'},
    ]
  },
  {
    type: 'textarea',
    label: 'Any other details that are relevant to this project?',
    placeholder: 'Share any additional information or direction that might be useful to creatives',
    validation: 'isRequire',
    name: 'description',
  },


];