import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso, TableComponents } from "react-virtuoso";
import { Employee } from "../types";

interface ColumnData {
    dataKey: keyof Employee;
    label: string;
    width: number;
}

const aman: Employee = {
    id: 1233,
    name: "aman siingh",
    jobTitle: "SDE",
    email: "aman@gmail.com",
    phoneNumber: "9140269982",
    officeLocation: "banglore",
    department: "engineer",
    directManager: null,
};

const shikhar: Employee = {
    id: 123,
    name: "shikhar siingh",
    jobTitle: "SDE",
    email: "shikhar@gmail.com",
    phoneNumber: "9140269982",
    officeLocation: "banglore",
    department: "engineer",
    directManager: "aman",
};

const sample: readonly Employee[] = [
    aman,
    shikhar,
    shikhar,
    shikhar,
    shikhar,
    aman,
    shikhar,
    shikhar,
    shikhar,
    shikhar,
];

function createData({
    id,
    name,
    jobTitle,
    email,
    phoneNumber,
    officeLocation,
    department,
    directManager,
}: Employee): Employee {
    return { id, name, jobTitle, email, phoneNumber, officeLocation, department, directManager };
}

const columns: ColumnData[] = [
    {
        width: 120,
        label: "Employ Id",
        dataKey: "id",
    },
    {
        width: 200,
        label: "Name",
        dataKey: "name",
    },
    {
        width: 120,
        label: "Job Title",
        dataKey: "jobTitle",
    },
    {
        width: 200,
        label: "Email",
        dataKey: "email",
    },
    {
        width: 120,
        label: "Phone",
        dataKey: "phoneNumber",
    },
    {
        width: 120,
        label: "Location",
        dataKey: "officeLocation",
    },
    {
        width: 120,
        label: "Department",
        dataKey: "department",
    },
    {
        width: 120,
        label: "Department",
        dataKey: "department",
    },
    {
        width: 200,
        label: "Direct Manager",
        dataKey: "directManager",
    },
];

const rows: Employee[] = Array.from({ length: 200 }, (_, index) => {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    return createData(randomSelection);
});

const VirtuosoTableComponents: TableComponents<Employee> = {
    Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
        <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => <Table {...props} sx={{ borderCollapse: "separate", tableLayout: "fixed" }} />,
    TableHead,
    TableRow: ({ item: _item, ...props }) => <TableRow key={_item.id} {...props} />,
    TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
    return (
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    variant="head"
                    align={"left"}
                    style={{ width: column.width }}
                    sx={{
                        backgroundColor: "background.paper",
                    }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );
}

function rowContent(_index: number, row: Employee) {
    return (
        <React.Fragment>
            {columns.map((column) => (
                <TableCell key={column.dataKey} align={"left"}>
                    {row[column.dataKey]}
                </TableCell>
            ))}
        </React.Fragment>
    );
}

export default function VirtualizedTable() {
    return (
        <Paper style={{ height: 500, width: "100%" }}>
            <TableVirtuoso
                data={rows}
                components={VirtuosoTableComponents}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={rowContent}
            />
        </Paper>
    );
}
