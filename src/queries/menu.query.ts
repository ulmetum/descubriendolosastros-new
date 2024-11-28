import qs from 'qs'

export const getMenuQuery = ({ name }: { name: string }) => {
  return qs.stringify(
    {
      fields: ['name'],
      populate: {
        menuElements: '*',
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
