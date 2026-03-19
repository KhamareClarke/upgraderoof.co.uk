import { AreaPageTemplate } from '@/components/AreaPageTemplate';

export const dynamic = 'force-static';
export const revalidate = false;

export default function RoofersCongleton() {
  return (
    <AreaPageTemplate
      town="Congleton"
      intro="Upgrade Roofs provides expert roofing across Congleton and the surrounding villages. Based in nearby Sandbach, we've been working on Congleton properties for over 25 years — from the historic town centre to modern developments along the A534 and A536 corridors."
      localContext="Congleton's position on the edge of the Cheshire Plain, where it meets the foothills of the Pennines, gives the town a unique housing character. The older centre around High Street and Lawton Street features period properties with traditional slate and tile roofs, while estates at Mossley, West Heath, and Buglawton present a mix of 20th-century housing styles. We work across all CW12 postcodes and understand the roofing needs specific to each part of town."
      roofingChallenges="Congleton's slightly elevated position compared to the rest of south Cheshire means properties here face stronger winds and heavier rainfall, particularly from the west. Roofs on the eastern side of town, closer to the hills around Astbury and Biddulph, are especially exposed. We specify fixings and materials rated for higher wind loads when working on these properties, and pay particular attention to ridge tiles, verge pointing, and lead flashing details that are vulnerable in exposed conditions."
      faqs={[
        { q: 'How quickly can you reach Congleton for an emergency?', a: 'We are based in Sandbach, approximately 6 miles from Congleton. For emergencies we can typically arrive within 30-45 minutes. Call 07379 440583 for our 24/7 emergency line.' },
        { q: 'Do you work on older properties in Congleton town centre?', a: 'Yes. We have extensive experience with period properties in Congleton, including natural slate re-roofing, lime mortar ridge work, and lead flashing repairs. We can match existing materials sympathetically.' },
        { q: 'How much does a roof replacement cost in Congleton?', a: 'Typical costs in Congleton range from £5,000-£8,000 for terraced houses, £7,000-£11,000 for semi-detached, and £9,000-£16,000+ for larger detached properties. We always provide a free inspection and written quote first.' },
        { q: 'Can you fix storm damage to roofs in Congleton?', a: 'Yes. Congleton properties can be more exposed to storm damage due to the town\'s position. We provide 24/7 emergency response for storm damage, including make-safe work, tarpaulin cover, and permanent repairs. We also handle insurance claims paperwork.' },
      ]}
      nearbyAreas={[
        { name: 'Crewe', href: '/roofers-crewe' },
        { name: 'Middlewich', href: '/roofers-middlewich' },
        { name: 'Nantwich', href: '/roofers-nantwich' },
        { name: 'Alsager', href: '/roofers-alsager' },
        { name: 'Holmes Chapel', href: '/roofers-holmes-chapel' },
      ]}
    />
  );
}
