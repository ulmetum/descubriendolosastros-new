import qs from 'qs'

export const getLandingPagesQuery = () => {
  return qs.stringify(
    {
      fields: [
        'title',
        'description',
        'createdAt',
        'slug',
        'type',
        'podcastUrl',
      ],
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
export const getLandingPagesBySlugQuery = ({ slug }: { slug: string }) => {
  return qs.stringify(
    {
      filters: { slug: { $eqi: slug } },
      fields: [
        'title',
        'description',
        'createdAt',
        'slug',
        'type',
        'podcastUrl',
      ],
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
