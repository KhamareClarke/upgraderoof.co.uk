import { AreaPageTemplate } from '@/components/AreaPageTemplate';

export const dynamic = 'force-static';
export const revalidate = false;

export default function RoofersCrewePage() {
  return (
    <AreaPageTemplate
      town="Crewe"
      intro="Upgrade Roofs provides professional roofing services across Crewe and the surrounding area. Based just 4 miles away in Sandbach, we're one of the closest qualified roofing contractors serving Crewe — with same-day inspections available for most enquiries."
      localContext="Crewe has a diverse mix of property types, from Victorian terraces around Nantwich Road and Edleston Road to post-war council housing and newer developments at Leighton West and Sydney. Each property style brings different roofing requirements, and our team has extensive experience working on all of them. We regularly carry out roof repairs, re-roofing, and flat roof replacements across the CW1 and CW2 postcode areas."
      roofingChallenges="The railway heritage of Crewe means many older properties have original slate roofs that require specialist maintenance. Exposure to prevailing westerly winds across the Cheshire Plain can accelerate wear on ridge tiles, lead flashing, and mortar joints. We understand these local conditions and specify materials accordingly — ensuring your roof stands up to the weather Crewe experiences year after year."
      faqs={[
        { q: 'How quickly can you get to Crewe for a roof repair?', a: 'We are based in Sandbach, just 4 miles from Crewe town centre. For emergencies we can usually arrive within 30-45 minutes. For planned inspections, we can often attend the same day you call.' },
        { q: 'How much does a roof repair cost in Crewe?', a: 'Minor repairs such as replacing a few slipped tiles or re-bedding ridge tiles typically cost £150-£500. More significant repairs involving leadwork or valley replacements range from £500-£2,000. We provide free written quotes before any work begins.' },
        { q: 'Do you work on commercial roofs in Crewe?', a: 'Yes. We carry out flat roofing, cladding, and maintenance work on commercial properties across Crewe, including retail units, offices, and industrial buildings. We hold £10M public liability insurance for commercial projects.' },
        { q: 'Can you replace a roof on a Victorian terrace in Crewe?', a: 'Absolutely. We have extensive experience re-roofing Victorian terraces in Crewe using natural slate and traditional methods. We can match existing materials and work with conservation requirements where needed.' },
      ]}
      nearbyAreas={[
        { name: 'Middlewich', href: '/roofers-middlewich' },
        { name: 'Nantwich', href: '/roofers-nantwich' },
        { name: 'Alsager', href: '/roofers-alsager' },
        { name: 'Congleton', href: '/roofers-congleton' },
        { name: 'Holmes Chapel', href: '/roofers-holmes-chapel' },
      ]}
    />
  );
}
