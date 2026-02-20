export type Category = 'DPDP Core' | 'Sectors' | 'Tools' | 'News';
export type Sector = 'Healthcare' | 'BFSI' | 'Ed-Tech' | 'E-commerce' | 'None';

export interface Article {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: Category;
    sector: Sector;
    date: string;
    readTime: string;
    image: string;
    author: string;
    featured?: boolean;
    content: {
        intro: string;
        sections: {
            title: string;
            body: string;
        }[];
        conclusion: string;
    };
}

export const CATEGORIES: Category[] = ['DPDP Core', 'Sectors', 'Tools', 'News'];
export const SECTORS: Sector[] = ['Healthcare', 'BFSI', 'Ed-Tech', 'E-commerce'];

export const ARTICLES: Article[] = [
    {
        id: '1',
        slug: 'dpdp-72-hour-reporting-guide',
        title: 'DPDP 72-Hour Reporting: BreachBlitz Guide',
        excerpt: 'Navigating the critical 72-hour window under Rule 7(2)(b) with the BreachBlitz automated reporting framework.',
        category: 'Tools',
        sector: 'None',
        date: '2026-02-15',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
        author: 'CompliYUG Research',
        featured: true,
        content: {
            intro: 'The Digital Personal Data Protection (DPDP) Act 2023 introduces stringent timelines for data breach reporting. Rule 7(2)(b) specifically mandates a 72-hour window for informing the Data Protection Board (DPB) and affected individuals.',
            sections: [
                {
                    title: 'The Critical 72-Hour Window',
                    body: 'Under Rule 7(2)(b), the clock starts the moment a Data Fiduciary becomes aware of a personal data breach. This requires immediate triage and automated reporting mechanisms to ensure compliance and avoid penalties of up to ₹250 crore.'
                },
                {
                    title: 'Automating with BreachBlitz',
                    body: 'BreachBlitz is designed to automate the generation of Rule 7(2)(b) reports. By integrating with your existing security logs, it triages incidents in real-time and prepares submission-ready dossiers.'
                },
                {
                    title: 'Governance for the Digital YUG',
                    body: 'Strategic insights on DPDP Act 2023 compliance, automated data breach reporting, and sectoral governance frameworks are essential for modern Data Fiduciaries. Implementing real-time protection is no longer optional; it is the cornerstone of trust in the Digital YUG.'
                }
            ],
            conclusion: 'Compliance is no longer a choice but a tactical necessity. Tools like BreachBlitz transform 72-hour panic into a structured, defensible governance process.'
        }
    },
    {
        id: '2',
        slug: 'healthcare-dpdp-compliance-checklist',
        title: 'Healthcare DPDP Compliance Checklist',
        excerpt: 'A strategic breakdown for hospital CISOs adapting to the new DPDP Rules 2025 and NABH requirements.',
        category: 'Sectors',
        sector: 'Healthcare',
        date: '2026-02-10',
        readTime: '12 min read',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80',
        author: 'CompliYUG Research',
        content: {
            intro: 'Healthcare providers process the most sensitive personal data in the Digital YUG. The convergence of DPDP Act 2023 and NABH standards creates a unique compliance landscape for hospital CISOs.',
            sections: [
                {
                    title: 'Mapping Sensitive Health Data',
                    body: 'The first step is identifying where patient health records (PHR) and diagnostic data are stored. Under DPDP, these are classified as personal data requiring high levels of protection and specific consent protocols.'
                },
                {
                    title: 'Addressing Rule 7(b) in Healthcare',
                    body: 'Breaches in healthcare often involve life-critical information. The 72-hour reporting requirement applies here with even greater scrutiny, requiring hospital emergency response teams to be data-ready.'
                }
            ],
            conclusion: 'For healthcare providers, DPDP compliance is an extension of patient care. Securing data is as vital as securing the operating theater.'
        }
    },
    {
        id: '3',
        slug: 'bfsi-readying-for-penalties',
        title: 'BFSI: Readying for ₹250cr Penalties',
        excerpt: 'Strategic risk assessment for banking and financial institutions under the Digital Personal Data Protection Act.',
        category: 'Sectors',
        sector: 'BFSI',
        date: '2026-02-05',
        readTime: '10 min read',
        image: 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80',
        author: 'CompliYUG Research',
        content: {
            intro: 'The banking and financial services sector is under the highest scrutiny for DPDP Act 2023 compliance. With potential penalties reaching ₹250 crore, the cost of non-compliance is existential.',
            sections: [
                {
                    title: 'Cross-Border Data Flows',
                    body: 'BFSI institutions frequently engage in international data transfers. Navigating the DPDP rules on cross-border flows is critical for maintaining global operations while staying localized where required.'
                },
                {
                    title: 'Fiduciary Responsibilities',
                    body: 'Banks are the ultimate Data Fiduciaries in India. The Act defines their responsibilities for ensuring accuracy, completeness, and protection of financial data throughout its entire lifecycle.'
                }
            ],
            conclusion: 'BFSI compliance is a trust-building exercise. In the Digital YUG, security is the benchmark of financial integrity.'
        }
    }
];
