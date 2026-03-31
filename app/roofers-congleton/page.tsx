import { AreaPageTemplate } from '@/components/AreaPageTemplate';
import { townData } from '@/lib/town-data';

export const dynamic = 'force-static';
export const revalidate = false;

const data = townData.congleton;

export default function RoofersCongleton() {
  return (
    <AreaPageTemplate
      town={data.town}
      postcode={data.postcode}
      distanceFromBase={data.distanceFromBase}
      emergencyResponseTime={data.emergencyResponseTime}
      intro={data.intro}
      localContext={data.localContext}
      roofingChallenges={data.roofingChallenges}
      landmarks={data.landmarks}
      propertyTypes={data.propertyTypes}
      commonProblems={data.commonProblems}
      proofPoint={data.proofPoint}
      ctaLine={data.ctaLine}
      faqs={data.faqs}
      nearbyAreas={data.nearbyAreas}
    />
  );
}
