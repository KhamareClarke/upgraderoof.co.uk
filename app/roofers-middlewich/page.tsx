import { AreaPageTemplate } from '@/components/AreaPageTemplate';

export default function RoofersMiddlewichPage() {
  return (
    <AreaPageTemplate
      town="Middlewich"
      intro="Upgrade Roofs is one of the closest professional roofing contractors to Middlewich — based just minutes away in Sandbach. We've been looking after roofs across Middlewich for over 25 years, from the older properties around Wheelock Street to newer builds on the outskirts of town."
      localContext="Middlewich sits at the junction of three canals and has a rich history reflected in its housing stock. The town centre features a mix of period properties requiring careful roofing attention, while estates around Cledford and Kinderton offer more modern roofing requirements. Our team works across all CW10 postcodes and regularly completes re-roofing, repair, and flat roof projects throughout the town."
      roofingChallenges="The salt mining heritage beneath Middlewich has caused subsidence issues in some areas, which can affect roof structures and alignment. Combined with the town's low-lying position near the River Croco, properties here can be more exposed to damp and weathering. We assess every roof with these local factors in mind, recommending materials and methods that account for the specific conditions Middlewich properties face."
      faqs={[
        { q: 'How far is your base from Middlewich?', a: 'We are based in Sandbach, approximately 3 miles from Middlewich town centre. We can attend most inspections the same day and reach emergency callouts within 20-30 minutes.' },
        { q: 'Do you handle subsidence-related roof issues in Middlewich?', a: 'Yes. We have experience working on properties affected by historic subsidence in Middlewich. We can assess structural movement impacts on your roof and carry out appropriate repairs or reinforcement work.' },
        { q: 'How much does a new roof cost in Middlewich?', a: 'A terraced house re-roof typically costs £5,000-£8,000 in Middlewich. Semi-detached properties range from £6,500 to £10,000. We always provide a free written quote after inspecting the property.' },
        { q: 'Can you repair flat roofs on canal-side properties in Middlewich?', a: 'Absolutely. Many Middlewich properties near the canal have flat roof extensions or garages. We install EPDM and GRP systems with up to 20-year guarantees, designed to handle the higher moisture levels in these locations.' },
      ]}
      nearbyAreas={[
        { name: 'Crewe', href: '/roofers-crewe' },
        { name: 'Nantwich', href: '/roofers-nantwich' },
        { name: 'Congleton', href: '/roofers-congleton' },
        { name: 'Alsager', href: '/roofers-alsager' },
        { name: 'Holmes Chapel', href: '/roofers-holmes-chapel' },
      ]}
    />
  );
}
