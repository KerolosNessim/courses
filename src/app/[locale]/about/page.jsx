import { useTranslations } from 'next-intl';

const AboutPage = () => {
  const t = useTranslations('about');
  return (
    <div>
      {t('title')}
    </div>
  )
}

export default AboutPage
