export type Employee = {
    id: number;
    name: string;
    jobTitle: string;
    email: string;
    phoneNumber: string;
    officeLocation: string;
    department: string;
    directManager: string | null;
};