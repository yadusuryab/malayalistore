export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Banner Title',
        type: 'string',
        description: 'Main heading for the banner',
       
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
        description: 'Optional smaller text below the title',
      },
      {
        name: 'image',
        title: 'Banner Image',
        type: 'image',
        options: { hotspot: true },
        description: 'Upload the banner background image',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'ctaText',
        title: 'CTA Text',
        type: 'string',
        description: 'Text for call-to-action button (e.g., Shop Now)',
      },
      {
        name: 'ctaLink',
        title: 'CTA Link',
        type: 'url',
        description: 'Where the button should navigate (internal or external link)',
      },
     
      {
        name: 'isActive',
        title: 'Active Banner',
        type: 'boolean',
        description: 'Toggle ON to show this banner on the site',
        initialValue: true,
      },
    ],
  };
  