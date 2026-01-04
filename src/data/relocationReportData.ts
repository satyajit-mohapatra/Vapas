export const CITY_INTELLIGENCE = {
    bengaluru: {
        id: 'bengaluru',
        name: 'Bengaluru',
        tagline: 'The Silicon Valley Paradox',
        overview: 'Bengaluru remains the primary employment anchor for tech professionals but faces the most severe infrastructure deficit among Indian metros. The market is bifurcated between the saturated East (Whitefield/ORR) and the rapidly developing North (Hebbal/Airport Road).',
        microMarkets: [
            {
                name: 'Whitefield & ITPL',
                type: 'The Eastern Anchor',
                proximity: 'Historic hub housing ITPB, EPIP Zone, SAP, TCS, Oracle.',
                connectivity: 'Purple Line Metro extension to Kadugodi has reduced travel time to CBD. Last-mile connectivity remains poor.',
                vibe: 'Self-sufficient but chaotic. High density of malls and hospitals.'
            },
            {
                name: 'Sarjapur Road & ORR',
                type: 'The Corporate Spine',
                proximity: 'Hosts highest density of Grade-A office space (Goldman Sachs, JPMorgan).',
                connectivity: 'Upcoming Blue Line Metro (Silk Board to Airport) causing severe disruption but promising future.',
                vibe: 'Cosmopolitan, expensive, traffic-choked. Preferred for Walk-to-Work.'
            },
            {
                name: 'North Bengaluru',
                type: 'The Emerging Capital',
                proximity: 'Driven by KIA Airport and Aerospace Park (Shell, Boeing).',
                connectivity: 'Superior road infra (Bellary Road) and Airport Metro Line.',
                vibe: 'Spacious, greener, less dense. Focal point for luxury townships.'
            }
        ],
        pricing: {
            currency: 'INR/sq ft',
            data: [
                { location: 'Whitefield', price: '₹8,000 - ₹12,000', rental: '3.5% - 4.5%' },
                { location: 'Sarjapur Road', price: '₹9,500 - ₹13,500', rental: '4.0% - 5.0%' },
                { location: 'ORR (Bellandur)', price: '₹11,000 - ₹15,000', rental: '4.5% - 5.5%' },
                { location: 'North (Hebbal)', price: '₹12,000 - ₹17,000', rental: '3.0% - 4.0%' }
            ]
        },
        challenges: [
            'Acute water crisis in Whitefield/Sarjapur (tanker reliance).',
            'Encroachment drives against properties on storm water drains (Rajakaluves).'
        ]
    },
    hyderabad: {
        id: 'hyderabad',
        name: 'Hyderabad',
        tagline: 'The Challenger with Growing Pains',
        overview: 'Hyderabad has positioned itself as the primary alternative to Bengaluru, offering superior arterial infrastructure (ORR) and newer housing. However, 2025-26 has seen regulatory turbulence regarding lake buffer zones.',
        microMarkets: [
            {
                name: 'HITEC City',
                type: 'The Nucleus',
                proximity: 'Original IT hub, Cyber Towers.',
                connectivity: 'Excellent Metro connectivity (Blue Line).',
                vibe: 'Saturated, high-cost resale apartments.'
            },
            {
                name: 'Gachibowli',
                type: 'The Premium Hub',
                proximity: 'Home to Amazon, Microsoft, Google campuses.',
                connectivity: 'Connected via ORR and airport expressway.',
                vibe: 'High-rise gated communities, preferred by senior execs.'
            },
            {
                name: 'Kokapet & Tellapur',
                type: 'Neopolis Frontier',
                proximity: 'Western extension of Financial District.',
                connectivity: 'Seamless access to airport (25 mins).',
                vibe: 'Hotspot for luxury, spacious apartments (3000+ sq ft).'
            }
        ],
        pricing: {
            currency: 'INR/sq ft',
            data: [
                { location: 'Gachibowli', price: '₹10,500 - ₹14,500', rental: 'Steady Growth' },
                { location: 'HITEC City', price: '₹11,500 - ₹16,000', rental: 'Saturated' },
                { location: 'Kokapet', price: '₹9,500 - ₹13,500', rental: 'High Appreciation' }
            ]
        },
        challenges: [
            'HYDRA Agency demolition drives against constructions in lake buffer zones/FTL.',
            'Strict due diligence required for lake-view properties.'
        ]
    },
    gurgaon: {
        id: 'gurgaon',
        name: 'Gurgaon',
        tagline: 'Luxury, Power, and Pollution',
        overview: 'Caters to the highest concentration of MNC executives in North India. A market of extremes: world-class private infrastructure inside gates vs crumbling public infra outside.',
        microMarkets: [
            {
                name: 'Golf Course Road',
                type: 'The Platinum Belt',
                proximity: 'DLF Cyber City, Amex, Genpact.',
                connectivity: 'Rapid Metro and signal-free underpass corridor.',
                vibe: 'Ultra-luxury like Dubai/Singapore. Home to Camellias/Magnolias.'
            },
            {
                name: 'Golf Course Extn',
                type: 'Premium Spillover',
                proximity: 'Extension of premium market.',
                connectivity: 'Connected to Sohna Road.',
                vibe: 'High-rise gated communities (Tata, M3M).'
            },
            {
                name: 'Dwarka Expressway',
                type: 'The Future',
                proximity: 'Connected to Delhi and IGI Airport.',
                connectivity: 'Operational Dwarka Expressway.',
                vibe: 'Massive supply of mid-to-premium housing.'
            }
        ],
        pricing: {
            currency: 'INR/sq ft',
            data: [
                { location: 'Golf Course Rd', price: '₹28,000 - ₹45,000+', rental: '$2,140 - $4,760' },
                { location: 'Golf Course Extn', price: '₹15,000 - ₹20,000', rental: '$950 - $1,547' },
                { location: 'Dwarka Expway', price: '₹9,000 - ₹13,000', rental: '$476 - $714' }
            ]
        },
        challenges: [
            'Severe Air Quality (AQI 300-400+) in winter.',
            'Requires Central Air Purification (TFA).',
            'NGT scrutiny on projects near Aravalli biodiversity zone.'
        ]
    },
    pune: {
        id: 'pune',
        name: 'Pune',
        tagline: 'The Balanced, Livable Alternative',
        overview: 'Offers a climate advantage and more relaxed pace than Mumbai/Gurgaon. Dual-economy city (Auto + IT) providing economic resilience.',
        microMarkets: [
            {
                name: 'West Pune (Baner)',
                type: 'Premium Residential',
                proximity: 'Near Hinjewadi IT Park.',
                connectivity: 'Metro Line 3 (2026) is a major catalyst.',
                vibe: 'High Street retail, cafes, seamless access to Mumbai Expressway.'
            },
            {
                name: 'East Pune (Kharadi)',
                type: 'EON Free Zone Hub',
                proximity: 'Barclays, Credit Suisse, UBS.',
                connectivity: 'Well-planned wide roads.',
                vibe: 'Preferred by finance professionals near airport.'
            }
        ],
        pricing: {
            currency: 'INR/sq ft',
            data: [
                { location: 'Baner', price: '₹9,500 - ₹13,500', rental: 'Premium/Stable' },
                { location: 'Hinjewadi', price: '₹6,800 - ₹8,800', rental: 'Value/High Demand' },
                { location: 'Kharadi', price: '₹9,000 - ₹12,500', rental: 'Commercial Hub' }
            ]
        },
        challenges: [
            'Water scarcity in Baner/Balewadi (tanker reliance).',
            'Demolition of illegal structures in amenity spaces.'
        ]
    },
    noida: {
        id: 'noida',
        name: 'Noida',
        tagline: 'Infrastructure First, Occupancy Second',
        overview: 'Distinguishes itself with superior master planning—wide roads and green belts. Appeals to those prioritizing infrastructure over corporate density.',
        microMarkets: [
            {
                name: 'Sector 62',
                type: 'IT Core',
                proximity: 'Institutional area.',
                connectivity: 'Blue Line Metro.',
                vibe: 'Functional, busy, older stock.'
            },
            {
                name: 'Sector 150',
                type: 'The Growth Corridor',
                proximity: 'Noida-Gr. Noida Expressway.',
                connectivity: 'Near upcoming Jewar Airport.',
                vibe: 'Greenest sector, low density, sports amenities.'
            }
        ],
        pricing: {
            currency: 'INR/sq ft',
            data: [
                { location: 'Sector 62', price: '₹9,500 - ₹12,500', rental: 'Employment Hub' },
                { location: 'Sector 150', price: '₹11,000 - ₹15,000', rental: 'Luxury/Sports' },
                { location: 'Sec 137', price: '₹8,500 - ₹11,500', rental: 'Metro Connectivity' }
            ]
        },
        challenges: [
            'Legacy of stalled projects (check builder reputation).',
            'Leasehold land (transfer charges apply).'
        ]
    },
    chennai: {
        id: 'chennai',
        name: 'Chennai',
        tagline: 'The Conservative Growth Engine',
        overview: 'OMR is the dedicated IT Highway. Market is less speculative and more end-user driven offering stability.',
        microMarkets: [
            {
                name: 'OMR & Thoraipakkam',
                type: 'The IT Highway',
                proximity: 'TIDEL Park, SIPCOT, TCS/Infosys.',
                connectivity: 'Metro Phase 2 construction ongoing.',
                vibe: 'End-user driven, stable rentals.'
            }
        ],
        pricing: {
            currency: 'INR/sq ft',
            data: [
                { location: 'OMR/Thoraipakkam', price: '₹7,500 - ₹10,000', rental: '5-6% Yield' }
            ]
        },
        challenges: [
            'Water shortages despite desalination plants.',
            'Traffic snarls due to metro construction.'
        ]
    }
};

export const RELOCATION_LOGISTICS = {
    moving: {
        shipping: {
            cost: '$3,500 - $7,500 (40ft container)',
            tip: 'Ship electronics (TVs, Mixers) and sentimental items. Buy general furniture in India.'
        },
        furniture_rental: {
            providers: ['Furlenco', 'Rentomojo'],
            cost: '₹5,000 - ₹10,000/month for full 3BHK package.'
        }
    },
    banking: {
        accounts: [
            { type: 'NRE/NRO', action: 'Convert to Resident Savings upon return.' },
            { type: 'RFC (Resident Foreign Currency)', benefit: 'Hold USD/GBP tax-free while RNOR.' },
            { type: 'FD Arbitrage', rate: '6.5% - 7.1%', note: 'Nominal return. Real return minimal after inflation.' }
        ]
    },
    resources: {
        portals: ['NoBroker.in (No brokerage)', 'MagicBricks', '99acres'],
        agencies: [
            { city: 'Gurgaon', name: 'HighEndProp, Renteel' },
            { city: 'Pune', name: 'Property Dot Com, Prociti' },
            { city: 'Hyderabad', name: 'Real Estate Guru' }
        ]
    }
};
