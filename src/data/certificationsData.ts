export interface Certification {
  id: number;
  name: string;
  organization: string;
  issuedDate: string;
  credentialId?: string;
  credentialUrl?: string;
  orgLogo: string;
}

export interface Company {
  id: number;
  name: string;
  logo: string;
  certifications: Certification[];
}

export const companies: Company[] = [
  {
    id: 1,
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    certifications: [
      {
        id: 1,
        name: 'Google Cloud Professional Data Engineer',
        organization: 'Google',
        issuedDate: 'June 2023',
        credentialId: 'GCP-123456',
        credentialUrl: 'https://example.com/credential',
        orgLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
      },
      {
        id: 2,
        name: 'Google Professional UX Designer',
        organization: 'Google',
        issuedDate: 'March 2023',
        credentialId: 'GUX-789012',
        credentialUrl: 'https://example.com/credential',
        orgLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
      },
    ],
  },
  {
    id: 2,
    name: 'Microsoft',
    logo: 'src/Microsoft.svg',
    certifications: [
      {
        id: 3,
        name: 'Microsoft Certified: Azure Solutions Architect Expert',
        organization: 'Microsoft',
        issuedDate: 'January 2023',
        credentialId: 'MS-345678',
        credentialUrl: 'https://example.com/credential',
        orgLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg',
      },
    ],
  },
  {
    id: 3,
    name: 'AWS',
    logo: 'src/aws.svg',
    certifications: [
      {
        id: 4,
        name: 'AWS Certified Solutions Architect – Associate',
        organization: 'Amazon Web Services',
        issuedDate: 'November 2022',
        credentialId: 'AWS-901234',
        credentialUrl: 'https://example.com/credential',
        orgLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      },
      {
        id: 5,
        name: 'AWS Certified Developer – Associate',
        organization: 'Amazon Web Services',
        issuedDate: 'August 2022',
        credentialId: 'AWS-567890',
        credentialUrl: 'https://example.com/credential',
        orgLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      },
    ],
  },
  {
    id: 4,
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    certifications: [
      {
        id: 6,
        name: 'MongoDB Certified Developer Associate',
        organization: 'MongoDB',
        issuedDate: 'May 2022',
        credentialId: 'MDB-123456',
        credentialUrl: 'https://example.com/credential',
        orgLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
    ],
  },
  {
    id: 6,
    name: 'Meta',
    logo: 'src/Meta.svg',
    certifications: [
      {
        id: 8,
        name: 'Meta Front-End Developer Professional Certificate',
        organization: 'Meta',
        issuedDate: 'July 2022',
        credentialId: 'META-345678',
        credentialUrl: 'https://example.com/credential',
        orgLogo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/meta.svg',
      },
    ],
  },
];