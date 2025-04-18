import { getDataLandingPagesAction } from '@/actions/landing-pages/get-data-landing-pages.action'
import { Container } from '@/components/Container'

import { FeatureTitle } from '@/components/homepage/features/featureTitle'
import { LandingPageCard } from '@/components/homepage/features/featureCard'
import { CustomError } from '@/components/CustomError'

export const SectionFeatures = async () => {
  const res = await getDataLandingPagesAction()

  if (res?.serverError) {
    return <CustomError error={res.serverError} />
  }

  const landingPagesData = res?.data?.landingPages.data || []
  return (
    <section>
      <Container className='flex items-start gap-20 px-4'>
        <div className='w-full py-[35vh]'>
          <ul>
            {landingPagesData.map((page, index) => (
              <li key={page.id}>
                <FeatureTitle
                  slug={page.slug}
                  type={page.type}
                  id={index + 1}
                >
                  {page.title}
                </FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className='sticky top-0 hidden h-screen w-full items-center justify-center sm:flex'>
          <div className='relative hidden aspect-square w-full max-w-96 rounded-2xl bg-light sm:flex'>
            {landingPagesData.map((page, index) => {
              return (
                <div key={index + 1}>
                  <LandingPageCard
                    slug={page.slug}
                    id={index + 1}
                    featuredImage={page.featuredImage.url}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
