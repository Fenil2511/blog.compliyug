export type Category = 'DPDP Core' | 'Sectors' | 'Tools' | 'News';
export type Sector = 'Healthcare' | 'BFSI' | 'Ed-Tech' | 'E-commerce' | 'None';

export interface Article {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    summary: string;
    category: Category;
    sector: Sector;
    date: string;
    readTime: string;
    image: string;
    author: string;
    featured?: boolean;
    downloadCTA?: {
        label: string;
        documentTitle: string;
        webhookUrl: string;
    };
    keyTakeaways: string[];
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
        summary: 'A deep-dive into how BreachBlitz automates the Rule 7(2)(b) compliance workflow, turning a chaotic breach response into a structured, board-ready submission within 72 hours.',
        category: 'Tools',
        sector: 'None',
        date: '2026-02-15',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
        author: 'CompliYUG Research',
        featured: true,
        keyTakeaways: [
            'Rule 7(2)(b) requires breach notification to the DPB within 72 hours of awareness.',
            'Automated triage reduces manual effort by up to 85% during incident response.',
            'BreachBlitz generates submission-ready dossiers aligned with DPB format requirements.',
            'Penalties for non-reporting can reach ₹250 crore under the DPDP Act 2023.',
            'Real-time log integration enables proactive breach detection before escalation.',
        ],
        content: {
            intro: 'The Digital Personal Data Protection (DPDP) Act 2023 introduces stringent timelines for data breach reporting. Rule 7(2)(b) specifically mandates a 72-hour window for informing the Data Protection Board (DPB) and affected individuals.',
            sections: [
                {
                    title: 'The Critical 72-Hour Window',
                    body: 'Under Rule 7(2)(b), the clock starts the moment a Data Fiduciary becomes aware of a personal data breach. This requires immediate triage and automated reporting mechanisms to ensure compliance and avoid penalties of up to ₹250 crore. Organizations without pre-built workflows will inevitably breach the deadline due to the complexity of incident response coordination across legal, IT, and leadership teams.'
                },
                {
                    title: 'Automating with BreachBlitz',
                    body: 'BreachBlitz is designed to automate the generation of Rule 7(2)(b) reports. By integrating with your existing security logs — SIEMs, DLP systems, and IAM platforms — it triages incidents in real-time and prepares submission-ready dossiers formatted to DPB specifications. The engine also notifies affected data principals automatically, fulfilling the dual-notification requirement in a single workflow.'
                },
                {
                    title: 'Governance for the Digital YUG',
                    body: 'Strategic insights on DPDP Act 2023 compliance, automated data breach reporting, and sectoral governance frameworks are essential for modern Data Fiduciaries. Implementing real-time protection is no longer optional; it is the cornerstone of trust in the Digital YUG. Organizations that invest in compliance infrastructure today build a verifiable trust moat against regulatory risk tomorrow.'
                }
            ],
            conclusion: 'Compliance is no longer a choice but a tactical necessity. Tools like BreachBlitz transform 72-hour panic into a structured, defensible governance process. Every CISO who has navigated a breach without automation knows the cost — both in penalties and in reputation.'
        }
    },
    {
        id: '2',
        slug: 'healthcare-dpdp-compliance-checklist',
        title: 'Healthcare DPDP Compliance Checklist',
        excerpt: 'A strategic breakdown for hospital CISOs adapting to the new DPDP Rules 2025 and NABH requirements.',
        summary: 'Healthcare organizations face the toughest DPDP compliance burden due to sensitive health data. This checklist maps DPDP obligations to NABH standards, giving hospital CISOs a unified framework.',
        category: 'Sectors',
        sector: 'Healthcare',
        date: '2026-02-10',
        readTime: '12 min read',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80',
        author: 'CompliYUG Research',
        keyTakeaways: [
            'Patient health records (PHR) fall under "sensitive personal data" requiring elevated consent protocols.',
            'NABH accreditation and DPDP compliance share significant overlap in data governance requirements.',
            'Hospitals must maintain a Data Privacy Officer (DPO) under the new DPDP framework.',
            'Telemedicine platforms face heightened scrutiny for cross-provider data sharing.',
            'Emergency medical data processing requires specific legal basis documentation.',
        ],
        content: {
            intro: 'Healthcare providers process the most sensitive personal data in the Digital YUG. The convergence of DPDP Act 2023 and NABH standards creates a unique compliance landscape for hospital CISOs, where patient safety and data safety intersect.',
            sections: [
                {
                    title: 'Mapping Sensitive Health Data',
                    body: 'The first step is identifying where patient health records (PHR) and diagnostic data are stored. Under DPDP, these are classified as personal data requiring high levels of protection and specific consent protocols. CISOs must conduct a data inventory exercise covering EMR systems, lab information systems, PACS (radiology), and any third-party health apps integrated with hospital systems.'
                },
                {
                    title: 'Addressing Rule 7(b) in Healthcare',
                    body: 'Breaches in healthcare often involve life-critical information. The 72-hour reporting requirement applies here with even greater scrutiny, requiring hospital emergency response teams to be data-ready. A breach involving patient diagnostic records, surgical histories, or prescription data demands immediate containment and a board-level escalation protocol.'
                }
            ],
            conclusion: 'For healthcare providers, DPDP compliance is an extension of patient care. Securing data is as vital as securing the operating theater. Hospitals that treat data governance as a clinical priority will be the ones that patients — and regulators — continue to trust.'
        }
    },
    {
        id: '3',
        slug: 'bfsi-readying-for-penalties',
        title: 'BFSI: Readying for ₹250cr Penalties',
        excerpt: 'Strategic risk assessment for banking and financial institutions under the Digital Personal Data Protection Act.',
        summary: 'The BFSI sector faces the highest financial exposure under DPDP Act 2023. This strategic risk assessment outlines the key obligations for banks, NBFCs, and insurance companies.',
        category: 'Sectors',
        sector: 'BFSI',
        date: '2026-02-05',
        readTime: '10 min read',
        image: 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80',
        author: 'CompliYUG Research',
        keyTakeaways: [
            'BFSI institutions are classified as Significant Data Fiduciaries (SDF) requiring enhanced obligations.',
            'Cross-border financial data transfers now require explicit DPB approval under Clause 16.',
            'KYC data retained post account closure must be purged per DPDP data minimization principles.',
            'Insurance companies must revisit consent for third-party health data sharing.',
            'Credit bureaus face specific obligations around automated decision-making transparency.',
        ],
        content: {
            intro: 'The banking and financial services sector is under the highest scrutiny for DPDP Act 2023 compliance. With potential penalties reaching ₹250 crore, the cost of non-compliance is existential. Banks, NBFCs, and insurance firms must overhaul their data governance frameworks immediately.',
            sections: [
                {
                    title: 'Cross-Border Data Flows',
                    body: 'BFSI institutions frequently engage in international data transfers for correspondent banking, cross-border lending, and global insurance underwriting. Navigating the DPDP rules on cross-border flows is critical for maintaining global operations while staying localized where required. The Act empowers the Central Government to restrict data transfers to specific countries, adding geopolitical complexity to BFSI compliance planning.'
                },
                {
                    title: 'Fiduciary Responsibilities',
                    body: 'Banks are the ultimate Data Fiduciaries in India. The Act defines their responsibilities for ensuring accuracy, completeness, and protection of financial data throughout its entire lifecycle. This includes not just transactional data, but behavioral data used for credit scoring, fraud detection, and personalized financial product recommendations.'
                }
            ],
            conclusion: 'BFSI compliance is a trust-building exercise. In the Digital YUG, security is the benchmark of financial integrity. Banks that align DPDP compliance with their existing RBI cybersecurity frameworks will find the transition more manageable — and more strategically advantageous.'
        }
    },
    {
        id: '4',
        slug: 'edtech-student-data-dpdp-obligations',
        title: 'Ed-Tech & Student Data: DPDP Obligations',
        excerpt: 'How EdTech platforms must redesign their data collection, consent, and retention practices under DPDP Act 2023, especially for minors.',
        summary: 'EdTech platforms face uniquely stringent DPDP obligations for processing children\'s data. This guide covers verifiable parental consent, data minimization, and the impending DPDP Rules for online education.',
        category: 'Sectors',
        sector: 'Ed-Tech',
        date: '2026-01-28',
        readTime: '9 min read',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
        author: 'CompliYUG Research',
        keyTakeaways: [
            'Processing data of children under 18 requires verifiable parental consent under DPDP.',
            'EdTech platforms cannot serve behavioral advertising to minors under any circumstances.',
            'Learning management systems (LMS) must implement data minimization at the design level.',
            'Student assessment data stored by third-party proctoring tools must be DPDP-compliant.',
            'Post-enrollment data retention periods must be defined and communicated in privacy notices.',
        ],
        content: {
            intro: 'EdTech platforms collect an extraordinary volume of personal data — from academic performance and biometrics (for remote proctoring) to behavioral patterns and financial information for EMI-based courses. Under DPDP Act 2023, platforms targeting students face the strictest obligations, particularly around children\'s data.',
            sections: [
                {
                    title: 'Children\'s Data: The Highest Standard',
                    body: 'The DPDP Act defines a child as any individual under 18 years of age. Any EdTech platform with a K-12 product or any product used by minors must implement verifiable parental consent mechanisms. This goes beyond a simple checkbox — platforms need age-verification systems and documented consent records. The Act prohibits processing children\'s data for behavioral advertising or tracking purposes under any circumstance.'
                },
                {
                    title: 'Proctoring Tools and Third-Party Risk',
                    body: 'Online proctoring platforms collect video, audio, keystroke, and facial recognition data. Under DPDP, EdTech companies that integrate third-party proctoring tools remain the Data Fiduciary — meaning they are responsible for ensuring the proctoring vendor\'s compliance as a Data Processor. This requires comprehensive Data Processing Agreements (DPAs) that align with DPDP obligations.'
                }
            ],
            conclusion: 'For EdTech, DPDP compliance is not a legal checkbox. It is the foundation for building student and parent trust. Platforms that design compliance into their product roadmap — not retrofit it — will emerge as the trusted leaders of India\'s learning revolution.'
        }
    },
    {
        id: '5',
        slug: 'ecommerce-consent-management-dpdp',
        title: 'E-commerce Consent Management Under DPDP',
        excerpt: 'Why India\'s top e-commerce platforms must overhaul their consent architecture before DPDP enforcement begins.',
        summary: 'E-commerce platforms rely on vast personal data ecosystems for personalization, logistics, and marketing. DPDP Act 2023 mandates a complete overhaul of how consent is collected, managed, and revoked.',
        category: 'Sectors',
        sector: 'E-commerce',
        date: '2026-01-20',
        readTime: '11 min read',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
        author: 'CompliYUG Research',
        keyTakeaways: [
            'Pre-ticked consent boxes and bundled consent are explicitly prohibited under DPDP.',
            'Users must be able to withdraw consent as easily as they gave it — one-click revocation required.',
            'Personalization engines using purchase history require explicit and specific consent.',
            'Logistics partners sharing delivery data must be covered by Data Processor agreements.',
            'Dark patterns in consent UX (e.g., confusing opt-out flows) violate DPDP principles.',
        ],
        content: {
            intro: 'India\'s e-commerce sector processes hundreds of millions of personal data points daily — purchase histories, location data, payment information, browsing behavior, and demographic profiles. The DPDP Act 2023 fundamentally changes the consent landscape, requiring platforms to completely redesign how they collect, manage, and honor user data choices.',
            sections: [
                {
                    title: 'The Consent Overhaul',
                    body: 'Under DPDP, consent must be free, specific, informed, unconditional, and unambiguous. This shatters the current industry practice of bundled consent — where a single checkbox covers analytics, marketing, and personalization. E-commerce platforms must now implement granular consent management systems (CMS) that allow users to selectively consent to specific processing activities. Once consent is withdrawn, all downstream processing must cease within a defined timeframe.'
                },
                {
                    title: 'The Personalization Paradox',
                    body: 'E-commerce platforms derive significant revenue from personalized recommendations powered by purchase history, wish-list data, and cross-browse behavior. Under DPDP, this type of processing requires explicit consent that is specific to "personalization" as a purpose. This creates a business challenge: how do you maintain conversion rates while giving users genuine granular choice? The answer lies in transparent value exchange — showing users exactly what they get in return for sharing their data.'
                }
            ],
            conclusion: 'E-commerce platforms that invest in robust consent infrastructure now will be positioned as the privacy-forward brands that Indian consumers choose to trust. DPDP compliance, done right, is not just a legal obligation — it is a competitive advantage in India\'s privacy-conscious digital economy.'
        }
    },
    {
        id: '6',
        slug: 'bfsi-vendor-compliance-checklist-dpdp-2023',
        title: 'Vendor Compliance Checklist for DPDP Act, 2023 — A Banking Sector Guide',
        excerpt: 'Under Section 8(1) of the DPDP Act, 2023, banks remain fully liable for every third-party vendor\'s data processing. Here is the complete checklist of documents, evidence, and contractual artifacts your bank must obtain — or face penalties up to ₹250 crore.',
        summary: 'Banks as Data Fiduciaries cannot outsource their DPDP liability. This authoritative checklist maps all six categories of vendor due-diligence obligations under the DPDP Act, 2023 — from Data Processing Agreements and security safeguards, to forensic log retention, breach SLAs, data erasure workflows, and cross-border transfer controls.',
        category: 'Sectors',
        sector: 'BFSI',
        date: '2026-03-26',
        readTime: '14 min read',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80',
        author: 'CompliYUG Research',
        featured: false,
        downloadCTA: {
            label: 'Download the Vendor Compliance Checklist — Free',
            documentTitle: 'DPDP Act 2023 — Vendor Compliance Checklist for Banks',
            webhookUrl: 'https://93c5242b901b.ngrok-free.app/webhook/send-pdf',
        },
        keyTakeaways: [
            'Under Section 8(1), the Bank as Data Fiduciary remains fully liable for any DPDP breach caused by a third-party vendor — irrespective of the vendor\'s own fault.',
            'A valid Data Processing Agreement (DPA) with explicit "reasonable security safeguards" clauses is not optional — it is a statutory prerequisite for engaging any Data Processor.',
            'Rule 8(3) mandates that all processing logs, traffic data, and personal data records be retained by the Data Processor for a minimum of one year to enable investigation of unauthorized access.',
            'The Bank must obtain a breach notification SLA from every vendor guaranteeing notification within 12–24 hours — to meet the Bank\'s own 72-hour DPB reporting deadline.',
            'Banks must validate data erasure and destruction certificates from vendors whenever a data subject withdraws consent or the processing purpose is fulfilled.',
            'If a vendor stores data outside India, the Bank must obtain data flow maps and residency architecture documents to ensure no unauthorized cross-border transfer occurs.',
            'Maximum DPDP penalty for security failures is ₹250 crore — making vendor risk management a Board-level priority, not just a legal formality.',
            'Access Control Matrices and ISO/IEC 27001/27701 certifications are the minimum acceptable technical evidence from any vendor handling sensitive banking data.',
        ],
        content: {
            intro: 'Under Section 8(1) of the DPDP Act, 2023, the Bank — as a Data Fiduciary — remains fully and non-delegably responsible for compliance with the Act in respect of any processing undertaken on its behalf by a third-party vendor (Data Processor). This is not a technicality. It means that if your fintech vendor, cloud hosting partner, or analytics processor breaches the DPDP Act, the ₹250 crore penalty lands on the Bank\'s balance sheet, not the vendor\'s. This checklist is your operational shield.',
            sections: [
                {
                    title: '1. Contractual & Legal Artifacts',
                    body: 'The DPDP Act strictly mandates that a Data Fiduciary may engage a Data Processor only under a "valid contract". This is non-negotiable. The Bank must obtain and validate: (a) A Valid Data Processing Agreement (DPA) — a signed, legally binding contract explicitly governing how the vendor processes the Bank\'s customer data, the categories of data involved, the permissible purposes, sub-processing restrictions, and termination obligations. (b) Mandatory Security Clauses — the contract must contain explicit provisions obligating the Data Processor to implement "reasonable security safeguards" commensurate with the sensitivity of the data. Vague language is legally insufficient. (c) Indemnity, Audit Rights, and Liability Frameworks — while the Act holds the Bank liable, standard compliance practice dictates that the DPA includes contractual indemnification from the vendor for breaches caused by vendor negligence, along with unilateral audit rights that allow the Bank to inspect vendor compliance at any time without prior notice restrictions. Without these artifacts, the Bank has no legal or contractual recourse if the vendor causes a data breach that results in regulatory penalty.'
                },
                {
                    title: '2. Security Safeguards & Technical Evidence',
                    body: 'The Bank must obtain documented technical evidence — not just vendor representations — that the following security safeguards are operational: (a) Encryption and Masking Policies: Artifacts proving the vendor implements data security measures including encryption at rest and in transit, data obfuscation, masking of sensitive fields (such as Aadhaar numbers, account IDs, or transaction amounts), and the use of virtual tokens mapped to personal data. (b) Access Control Matrices: Formal documentation of Role-Based Access Control (RBAC) or Attribute-Based Access Control (ABAC) frameworks restricting which personnel and systems can access the Bank\'s data within the vendor\'s environment. (c) Technical and Organisational Measures (TOMs): Third-party audit reports, ISO/IEC 27001 (Information Security) or ISO/IEC 27701 (Privacy Information Management) certifications, or SOC 2 Type II reports that independently validate the vendor\'s security posture. Self-attestations are not sufficient. (d) Business Continuity and Data Backup Plans: Written policies with RPO (Recovery Point Objective) and RTO (Recovery Time Objective) commitments, outlining how the vendor will ensure continued processing and data recovery if the confidentiality, integrity, or availability of the Bank\'s data is compromised by a disaster, cyberattack, or infrastructure failure.'
                },
                {
                    title: '3. Forensic Logging & Log Retention Evidence',
                    body: 'Rule 8(3) of the DPDP Rules creates one of the most technically specific compliance obligations in the Act. The Bank must ensure that the Data Processor retains personal data, associated traffic data, and all logs of the processing activity for a minimum period of one year from the date of processing — specifically to enable the detection and forensic investigation of unauthorized access events. Rule 8(3) uses the explicit illustration of a "cloud service provider" as the Data Processor, making clear that this obligation is squarely aimed at the Bank\'s cloud vendors, SaaS platforms, and managed service providers. The Bank must obtain: (a) A written Log Retention Policy from the vendor confirming 1-year minimum retention with tamper-evident log storage. (b) Technical Architecture Documents showing how logs are stored, in what format, with what access controls, and how they can be extracted for forensic investigation or regulatory production. (c) Cloud Hosting Retention Proof: If the vendor uses sub-processors for cloud storage (e.g., AWS, Azure, GCP), the Bank must confirm that the log retention chain flows through to those sub-processors and that no logs are auto-deleted before the mandatory one-year period expires. This is non-trivially enforced in practice — most cloud providers have default log rotation policies of 30–90 days. The Bank must ensure these defaults are overridden contractually and technically.'
                },
                {
                    title: '4. Incident Management & Breach Reporting Protocols',
                    body: 'The Bank is legally mandated to notify the Data Protection Board (DPB) of any personal data breach within 72 hours of becoming aware of it — including detailed forensic facts about the nature, extent, timing, and location of the breach, as well as remedial measures taken. This 72-hour clock is absolute. If a vendor breach occurs on Day 1 and the vendor notifies the Bank only on Day 3, the Bank\'s 72-hour window has effectively been consumed by vendor notification delay. To prevent this, the Bank must obtain: (a) Breach Notification SLAs: A contractually binding Service Level Agreement with the vendor guaranteeing notification to the Bank within 12–24 hours of the vendor discovering or suspecting a data breach — not after internal vendor investigation is complete. (b) Incident Investigation Workflows: Documented incident response runbooks showing how the vendor will provide the Bank with: the broad facts and timeline of the breach event; the nature and scope of personal data affected; the location and root cause of the breach; the containment and remedial measures taken or planned. Without this structured information, the Bank cannot populate its mandatory DPB notification with the required forensic detail — making the Bank non-compliant even if it files within 72 hours.'
                },
                {
                    title: '5. Data Lifecycle, Erasure & Rights Management',
                    body: 'The DPDP Act creates active obligations around the entire data lifecycle — not just collection and processing. The Bank must validate three critical vendor capabilities: (a) Data Erasure Workflows and Destruction Certificates: The Bank is legally required to cause its Data Processor to erase any personal data when the specified purpose is no longer being served (i.e., purpose limitation) or when the data subject withdraws consent. The Bank must validate the vendor\'s automated data deletion pipelines and require formal Certificates of Destruction as auditable evidence for each erasure event. Manual deletion logs or verbal assurances are not acceptable. (b) Data Correction Syncing Mechanisms: When a customer exercises their right to correction or updation of inaccurate or misleading data, the Bank must ensure that correction propagates downstream to every vendor that holds a copy of that data. The Bank must verify that the vendor has APIs, webhooks, or operational protocols to immediately process data correction instructions from the Bank without delay. (c) Vendor Identity Documentation: Data Principals have a statutory right under the DPDP Act to request a summary of their personal data and identities of all Data Processors with whom their data has been shared. The Bank must therefore maintain verified corporate identity records (CIN, registered address, key personnel) for every active vendor — so it can produce this information to customers upon demand.'
                },
                {
                    title: '6. Cross-Border Data Transfer Controls (If Applicable)',
                    body: 'If the vendor processes, stores, replicates, or routes the Bank\'s customer data outside India — even transiently, as in the case of CDN caching or disaster recovery replication — the Bank faces additional obligations under the DPDP Act. The Central Government retains the power to issue general or special orders restricting the transfer of personal data to specific foreign states or territories. The Bank must obtain: (a) Data Flow and Residency Maps: Architectural and network flow diagrams showing where the Bank\'s data resides, where it transits, in which jurisdictions it is processed, and which sub-processors have access to it across borders. (b) Restrictive Transfer Compliance Confirmation: A vendor certification that their infrastructure does not route or store the Bank\'s data in any jurisdiction that is or may be restricted by the Central Government. This must be actively monitored — not just confirmed at onboarding — since government restriction orders may be issued at any time. (c) Sub-Processor Chain Documentation: If the vendor uses a global cloud provider with multi-region architecture, the Bank must trace the full sub-processor chain and confirm data residency at each node.'
                },
                {
                    title: 'Complete Document Checklist: What the Bank Must Obtain',
                    body: 'The following is the definitive list of documents and evidence the Bank must formally obtain, review, and retain in its vendor compliance register: 1. Valid Contract (Data Processing Agreement): A formal, legally binding contract under which the vendor is engaged to process personal data on the Bank\'s behalf. 2. Contractual Security Safeguard Provisions: Specific, explicit clauses within the contract requiring the vendor to implement "reasonable security safeguards" — not generic boilerplate. 3. Evidence of Technical Security Measures: Documentation proving the vendor secures personal data through encryption, obfuscation, data masking, or virtualized token mapping. 4. Access Control Documentation: Evidence of the vendor\'s Role-Based Access Control or equivalent framework strictly governing access to the Bank\'s data. 5. Data Backup and Continuity Plans: Written plans with RPO/RTO commitments proving the vendor can recover the Bank\'s data in the event of a compromise to data availability or integrity. 6. One-Year Log Retention Proof: Architecture documents or technical evidence confirming all processing logs and traffic data are retained for a minimum of one year — commensurate with Rule 8(3). 7. Incident Management and Breach Notification Protocols: Documented SLAs guaranteeing the vendor will immediately provide detailed forensic facts to the Bank within 12–24 hours of any breach — enabling the Bank to meet its 72-hour DPB notification deadline. 8. Data Erasure Confirmations and Destruction Certificates: Formal, auditable proof that the vendor successfully deletes all personal data upon Bank instruction, with signed certificates of destruction for each erasure event.'
                }
            ],
            conclusion: 'Vendor risk management under the DPDP Act, 2023 is not a vendor\'s problem — it is the Bank\'s legal liability. Section 8(1) creates no carve-out for outsourced processing. Every rupee of the ₹250 crore maximum penalty for security failures is assessable against the Bank, regardless of which entity in the data processing chain actually caused the breach. The compliance posture demanded by the Act is clear: treat every Data Processor as an extension of your own data governance framework, and demand evidence — not promises.'
        }
    }
];
