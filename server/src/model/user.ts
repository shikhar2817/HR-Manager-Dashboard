import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface Employee {
    id: string;
    name: string;
    jobTitle: string;
    email: string;
    phoneNumber: string;
    onboardingDate: string;
    officeLocation: string;
    department: string;
    directManager: string;
}

export interface OffBoardedEmployee {
    id: string;
    name: string;
    jobTitle: string;
    email: string;
    phoneNumber: string;
    offboardingDate: string;
    officeLocation: string;
    department: string;
    directManager: string;
}

export interface User extends Document {
    name: string;
    email: string;
    password: string;
    employees: Employee[];
    offBoardedEmployees: OffBoardedEmployee[];
}

const employeeSchema = new Schema<Employee>({
    id: String,
    name: String,
    jobTitle: String,
    email: String,
    phoneNumber: String,
    onboardingDate: String,
    officeLocation: String,
    department: String,
    directManager: String,
});

const offBoardedEmployeeSchema = new Schema<OffBoardedEmployee>({
    id: String,
    name: String,
    jobTitle: String,
    email: String,
    phoneNumber: String,
    offboardingDate: String,
    officeLocation: String,
    department: String,
    directManager: String,
});

const userSchema = new Schema<User>({
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    employees: [employeeSchema],
    offBoardedEmployees: [offBoardedEmployeeSchema],
});

userSchema.pre<User>("save", async function (next) {
    if (this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

export default mongoose.model<User>("User", userSchema);
