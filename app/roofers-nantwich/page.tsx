import { AreaPageTemplate } from '@/components/AreaPageTemplate';

export const dynamic = 'force-static';
export const revalidate = false;

export default function RoofersNantwichPage() {
  return (
    <AreaPageTemplate
      town="Nantwich"
      intro="Upgrade Roofs delivers expert roofing services to homeowners across Nantwich and the surrounding countryside. Based in Sandbach, just 8 miles away, we combine fast local response times with over 25 years of professional roofing experience."
      localContext="Nantwich is one of Cheshire's most architecturally distinctive towns. The centre is home to over 150 listed buildings, many with original timber-frame construction and period roofing. Beyond the historic core, areas like Stapeley, Willaston, and the Barony estate feature a range of housing from Georgian through to modern builds. We work across all CW5 postcodes and have completed roofing projects on properties of every age and style in the Nantwich area."
      roofingChallenges="The high concentration of period and listed buildings in Nantwich means roofing work often requires specialist knowledge of traditional materials and conservation-sensitive methods. We regularly work with natural Welsh slate, handmade clay tiles, and lime-based mortars to match existing roof finishes. For newer properties, the flat agricultural landscape around Nantwich means roofs are fully exposed to wind-driven rain from the west, so we ensure weatherproofing details are robust and correctly specified."
      faqs={[
        { q: 'Can you work on listed buildings in Nantwich?', a: 'Yes. We have experience working on period and listed properties in Nantwich using traditional materials including natural Welsh slate, handmade clay tiles, and lime mortar. We understand conservation area requirements and can advise on material choices that meet planning conditions.' },
        { q: 'How quickly can you reach Nantwich?', a: 'We are based in Sandbach, approximately 8 miles from Nantwich. Standard inspections can usually be arranged for the same or next day. Emergency callouts reach Nantwich within 30-45 minutes. Call 07379 440583 for emergencies.' },
        { q: 'Do you offer roof maintenance contracts in Nantwich?', a: 'Yes. We provide annual roof inspection and maintenance packages for Nantwich homeowners. Regular maintenance catches small issues before they become expensive problems — particularly important for the older properties Nantwich is known for.' },
        { q: 'How much does re-roofing cost in Nantwich?', a: 'Costs depend on property size and materials. A typical terraced house re-roof starts from £5,000, semi-detached from £6,500, and detached from £9,000. Listed properties requiring specialist materials may cost more. We always provide a detailed free quote.' },
      ]}
      nearbyAreas={[
        { name: 'Crewe', href: '/roofers-crewe' },
        { name: 'Middlewich', href: '/roofers-middlewich' },
        { name: 'Congleton', href: '/roofers-congleton' },
        { name: 'Alsager', href: '/roofers-alsager' },
        { name: 'Holmes Chapel', href: '/roofers-holmes-chapel' },
      ]}
    />
  );
}
