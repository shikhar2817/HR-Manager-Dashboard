import { Employee, OffBoardedEmployee } from "./model/user";

export const generateOnboardingEmailBody = (username: string) => {
    return `<div>
                <p> Hi ${username}, </p>
                <p> You have been onboarded </p>
            </div>`;
};

export const generateOffboardingEmailBody = (username: string) => {
    return `<div>
                <p> Hi ${username}, </p>
                <p> You have been OffBoarded. Thanks for you contribution. </p>
            </div>`;
};

export const generateOffBoardedEmployeeDetails = (employee: Employee): OffBoardedEmployee => {
    let now = new Date();
    now.toLocaleDateString();
    let offBoardedEmployeeData: OffBoardedEmployee = {
        id: employee.id,
        name: employee.name,
        jobTitle: employee.jobTitle,
        email: employee.email,
        phoneNumber: employee.phoneNumber,
        offboardingDate: now.toLocaleDateString(),
        officeLocation: employee.officeLocation,
        department: employee.department,
        directManager: employee.directManager,
    };

    return offBoardedEmployeeData;
};
