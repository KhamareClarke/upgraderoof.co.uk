/**
 * ---------------------------------------------------------------
 * PER-TOWN UNIQUE CONTENT — structured data source for town pages.
 *
 * Each town gets unique:
 *   - landmarks & neighbourhood references
 *   - common roofing problems specific to the area
 *   - a local proof point / social proof statement
 *   - postcode area
 *   - distance from base
 *   - property types typical to the area
 *   - a unique CTA line
 *
 * This file is the ONLY place town-specific content lives.
 * The AreaPageTemplate renders it — the page files just select a town.
 * ---------------------------------------------------------------
 */

export interface TownData {
  slug: string;
  town: string;
  postcode: string;
  distanceFromBase: string;
  emergencyResponseTime: string;
  intro: string;
  localContext: string;
  roofingChallenges: string;
  /** Unique landmarks or neighbourhood names for this town */
  landmarks: string[];
  /** Common property types in this town */
  propertyTypes: string[];
  /** Common roofing problems specific to this town */
  commonProblems: { problem: string; solution: string }[];
  /** Local proof point — e.g. "We've completed 40+ jobs in CW1" */
  proofPoint: string;
  /** Town-specific CTA line */
  ctaLine: string;
  faqs: { q: string; a: string }[];
  nearbyAreas: { name: string; href: string }[];
}

