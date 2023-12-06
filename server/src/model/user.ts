import mongoose, { Document, Schema } from "mongoose";

export interface Employee {
    id: string;
    name: string;
    jobTitle: string;
    email: string;
    phoneNumber: string;
    onboardingDate: Date;
    officeLocation: string;
    department: string;
    directManager: string;
}

export interface User extends Document {
    name: string;
    employees: Employee[];
}

const employeeSchema = new Schema<Employee>({
    id: String,
    name: String,
    jobTitle: String,
    email: String,
    phoneNumber: String,
    onboardingDate: Date,
    officeLocation: String,
    department: String,
    directManager: String,
});

const userSchema = new Schema<User>({
    name: String,
    employees: [employeeSchema],
});

export default mongoose.model<User>("User", userSchema);
