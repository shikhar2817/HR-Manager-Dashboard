import { Employee } from "./types";

export const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
];

export const allDepartments = [
    "Finance",
    "Computers and information technology",
    "Human Resources",
    "Sales",
    "Marketing",
    "Operations management",
    "Engineering",
    "Management",
    "Research and development",
    "Technology",
    "New product development",
    "Quality management",
    "Quality Assurance",
    "Product Management",
    "Business development",
    "Asset management",
];

export const allJobTitles = [
    // top leadership
    "CEO—Chief Executive Officer",
    "COO—Chief Operating Officer",
    "CFO—Chief Financial Officer",
    "CIO—Chief Information Officer",
    "CTO—Chief Technology Officer",
    "CMO—Chief Marketing Officer",
    "CHRO—Chief Human Resources Officer",
    "CDO—Chief Data Officer",
    "CPO—Chief Product Officer",
    "CCO—Chief Customer Officer",
    // leadership
    "Team Leader",
    "Manager",
    "Assistant Manager",
    "Executive",
    "Director",
    "Coordinator",
    "Administrator",
    "Controller",
    "Officer",
    "Organizer",
    "Supervisor",
    "Superintendent",
    "Head",
    "Overseer",
    "Chief",
    "Foreman",
    "Controller",
    "Principal",
    "President",
    "Lead",
    // IT
    "Computer Scientist",
    "IT Professional",
    "UX  Designer & UI Developer",
    "SQL Developer",
    "Web Designer",
    "Web Developer",
    "Help Desk Worker/Desktop Support",
    "Software Engineer",
    "Data Entry",
    "DevOps Engineer",
    "Computer Programmer",
    "Network Administrator",
    "Information Security Analyst",
    "Artificial Intelligence Engineer",
    "Cloud Architect",
    "IT Manager",
    "Technical Specialist",
    "Application Developer",
    // Sales
    "Sales Associate",
    "Sales Representative",
    "Sales Manager",
    "Retail Worker",
    "Store Manager",
    "Sales Representative",
    "Sales Manager",
    "Real Estate Broker",
    "Sales Associate",
    "Cashier",
    "Store Manager",
    "Account Executive",
    "Account Manager",
    "Area Sales Manager",
    "Direct Salesperson",
    "Director of Inside Sales",
    "Outside Sales Manager",
    "Sales Analyst",
    "Market Development Manager",
    "B2B Sales Specialist",
    "Sales Engineer",
    "Merchandising Associate",
    // Customer service
    "Virtual Assistant",
    "Customer Service",
    "Customer Support",
    "Concierge",
    "Help Desk",
    "Customer Service Manager",
    "Technical Support Specialist",
    "Account Representative",
    "Client Service Specialist",
    "Customer Care Associate",
    // Finance and Accounting
    "Credit Authorizer",
    "Benefits Manager",
    "Credit Counselor",
    "Accountant",
    "Bookkeeper",
    "Accounting Analyst",
    "Accounting Director",
    "Accounts Payable/Receivable Clerk",
    "Auditor",
    "Budget Analyst",
    "Controller",
    "Financial Analyst",
    "Finance Manager",
    "Economist",
    "Payroll Manager",
    "Payroll Clerk",
    "Financial Planner",
    "Financial Services Representative",
    "Finance Director",
    "Commercial Loan Officer",
    // Engineering
    "Engineer",
    "Mechanical Engineer",
    "Civil Engineer",
    "Electrical Engineer",
    "Assistant Engineer",
    "Chemical Engineer",
    "Chief Engineer",
    "Drafter",
    "Engineering Technician",
    "Geological Engineer",
    "Biological Engineer",
    "Maintenance Engineer",
    "Mining Engineer",
    "Nuclear Engineer",
    "Petroleum Engineer",
    "Plant Engineer",
    "Production Engineer",
    "Quality Engineer",
    "Safety Engineer",
    "Sales Engineer",
    // Healthcare
    "Nurse",
    "Travel Nurse",
    "Nurse Practitioner",
    "Doctor",
    "Caregiver",
    "CNA",
    "Physical Therapist",
    "Pharmacist",
    "Pharmacy Assistant",
    "Medical Administrator",
    "Medical Laboratory Tech",
    "Physical Therapy Assistant",
    "Massage Therapy",
    "Dental Hygienist",
    "Orderly",
    "Personal Trainer",
    "Massage Therapy",
    "Medical Laboratory Tech",
    "Phlebotomist",
    "Medical Transcriptionist",
    "Telework Nurse/Doctor",
    "Reiki Practitioner",
    // Legal
    "Paralegal",
    "Lawyer / Advocate",
    "Litigation executive",
    "Counsel",
    "Solicitor",
    "Barrister",
    "Judge",
    "Chartered legal executive",
    // Hospitality
    "Housekeeper",
    "Flight Attendant",
    "Travel Agent",
    "Hotel Front Door Greeter",
    "Bellhop",
    "Cruise Director",
    "Entertainment Specialist",
    "Hotel Manager",
    "Front Desk Associate",
    "Front Desk Manager",
    "Concierge",
    "Group Sales",
    "Event Planner",
    "Porter",
    "Spa Manager",
    "Wedding Coordinator",
    "Cruise Ship Attendant",
    "Casino Host",
    "Hotel Receptionist",
    "Reservationist",
    "Events Manager",
    "Meeting Planner",
    "Lodging Manager",
    "Director of Maintenance",
    "Valet",
    // Food service
    "Waiter/Waitress",
    "Server",
    "Chef",
    "Fast Food Worker",
    "Barista",
    "Line Cook",
    "Cafeteria Worker",
    "Restaurant Manager",
    "Wait Staff Manager",
    "Bus Person",
    "Restaurant Chain Executive",
    // Cosmetology
    "Beautician",
    "Hair Stylist",
    "Nail Technician",
    "Cosmetologist",
    "Salon Manager",
    "Makeup Artist",
    "Esthetician",
    "Skin Care Specialist",
    "Manicurist",
    "Barber",
];