export const townData: Record<string, TownData> = {
  crewe: {
    slug: 'roofers-crewe',
    town: 'Crewe',
    postcode: 'CW1 / CW2',
    distanceFromBase: '4 miles from our Sandbach base',
    emergencyResponseTime: '30\u201345 minutes',
    intro:
      `Upgrade Roofs provides professional roofing services across Crewe and the surrounding area. Based just 4 miles away in Sandbach, we\u2019re one of the closest qualified roofing contractors serving Crewe \u2014 with same-day inspections available for most enquiries.`,
    localContext:
      'Crewe has a diverse mix of property types, from Victorian terraces around Nantwich Road and Edleston Road to post-war council housing and newer developments at Leighton West and Sydney. Each property style brings different roofing requirements, and our team has extensive experience working on all of them. We regularly carry out roof repairs, re-roofing, and flat roof replacements across the CW1 and CW2 postcode areas.',
    roofingChallenges:
      'The railway heritage of Crewe means many older properties have original slate roofs that require specialist maintenance. Exposure to prevailing westerly winds across the Cheshire Plain can accelerate wear on ridge tiles, lead flashing, and mortar joints. We understand these local conditions and specify materials accordingly \u2014 ensuring your roof stands up to the weather Crewe experiences year after year.',
    landmarks: ['Nantwich Road', 'Edleston Road', 'Leighton West', 'Sydney', 'Crewe town centre'],
    propertyTypes: ['Victorian terraces', 'Post-war council housing', 'New-build developments', "Railway workers' cottages"],
    commonProblems: [
      { problem: 'Slate deterioration on Victorian properties', solution: 'We source matching natural Welsh slate for authentic repairs and full re-slating.' },
      { problem: 'Ridge tile lifting from wind exposure', solution: 'We install dry ridge systems rated for exposed locations \u2014 no mortar to crack.' },
      { problem: 'Flat roof failures on garage extensions', solution: 'EPDM or GRP replacement with 20-year guarantee, usually completed in 1\u20132 days.' },
    ],
    proofPoint: 'We have completed over 50 roofing projects in the CW1 and CW2 postcode areas.',
    ctaLine: 'Based in Sandbach \u2014 just 4 miles from Crewe town centre. Same-day inspections available.',
    faqs: [
      { q: 'How quickly can you get to Crewe for a roof repair?', a: 'We are based in Sandbach, just 4 miles from Crewe town centre. For emergencies we can usually arrive within 30-45 minutes. For planned inspections, we can often attend the same day you call.' },
      { q: 'How much does a roof repair cost in Crewe?', a: 'Minor repairs such as replacing a few slipped tiles or re-bedding ridge tiles typically cost \u00a3150-\u00a3500. More significant repairs involving leadwork or valley replacements range from \u00a3500-\u00a32,000. We provide free written quotes before any work begins.' },
      { q: 'Do you work on commercial roofs in Crewe?', a: 'Yes. We carry out flat roofing, cladding, and maintenance work on commercial properties across Crewe, including retail units, offices, and industrial buildings. We hold \u00a310M public liability insurance for commercial projects.' },
      { q: 'Can you replace a roof on a Victorian terrace in Crewe?', a: 'Absolutely. We have extensive experience re-roofing Victorian terraces in Crewe using natural slate and traditional methods. We can match existing materials and work with conservation requirements where needed.' },
    ],
    nearbyAreas: [
      { name: 'Middlewich', href: '/roofers-middlewich' },
      { name: 'Nantwich', href: '/roofers-nantwich' },
      { name: 'Alsager', href: '/roofers-alsager' },
      { name: 'Congleton', href: '/roofers-congleton' },
      { name: 'Holmes Chapel', href: '/roofers-holmes-chapel' },
    ],
  },

  middlewich: {
    slug: 'roofers-middlewich',
    town: 'Middlewich',
    postcode: 'CW10',
    distanceFromBase: '3 miles from our Sandbach base',
    emergencyResponseTime: '20\u201330 minutes',
    intro:
      `Upgrade Roofs is one of the closest professional roofing contractors to Middlewich \u2014 based just minutes away in Sandbach. We\u2019ve been looking after roofs across Middlewich for over 25 years, from the older properties around Wheelock Street to newer builds on the outskirts of town.`,
    localContext:
      'Middlewich sits at the junction of three canals and has a rich history reflected in its housing stock. The town centre features a mix of period properties requiring careful roofing attention, while estates around Cledford and Kinderton offer more modern roofing requirements. Our team works across all CW10 postcodes and regularly completes re-roofing, repair, and flat roof projects throughout the town.',
    roofingChallenges:
      `The salt mining heritage beneath Middlewich has caused subsidence issues in some areas, which can affect roof structures and alignment. Combined with the town\u2019s low-lying position near the River Croco, properties here can be more exposed to damp and weathering. We assess every roof with these local factors in mind, recommending materials and methods that account for the specific conditions Middlewich properties face.`,
    landmarks: ['Wheelock Street', 'Cledford', 'Kinderton', 'Trent & Mersey Canal', 'River Croco'],
    propertyTypes: ['Period canal-side properties', 'Modern estates', 'Salt town terraces', 'Canalside conversions'],
    commonProblems: [
      { problem: 'Subsidence-related roof movement', solution: 'We assess structural alignment and install flexible flashing and fixings that accommodate minor movement.' },
      { problem: 'Damp penetration on low-lying properties', solution: 'Enhanced ventilation and breathable membranes to manage moisture from the canal corridor.' },
      { problem: 'Ageing flat roofs on garage extensions near waterways', solution: 'EPDM rubber systems designed for higher moisture environments with 20-year warranties.' },
    ],
    proofPoint: 'Our closest service area \u2014 we can reach any Middlewich address in under 15 minutes.',
    ctaLine: 'Just 3 miles from Middlewich. Often the fastest roofer to your door.',
    faqs: [
      { q: 'How far is your base from Middlewich?', a: 'We are based in Sandbach, approximately 3 miles from Middlewich town centre. We can attend most inspections the same day and reach emergency callouts within 20-30 minutes.' },
      { q: 'Do you handle subsidence-related roof issues in Middlewich?', a: 'Yes. We have experience working on properties affected by historic subsidence in Middlewich. We can assess structural movement impacts on your roof and carry out appropriate repairs or reinforcement work.' },
      { q: 'How much does a new roof cost in Middlewich?', a: 'A terraced house re-roof typically costs \u00a35,000-\u00a38,000 in Middlewich. Semi-detached properties range from \u00a36,500 to \u00a310,000. We always provide a free written quote after inspecting the property.' },
      { q: 'Can you repair flat roofs on canal-side properties in Middlewich?', a: 'Absolutely. Many Middlewich properties near the canal have flat roof extensions or garages. We install EPDM and GRP systems with up to 20-year guarantees, designed to handle the higher moisture levels in these locations.' },
    ],
    nearbyAreas: [
      { name: 'Crewe', href: '/roofers-crewe' },
      { name: 'Nantwich', href: '/roofers-nantwich' },
      { name: 'Congleton', href: '/roofers-congleton' },
      { name: 'Alsager', href: '/roofers-alsager' },
      { name: 'Holmes Chapel', href: '/roofers-holmes-chapel' },
    ],
  },

  congleton: {
    slug: 'roofers-congleton',
    town: 'Congleton',
    postcode: 'CW12',
    distanceFromBase: '6 miles from our Sandbach base',
    emergencyResponseTime: '30\u201345 minutes',
    intro:
      `Upgrade Roofs provides expert roofing across Congleton and the surrounding villages. Based in nearby Sandbach, we\u2019ve been working on Congleton properties for over 25 years \u2014 from the historic town centre to modern developments along the A534 and A536 corridors.`,
    localContext:
      `Congleton\u2019s position on the edge of the Cheshire Plain, where it meets the foothills of the Pennines, gives the town a unique housing character. The older centre around High Street and Lawton Street features period properties with traditional slate and tile roofs, while estates at Mossley, West Heath, and Buglawton present a mix of 20th-century housing styles. We work across all CW12 postcodes and understand the roofing needs specific to each part of town.`,
    roofingChallenges:
      `Congleton\u2019s slightly elevated position compared to the rest of south Cheshire means properties here face stronger winds and heavier rainfall, particularly from the west. Roofs on the eastern side of town, closer to the hills around Astbury and Biddulph, are especially exposed. We specify fixings and materials rated for higher wind loads when working on these properties, and pay particular attention to ridge tiles, verge pointing, and lead flashing details that are vulnerable in exposed conditions.`,
    landmarks: ['High Street', 'Lawton Street', 'Mossley', 'West Heath', 'Buglawton', 'Astbury'],
    propertyTypes: ['Period town-centre properties', '20th-century estates', 'Pennine-edge cottages', 'Modern developments'],
    commonProblems: [
      { problem: 'Wind damage on elevated properties', solution: 'We install fixings rated for higher wind zones and use dry ridge/verge systems on exposed roofs.' },
      { problem: 'Heavy rainfall penetration', solution: 'Double-layer felt underlay and enhanced flashing details for maximum weather protection.' },
      { problem: 'Ageing slate on town-centre period properties', solution: 'We source matching Welsh slate and reclaimed materials for authentic heritage repairs.' },
    ],
    proofPoint: 'Regularly working on properties across the CW12 postcode from town centre to Astbury.',
    ctaLine: 'Based in Sandbach \u2014 6 miles from Congleton. Emergency response within 30\u201345 minutes.',
    faqs: [
      { q: 'How quickly can you reach Congleton for an emergency?', a: 'We are based in Sandbach, approximately 6 miles from Congleton. For emergencies we can typically arrive within 30-45 minutes. Call 01270 897606 for emergencies.' },
      { q: 'Do you work on older properties in Congleton town centre?', a: 'Yes. We have extensive experience with period properties in Congleton, including natural slate re-roofing, lime mortar ridge work, and lead flashing repairs. We can match existing materials sympathetically.' },
      { q: 'How much does a roof replacement cost in Congleton?', a: 'Typical costs in Congleton range from \u00a35,000-\u00a38,000 for terraced houses, \u00a37,000-\u00a311,000 for semi-detached, and \u00a39,000-\u00a316,000+ for larger detached properties. We always provide a free inspection and written quote first.' },
      { q: 'Can you fix storm damage to roofs in Congleton?', a: "Yes. Congleton properties can be more exposed to storm damage due to the town's position. We provide 24/7 emergency response for storm damage, including make-safe work, tarpaulin cover, and permanent repairs. We also handle insurance claims paperwork." },
    ],
    nearbyAreas: [
      { name: 'Crewe', href: '/roofers-crewe' },
      { name: 'Middlewich', href: '/roofers-middlewich' },
      { name: 'Nantwich', href: '/roofers-nantwich' },
      { name: 'Alsager', href: '/roofers-alsager' },
      { name: 'Holmes Chapel', href: '/roofers-holmes-chapel' },
    ],
  },

  nantwich: {
    slug: 'roofers-nantwich',
    town: 'Nantwich',
    postcode: 'CW5',
    distanceFromBase: '8 miles from our Sandbach base',
    emergencyResponseTime: '30\u201345 minutes',
    intro:
      'Upgrade Roofs delivers expert roofing services to homeowners across Nantwich and the surrounding countryside. Based in Sandbach, just 8 miles away, we combine fast local response times with over 25 years of professional roofing experience.',
    localContext:
      `Nantwich is one of Cheshire\u2019s most architecturally distinctive towns. The centre is home to over 150 listed buildings, many with original timber-frame construction and period roofing. Beyond the historic core, areas like Stapeley, Willaston, and the Barony estate feature a range of housing from Georgian through to modern builds. We work across all CW5 postcodes and have completed roofing projects on properties of every age and style in the Nantwich area.`,
    roofingChallenges:
      'The high concentration of period and listed buildings in Nantwich means roofing work often requires specialist knowledge of traditional materials and conservation-sensitive methods. We regularly work with natural Welsh slate, handmade clay tiles, and lime-based mortars to match existing roof finishes. For newer properties, the flat agricultural landscape around Nantwich means roofs are fully exposed to wind-driven rain from the west, so we ensure weatherproofing details are robust and correctly specified.',
    landmarks: ['Nantwich town centre', 'Stapeley', 'Willaston', 'The Barony', 'Welsh Row'],
    propertyTypes: ['Tudor timber-frame buildings', 'Georgian townhouses', 'Listed properties', 'Modern estates at Stapeley'],
    commonProblems: [
      { problem: 'Conservation-sensitive repairs on listed buildings', solution: 'We use handmade clay tiles, Welsh slate, and lime mortar to meet planning conditions.' },
      { problem: 'Wind-driven rain on exposed rural properties', solution: 'Enhanced weatherproofing with breathable membranes and robust flashing details.' },
      { problem: 'Timber-frame movement affecting roof alignment', solution: 'Flexible fixing methods that accommodate seasonal structural movement in period buildings.' },
    ],
    proofPoint: 'Experienced with listed and conservation-area properties \u2014 over 150 listed buildings in Nantwich alone.',
    ctaLine: 'Heritage roofing specialists serving Nantwich and the CW5 postcode area.',
    faqs: [
      { q: 'Can you work on listed buildings in Nantwich?', a: 'Yes. We have experience working on period and listed properties in Nantwich using traditional materials including natural Welsh slate, handmade clay tiles, and lime mortar. We understand conservation area requirements and can advise on material choices that meet planning conditions.' },
      { q: 'How quickly can you reach Nantwich?', a: 'We are based in Sandbach, approximately 8 miles from Nantwich. Standard inspections can usually be arranged for the same or next day. Emergency callouts reach Nantwich within 30-45 minutes. Call 01270 897606 for emergencies.' },
      { q: 'Do you offer roof maintenance contracts in Nantwich?', a: 'Yes. We provide annual roof inspection and maintenance packages for Nantwich homeowners. Regular maintenance catches small issues before they become expensive problems \u2014 particularly important for the older properties Nantwich is known for.' },
      { q: 'How much does re-roofing cost in Nantwich?', a: 'Costs depend on property size and materials. A typical terraced house re-roof starts from \u00a35,000, semi-detached from \u00a36,500, and detached from \u00a39,000. Listed properties requiring specialist materials may cost more. We always provide a detailed free quote.' },
    ],
    nearbyAreas: [
      { name: 'Crewe', href: '/roofers-crewe' },
      { name: 'Middlewich', href: '/roofers-middlewich' },
      { name: 'Congleton', href: '/roofers-congleton' },
      { name: 'Alsager', href: '/roofers-alsager' },
      { name: 'Holmes Chapel', href: '/roofers-holmes-chapel' },
    ],
  },

  alsager: {
    slug: 'roofers-alsager',
    town: 'Alsager',
    postcode: 'ST7',
    distanceFromBase: '5 miles from our Sandbach base',
    emergencyResponseTime: '25\u201335 minutes',
    intro:
      'Upgrade Roofs provides reliable, professional roofing services to homeowners across Alsager. Based in Sandbach \u2014 just 5 miles away \u2014 we offer fast response times and over 25 years of hands-on roofing experience in this part of Cheshire.',
    localContext:
      `Alsager is a well-established residential town with a housing stock that ranges from pre-war semis around Crewe Road and Sandbach Road to modern family estates at Radway Green and Oakhanger. The town\u2019s popularity with families and retirees means roofing standards here matter \u2014 people invest in their properties and expect quality workmanship. We\u2019ve completed hundreds of projects across the ST7 postcode area, including full re-roofs, flat roof replacements, chimney repairs, and emergency call-outs.`,
    roofingChallenges:
      `Alsager\u2019s position on the south-east edge of Cheshire means properties face weather from both the Cheshire Plain and the higher ground to the east. The older housing stock around the town centre often features concrete interlocking tiles from the 1960s-80s that are now reaching the end of their serviceable life. We regularly advise Alsager homeowners on the best time to replace ageing roofs before they develop costly problems \u2014 and can match or upgrade materials to suit both budget and property character.`,
    landmarks: ['Crewe Road', 'Sandbach Road', 'Radway Green', 'Oakhanger', 'Alsager town centre'],
    propertyTypes: ['Pre-war semi-detached', '1960s\u201380s estates', 'Modern family homes', 'Bungalows'],
    commonProblems: [
      { problem: 'Deteriorating 1960s\u201380s concrete interlocking tiles', solution: 'Full strip-and-retile with modern lightweight tiles, new felt, battens, and ventilation to current regs.' },
      { problem: 'Chimney deterioration on older semi-detached houses', solution: 'Repointing, lead flashing renewal, and cowl installation to prevent water ingress.' },
      { problem: 'Loft condensation in poorly ventilated bungalows', solution: 'Roof ventilation upgrades and breathable membrane installation during re-roofing.' },
    ],
    proofPoint: 'Hundreds of completed projects across the ST7 postcode \u2014 Alsager is one of our busiest areas.',
    ctaLine: 'Just 5 miles from Alsager. Fast response, quality work, 10-year guarantee.',
    faqs: [
      { q: 'How far are you from Alsager?', a: 'Our base in Sandbach is approximately 5 miles from Alsager town centre. We can attend routine inspections the same or next day, and emergency callouts reach Alsager within 30 minutes.' },
      { q: 'Do you replace concrete tile roofs in Alsager?', a: 'Yes. Many Alsager properties from the 1960s-80s have concrete interlocking tiles that are now deteriorating. We strip and re-tile these roofs using modern lightweight tiles or natural slate, with new felt, battens, and ventilation to current building regulations.' },
      { q: 'How much does a new roof cost in Alsager?', a: 'A terraced house re-roof in Alsager typically costs \u00a35,000-\u00a37,500. Semi-detached properties range from \u00a36,500-\u00a310,000. Larger detached homes from \u00a39,000 upwards. We provide free detailed quotes after inspecting your property.' },
      { q: 'Can you fit skylights in Alsager properties?', a: 'Yes. We are experienced VELUX installers and fit skylights into both pitched and flat roofs across Alsager. Skylights are an excellent way to add natural light to loft conversions and extensions.' },
    ],
    nearbyAreas: [
      { name: 'Crewe', href: '/roofers-crewe' },
      { name: 'Middlewich', href: '/roofers-middlewich' },
      { name: 'Congleton', href: '/roofers-congleton' },
      { name: 'Nantwich', href: '/roofers-nantwich' },
      { name: 'Holmes Chapel', href: '/roofers-holmes-chapel' },
    ],
  },

  'holmes-chapel': {
    slug: 'roofers-holmes-chapel',
    town: 'Holmes Chapel',
    postcode: 'CW4',
    distanceFromBase: '4 miles from our Sandbach base',
    emergencyResponseTime: '20\u201330 minutes',
    intro:
      `Upgrade Roofs serves Holmes Chapel with the same professional roofing standard we\u2019ve delivered across Cheshire for over 25 years. Based just 4 miles away in Sandbach, we\u2019re ideally placed to provide fast, reliable roofing services to this thriving village community.`,
    localContext:
      `Holmes Chapel is one of south Cheshire\u2019s most desirable villages, with a strong community and well-maintained housing stock. The village features attractive period cottages along Station Road and London Road, substantial family homes around Macclesfield Road and Middlewich Road, and newer developments on the village outskirts. We regularly carry out roofing work across the CW4 postcode area, from straightforward repairs to complete re-roofing projects on larger detached properties.`,
    roofingChallenges:
      `Holmes Chapel properties tend to be well-maintained by homeowners who value quality. The village\u2019s rural setting means many roofs are more exposed to weather than urban properties, particularly on the north and west elevations. Older cottages in the village centre often have original slate or clay tile roofs that need specialist care. We regularly work with natural materials to maintain the character of these properties, while ensuring modern weatherproofing standards are met beneath the surface.`,
    landmarks: ['Station Road', 'London Road', 'Macclesfield Road', 'Middlewich Road', 'Holmes Chapel village centre'],
    propertyTypes: ['Period village cottages', 'Substantial detached family homes', 'Rural properties', 'New-build estates'],
    commonProblems: [
      { problem: 'Weather exposure on rural properties', solution: 'We install enhanced weatherproofing with fixings rated for exposed locations.' },
      { problem: 'Original slate/clay tile maintenance on cottages', solution: 'Specialist care using matching natural materials and traditional methods.' },
      { problem: 'Large roof areas on detached properties', solution: 'Phased re-roofing programmes that manage cost while keeping your home protected.' },
    ],
    proofPoint: 'Regular roofing work across the CW4 area \u2014 from village cottages to detached family homes.',
    ctaLine: 'Just 4 miles from Holmes Chapel. Quick response, quality-first approach.',
    faqs: [
      { q: 'How close are you to Holmes Chapel?', a: 'We are based in Sandbach, approximately 4 miles from Holmes Chapel. We can attend most inspections the same day you call, and emergency callouts reach Holmes Chapel within 20-30 minutes.' },
      { q: 'Do you work on cottage roofs in Holmes Chapel?', a: 'Yes. We have experience working on the older cottages and period properties in Holmes Chapel village centre. We use natural slate, clay tiles, and traditional methods to maintain the character of these properties while ensuring they are properly weatherproofed.' },
      { q: 'How much does roof maintenance cost in Holmes Chapel?', a: 'A standard roof inspection and minor maintenance visit typically costs \u00a3100-\u00a3250. Annual maintenance packages are available. Catching small issues early prevents expensive repairs later \u2014 particularly important for the larger properties common in Holmes Chapel.' },
      { q: 'Can you replace a garage flat roof in Holmes Chapel?', a: 'Absolutely. Garage flat roof replacements are one of our most common jobs in Holmes Chapel. We install EPDM rubber or GRP fibreglass systems with up to 20-year waterproof guarantees, typically completed in 1-2 days.' },
    ],
    nearbyAreas: [
      { name: 'Crewe', href: '/roofers-crewe' },
      { name: 'Middlewich', href: '/roofers-middlewich' },
      { name: 'Congleton', href: '/roofers-congleton' },
      { name: 'Nantwich', href: '/roofers-nantwich' },
      { name: 'Alsager', href: '/roofers-alsager' },
    ],
  },
};
