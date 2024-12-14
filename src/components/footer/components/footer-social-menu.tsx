import { SocialIcons } from '@/components/article/SocialIcons'
import { SocialWriter } from '@/interfaces/writer.interface'

interface Props {
  socials: SocialWriter[]
}

export const FooterSocialMenu = ({ socials }: Props) => {
  return (
    <div>
      <p className='mb-3 text-center font-headings text-2xl font-light text-light sm:text-3xl'>
        Sígueme en:
      </p>
      <div className='mt-2 flex justify-center gap-3 sm:gap-4 md:mt-3'>
        <SocialIcons
          socials={socials}
          color='pampas'
          size='small'
        />
      </div>
    </div>
  )
}
