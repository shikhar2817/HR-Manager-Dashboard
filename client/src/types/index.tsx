export type Employee = {
    id: string;
    name: string;
    jobTitle: string;
    email: string;
    phoneNumber: string;
    onboardingDate: string;
    officeLocation: string;
    department: string;
    directManager: string;
};

export interface AuthResponse {
    token: string;
    success?: boolean;
}

export interface UserResponse {
    name: string;
    email: string;
    employees: Employee[];
}

export interface SignUpForm {
    name: string;
    email: string;
    password: string;
}

export interface LoginUpForm {
    email: string;
    password: string;
}

export interface JwtPayload {
    userId: string;
    email: string;
}