export const fakeData: Employee[] = [
    {
        id: "0bdee2d8-f11e-4b29-abce-3cc17ff0a595",
        name: "Selig Deny",
        jobTitle: "Director",
        email: "crisman0@army.mil",
        phoneNumber: "306-543-0504",
        onboardingDate: "12/09/2023",
        officeLocation: "Andhra Pradesh",
        department: "Asset management",
        directManager: "Cacilie Risman",
    },
    {
        id: "2ecb887e-a50e-47e3-a5d5-e88d906eb089",
        name: "Madelle Britton",
        jobTitle: "Organizer",
        email: "swolfenden1@moonfruit.com",
        phoneNumber: "199-605-1989",
        onboardingDate: "04/10/2023",
        officeLocation: "Assam",
        department: "Asset management",
        directManager: "Sargent Wolfenden",
    },
    {
        id: "5ff96272-2260-4f8d-9d79-49a95a58646a",
        name: "Dorene Dureden",
        jobTitle: "Team Leader",
        email: "aostler2@drupal.org",
        phoneNumber: "116-827-1471",
        onboardingDate: "13/07/2023",
        officeLocation: "Daman and Diu",
        department: "Quality management",
        directManager: "Adeline Ostler",
    },
    {
        id: "4e940cad-6e2d-44b3-959d-eba7515d1a3c",
        name: "Theodosia Hedon",
        jobTitle: "Controller",
        email: "bmcilhone3@cdc.gov",
        phoneNumber: "459-541-1636",
        onboardingDate: "17/02/2023",
        officeLocation: "Arunachal Pradesh",
        department: "Management",
        directManager: "Benedicta McIlhone",
    },
    {
        id: "4cd32001-7e91-4951-8e27-3012df03fcc6",
        name: "Cchaddie Diamant",
        jobTitle: "Principal",
        email: "adimitrov4@walmart.com",
        phoneNumber: "487-382-9476",
        onboardingDate: "14/11/2023",
        officeLocation: "Nagaland",
        department: "Research and development",
        directManager: "Aura Dimitrov",
    },
    {
        id: "d706b16f-88b5-4fec-b792-0c476e89f359",
        name: "Kinsley Sterman",
        jobTitle: "Manager",
        email: "mwinson5@bravesites.com",
        phoneNumber: "550-765-9652",
        onboardingDate: "28/04/2023",
        officeLocation: "Telangana",
        department: "Marketing",
        directManager: "Michel Winson",
    },
    {
        id: "f6f5b055-453b-41af-a278-7bcc753619e2",
        name: "Catarina Halcro",
        jobTitle: "Officer",
        email: "csinnat6@nba.com",
        phoneNumber: "294-643-0214",
        onboardingDate: "21/04/2023",
        officeLocation: "Assam",
        department: "Sales",
        directManager: "Conan Sinnat",
    },
    {
        id: "3f2a69bc-974f-455c-a451-9e801dffbacf",
        name: "Callida Goodbairn",
        jobTitle: "Assistant Manager",
        email: "mmcgavin7@oracle.com",
        phoneNumber: "640-966-2021",
        onboardingDate: "08/03/2023",
        officeLocation: "Jammu and Kashmir",
        department: "Quality management",
        directManager: "Maryanne McGavin",
    },
    {
        id: "e445bbd6-03fe-442a-acca-2e127e7fcbd4",
        name: "Cordula Arsmith",
        jobTitle: "Principal",
        email: "ncaven8@webmd.com",
        phoneNumber: "686-295-7033",
        onboardingDate: "10/04/2023",
        officeLocation: "Arunachal Pradesh",
        department: "Computers and information technology",
        directManager: "Nathalia Caven",
    },
    {
        id: "4338c02f-b1b6-42fa-b2cd-0741d2489c25",
        name: "Maximilianus Tschursch",
        jobTitle: "Manager",
        email: "gcobbing9@w3.org",
        phoneNumber: "318-582-2640",
        onboardingDate: "11/10/2023",
        officeLocation: "Gujarat",
        department: "Computers and information technology",
        directManager: "Gwyneth Cobbing",
    },
    {
        id: "c75f6fbe-3599-4cee-bdf5-914b4ec12e08",
        name: "Anitra Lujan",
        jobTitle: "Controller",
        email: "nnavaroa@latimes.com",
        phoneNumber: "505-845-9209",
        onboardingDate: "27/09/2023",
        officeLocation: "Mizoram",
        department: "Quality Assurance",
        directManager: "Nester Navaro",
    },
    {
        id: "642fec4a-d7a5-4881-99b4-b1e548a63a37",
        name: "Caldwell Philott",
        jobTitle: "Team Leader",
        email: "sperkinsb@hatena.ne.jp",
        phoneNumber: "927-467-7266",
        onboardingDate: "09/04/2023",
        officeLocation: "Meghalaya",
        department: "Product Management",
        directManager: "Sandro Perkins",
    },
    {
        id: "f566de45-b73e-4ebb-a47d-bcf80bf5d962",
        name: "Sheilah Abrami",
        jobTitle: "Executive",
        email: "aeverc@nymag.com",
        phoneNumber: "955-819-5782",
        onboardingDate: "28/02/2023",
        officeLocation: "Haryana",
        department: "Asset management",
        directManager: "Andie Ever",
    },
    {
        id: "8f2008c7-6635-4c6f-8ea8-ba55907bbab1",
        name: "Bud Carmen",
        jobTitle: "Executive",
        email: "lduried@surveymonkey.com",
        phoneNumber: "381-720-1189",
        onboardingDate: "05/08/2023",
        officeLocation: "Chhattisgarh",
        department: "Quality Assurance",
        directManager: "Lynnell Durie",
    },
    {
        id: "5a1868ef-aefd-43c7-adac-af7c9ded5ce3",
        name: "Dre Mioni",
        jobTitle: "Principal",
        email: "tgrinhame@wikia.com",
        phoneNumber: "993-522-9442",
        onboardingDate: "29/04/2023",
        officeLocation: "Mizoram",
        department: "Asset management",
        directManager: "Trish Grinham",
    },
    {
        id: "5162af56-18f2-41b0-afab-aaf6b10f425f",
        name: "Kendell Scruton",
        jobTitle: "Head",
        email: "bgravef@icio.us",
        phoneNumber: "920-377-4796",
        onboardingDate: "11/03/2023",
        officeLocation: "Tamil Nadu",
        department: "Management",
        directManager: "Bobina Grave",
    },
    {
        id: "b56ae3c3-3e00-45e8-9a5c-b13414945626",
        name: "Brunhilde Teape",
        jobTitle: "Executive",
        email: "uglaveg@tinyurl.com",
        phoneNumber: "484-868-2927",
        onboardingDate: "21/09/2023",
        officeLocation: "Chandigarh",
        department: "New product development",
        directManager: "Ugo Glave",
    },
    {
        id: "a24fc3db-91ca-49bd-aea2-40f2054debb2",
        name: "Tudor Klemmt",
        jobTitle: "Chief",
        email: "lmoriartyh@businessinsider.com",
        phoneNumber: "315-308-2974",
        onboardingDate: "19/02/2023",
        officeLocation: "Andaman and Nicobar Islands",
        department: "Business development",
        directManager: "Lacee Moriarty",
    },
    {
        id: "0adf256a-a8bd-4256-ad5b-e9639b915744",
        name: "Edouard Yeo",
        jobTitle: "Head",
        email: "ncleynei@cnbc.com",
        phoneNumber: "239-629-5187",
        onboardingDate: "15/10/2023",
        officeLocation: "Lakshadweep",
        department: "Management",
        directManager: "Natty Cleyne",
    },
    {
        id: "b6a02d2d-0a37-423d-8672-95a7568ec775",
        name: "Jorie Filoniere",
        jobTitle: "Foreman",
        email: "gdartej@delicious.com",
        phoneNumber: "369-747-8896",
        onboardingDate: "27/01/2023",
        officeLocation: "Odisha",
        department: "Human Resources",
        directManager: "Gregory Darte",
    },
];
