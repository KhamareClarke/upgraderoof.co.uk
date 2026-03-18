import { AreaPageTemplate } from '@/components/AreaPageTemplate';

export default function RoofersHolmesChapelPage() {
  return (
    <AreaPageTemplate
      town="Holmes Chapel"
      intro="Upgrade Roofs serves Holmes Chapel with the same professional roofing standard we've delivered across Cheshire for over 25 years. Based just 4 miles away in Sandbach, we're ideally placed to provide fast, reliable roofing services to this thriving village community."
      localContext="Holmes Chapel is one of south Cheshire's most desirable villages, with a strong community and well-maintained housing stock. The village features attractive period cottages along Station Road and London Road, substantial family homes around Macclesfield Road and Middlewich Road, and newer developments on the village outskirts. We regularly carry out roofing work across the CW4 postcode area, from straightforward repairs to complete re-roofing projects on larger detached properties."
      roofingChallenges="Holmes Chapel properties tend to be well-maintained by homeowners who value quality. The village's rural setting means many roofs are more exposed to weather than urban properties, particularly on the north and west elevations. Older cottages in the village centre often have original slate or clay tile roofs that need specialist care. We regularly work with natural materials to maintain the character of these properties, while ensuring modern weatherproofing standards are met beneath the surface."
      faqs={[
        { q: 'How close are you to Holmes Chapel?', a: 'We are based in Sandbach, approximately 4 miles from Holmes Chapel. We can attend most inspections the same day you call, and emergency callouts reach Holmes Chapel within 20-30 minutes.' },
        { q: 'Do you work on cottage roofs in Holmes Chapel?', a: 'Yes. We have experience working on the older cottages and period properties in Holmes Chapel village centre. We use natural slate, clay tiles, and traditional methods to maintain the character of these properties while ensuring they are properly weatherproofed.' },
        { q: 'How much does roof maintenance cost in Holmes Chapel?', a: 'A standard roof inspection and minor maintenance visit typically costs £100-£250. Annual maintenance packages are available. Catching small issues early prevents expensive repairs later — particularly important for the larger properties common in Holmes Chapel.' },
        { q: 'Can you replace a garage flat roof in Holmes Chapel?', a: 'Absolutely. Garage flat roof replacements are one of our most common jobs in Holmes Chapel. We install EPDM rubber or GRP fibreglass systems with up to 20-year waterproof guarantees, typically completed in 1-2 days.' },
      ]}
      nearbyAreas={[
        { name: 'Crewe', href: '/roofers-crewe' },
        { name: 'Middlewich', href: '/roofers-middlewich' },
        { name: 'Congleton', href: '/roofers-congleton' },
        { name: 'Nantwich', href: '/roofers-nantwich' },
        { name: 'Alsager', href: '/roofers-alsager' },
      ]}
    />
  );
}
