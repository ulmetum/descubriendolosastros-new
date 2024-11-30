import {
  CardFour,
  CardOne,
  CardThree,
  CardTwo,
  Container,
  FeatureTitle,
} from '@/components'

const features = [
  { id: 1, title: 'Análisis de la Carta Astral', card: 'cardone' },
  { id: 2, title: 'Interpretación de los Planetas', card: 'cardtwo' },
  { id: 3, title: 'Estrellas y Constelaciones', card: 'cardthree' },
  { id: 4, title: 'El Universo y sus Misterios', card: 'cardfour' },
]

export const SectionFeatures = () => {
  return (
    <section>
      <Container className='flex items-start gap-20 px-4'>
        <div className='w-full py-[35vh]'>
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className='sticky top-0 hidden h-screen w-full items-center justify-center sm:flex'>
          <div className='relative hidden aspect-square w-full max-w-96 rounded-2xl bg-light sm:flex'>
            {features.map((feature) => {
              switch (feature.card) {
                case 'cardone':
                  return (
                    <CardOne
                      id={feature.id}
                      key={feature.id}
                    />
                  )
                case 'cardtwo':
                  return (
                    <CardTwo
                      id={feature.id}
                      key={feature.id}
                    />
                  )
                case 'cardthree':
                  return (
                    <CardThree
                      id={feature.id}
                      key={feature.id}
                    />
                  )
                case 'cardfour':
                  return (
                    <CardFour
                      id={feature.id}
                      key={feature.id}
                    />
                  )
                default:
                  return null
              }
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
