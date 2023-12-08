import { useEffect, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { OffBoardedEmployee, UserResponse } from "../types";
import { Container } from "@mui/material";

// interface Props {
//     data: OffBoardedEmployee[];
// }

const Table = () => {
    const [data, setData] = useState<OffBoardedEmployee[]>([]);
    useEffect(() => {
        let newData: string = localStorage.getItem("data") as string;
        if (!newData)
            setTimeout(() => {
                window.location.reload();
            }, 500);
        let jsonData = JSON.parse(newData) as UserResponse;
        if (jsonData.offBoardedEmployees.length > 0) setData(jsonData.offBoardedEmployees);
    }, []);
    const columns = useMemo<MRT_ColumnDef<OffBoardedEmployee>[]>(
        () => [
            {
                accessorKey: "id",
                header: "Employee Id",
                size: 150,
            },
            {
                accessorKey: "name",
                header: "Name",
                size: 150,
            },
            {
                accessorKey: "jobTitle",
                header: "Job Title",
                size: 200,
            },
            {
                accessorKey: "email",
                header: "Email",
                size: 150,
            },
            {
                accessorKey: "phoneNumber",
                header: "Phone Number",
                size: 150,
            },
            {
                accessorKey: "offboardingDate",
                header: "Offboarding Date",
                size: 150,
            },
            {
                accessorKey: "officeLocation",
                header: "Office Location",
                size: 150,
            },
            {
                accessorKey: "department",
                header: "Department",
                size: 150,
            },
            {
                accessorKey: "directManager",
                header: "DirectManager",
                size: 150,
            },
        ],
        []
    );
    const table = useMaterialReactTable({
        columns,
        data,
        enableFullScreenToggle: false,
    });

    return (
        <Container sx={{ marginTop: 5, marginBottom: 5 }}>
            <h3>OffBoared Employees</h3>
            <MaterialReactTable table={table} />
        </Container>
    );
};

export default Table;
