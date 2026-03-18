import { AreaPageTemplate } from '@/components/AreaPageTemplate';

export default function RoofersAlsagerPage() {
  return (
    <AreaPageTemplate
      town="Alsager"
      intro="Upgrade Roofs provides reliable, professional roofing services to homeowners across Alsager. Based in Sandbach — just 5 miles away — we offer fast response times and over 25 years of hands-on roofing experience in this part of Cheshire."
      localContext="Alsager is a well-established residential town with a housing stock that ranges from pre-war semis around Crewe Road and Sandbach Road to modern family estates at Radway Green and Oakhanger. The town's popularity with families and retirees means roofing standards here matter — people invest in their properties and expect quality workmanship. We've completed hundreds of projects across the ST7 postcode area, including full re-roofs, flat roof replacements, chimney repairs, and emergency call-outs."
      roofingChallenges="Alsager's position on the Cheshire-Staffordshire border means properties face weather from both the Cheshire Plain and the higher ground to the east. The older housing stock around the town centre often features concrete interlocking tiles from the 1960s-80s that are now reaching the end of their serviceable life. We regularly advise Alsager homeowners on the best time to replace ageing roofs before they develop costly problems — and can match or upgrade materials to suit both budget and property character."
      faqs={[
        { q: 'How far are you from Alsager?', a: 'Our base in Sandbach is approximately 5 miles from Alsager town centre. We can attend routine inspections the same or next day, and emergency callouts reach Alsager within 30 minutes.' },
        { q: 'Do you replace concrete tile roofs in Alsager?', a: 'Yes. Many Alsager properties from the 1960s-80s have concrete interlocking tiles that are now deteriorating. We strip and re-tile these roofs using modern lightweight tiles or natural slate, with new felt, battens, and ventilation to current building regulations.' },
        { q: 'How much does a new roof cost in Alsager?', a: 'A terraced house re-roof in Alsager typically costs £5,000-£7,500. Semi-detached properties range from £6,500-£10,000. Larger detached homes from £9,000 upwards. We provide free detailed quotes after inspecting your property.' },
        { q: 'Can you fit skylights in Alsager properties?', a: 'Yes. We are experienced VELUX installers and fit skylights into both pitched and flat roofs across Alsager. Skylights are an excellent way to add natural light to loft conversions and extensions.' },
      ]}
      nearbyAreas={[
        { name: 'Crewe', href: '/roofers-crewe' },
        { name: 'Middlewich', href: '/roofers-middlewich' },
        { name: 'Congleton', href: '/roofers-congleton' },
        { name: 'Nantwich', href: '/roofers-nantwich' },
        { name: 'Holmes Chapel', href: '/roofers-holmes-chapel' },
      ]}
    />
  );
}
