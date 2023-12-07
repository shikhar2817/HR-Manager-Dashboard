// src/routes/user.ts
import express, { Request, Response } from "express";
import User, { Employee } from "../model/user";

const router = express.Router();

// Get all details of a user
router.get("/:userId", async (req: Request, res: Response) => {
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// Add employees to the user's account
router.post("/:userId/employees", async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const newEmployeeData: Employee = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Add the new employee to the user's employees array
        user.employees.push(newEmployeeData);

        // Save the updated user to the database
        await user.save();

        res.json(user);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// Update the user's employee data
router.put("/:userId/employees/:employeeId", async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const employeeId = req.params.employeeId;
    const updatedEmployeeData: Partial<Employee> = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const employeeIndex = user.employees.findIndex((emp) => emp.id.toString() === employeeId);

        if (employeeIndex === -1) {
            return res.status(404).json({ message: "Employee not found" });
        }

        // Update the employee data
        user.employees[employeeIndex] = { ...user.employees[employeeIndex], ...updatedEmployeeData };

        // Save the updated user to the database
        await user.save();

        res.json(user);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// Delete an employee from the user's account
router.delete("/:userId/employees/:employeeId", async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const employeeId = req.params.employeeId;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const employeeIndex = user.employees.findIndex((emp) => emp.id.toString() === employeeId);

        if (employeeIndex === -1) {
            return res.status(404).json({ message: "Employee not found" });
        }

        // Remove the employee from the user's employees array
        user.employees.splice(employeeIndex, 1);

        // Save the updated user to the database
        await user.save();

        res.json(user);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
