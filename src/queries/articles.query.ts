import qs from 'qs'

export const getAllArticlesQuery = () => {
  return qs.stringify(
    {
      fields: ['title', 'subtitle', 'createdAt', 'slug', 'excerpt'],
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
            'elements.video-url': {
              populate: '*',
            },
          },
        },
        tags: { fields: ['slug'] },
        featuredImage: {
          fields: ['url'],
        },
        writer: {
          fields: ['name', 'email'],
          populate: { picture: { fields: ['url'] } },
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

export const getArticleBySlugQuery = ({ slug }: { slug: string }) => {
  return qs.stringify(
    {
      filters: { slug: { $eqi: slug } },
      fields: ['title', 'subtitle', 'createdAt', 'slug', 'excerpt'],
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
            'elements.video-url': {
              populate: '*',
            },
          },
        },
        tags: { fields: ['slug'] },
        featuredImage: {
          fields: ['url'],
        },
        writer: {
          fields: ['name', 'email'],
          populate: { picture: { fields: ['url'] } },
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

export const getArticlesByPageQuery = ({ page }: { page: string }) => {
  // console.log({ page })
  return qs.stringify(
    {
      fields: ['title', 'subtitle', 'createdAt', 'slug', 'excerpt'],
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
            'elements.video-url': {
              populate: '*',
            },
          },
        },
        tags: { fields: ['slug'] },
        featuredImage: {
          fields: ['url'],
        },
        writer: {
          fields: ['name', 'email'],
          populate: { picture: { fields: ['url'] } },
        },
        metadata: {
          populate: { sharedImage: { fields: ['url'] } },
        },
      },
      pagination: {
        page,
        pageSize: 5,
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  )
}

export const getArticleByIdQuery = ({ id }: { id: number }) => {
  return qs.stringify(
    {
      filters: { id: { $eq: id } },
      fields: ['title', 'subtitle', 'createdAt', 'slug', 'excerpt'],
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
            'elements.video-url': {
              populate: '*',
            },
          },
        },
        tags: { fields: ['slug'] },
        featuredImage: {
          fields: ['url'],
        },
        writer: {
          fields: ['name', 'email'],
          populate: { picture: { fields: ['url'] } },
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
