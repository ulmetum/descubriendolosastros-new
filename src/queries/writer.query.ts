import qs from 'qs'

export const getDataWriterQuery = ({ name }: { name: string }) => {
  return qs.stringify(
    {
      populate: {
        picture: {
          fields: ['url'],
        },
        social: {
          populate: {
            fields: ['url', 'socialMedia'],
            icon: {
              fields: ['url'],
            },
          },
        },
      },
      filters: {
        name: {
          $eqi: name,
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  )
}
