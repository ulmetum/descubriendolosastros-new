import qs from 'qs'

export const getLandingPagesQuery = () => {
  return qs.stringify(
    {
      fields: ['title', 'description', 'createdAt', 'slug'],
      sort: ['createdAt:desc'],
      populate: {
        elements: {
          on: {
            'elements.content-text': {
              populate: '*',
            },
            'elements.photo': {
              populate: {
                image: {
                  fields: ['url'],
                },
              },
            },
            'elements.double-columns': {
              populate: '*',
            },
            'elements.quote': {
              populate: '*',
            },
            'elements.accordion': {
              populate: {
                items: {
                  populate: '*',
                },
              },
            },
          },
        },
        featuredImage: {
          fields: ['url'],
        },

        metadata: {
          populate: { sharedImage: { fields: ['url'] } },
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  )
}
