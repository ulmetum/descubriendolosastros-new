import { MultiStep } from '@/components/contactpage'

const ContactPage = () => {
  return (
    <section className='mt-[calc(var(--main-header-height)*1.5)] min-h-[100dvh] flex-col flex justify-center w-full pb-16'>
      <MultiStep />
    </section>
  )
}
export default ContactPage
