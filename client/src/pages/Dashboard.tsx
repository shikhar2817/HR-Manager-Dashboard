import { useEffect, useMemo, useState } from "react";
import {
    MRT_EditActionButtons,
    MaterialReactTable,
    // createRow,
    type MRT_ColumnDef,
    type MRT_Row,
    type MRT_TableOptions,
    useMaterialReactTable,
} from "material-react-table";
import { Box, Button, Container, DialogActions, DialogContent, DialogTitle, IconButton, Tooltip } from "@mui/material";
import { QueryClient, QueryClientProvider, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Employee } from "../types";
import { allDepartments, allJobTitles, fakeData, indianStates } from "../constants";
import { useNavigate } from "react-router-dom";
import { createUserEmployeeDetails, getUserDetails, updateUserEmployeeDetails } from "../actions/user";
import { v4 as uuidv4 } from "uuid";

const Dashboard = () => {
    const navigate = useNavigate();
    const [validationErrors, setValidationErrors] = useState<Record<string, string | undefined>>({});

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) navigate("/");
    }, []);

    const columns = useMemo<MRT_ColumnDef<Employee>[]>(
        () => [
            {
                accessorKey: "id",
                header: "Employ Id",
                enableEditing: false,
                size: 80,
            },
            {
                accessorKey: "name",
                header: "Name",
                muiEditTextFieldProps: {
                    type: "email",
                    required: true,
                    error: !!validationErrors?.name,
                    helperText: validationErrors?.name,
                    //remove any previous validation errors when employee focuses on the input
                    onFocus: () =>
                        setValidationErrors({
                            ...validationErrors,
                            name: undefined,
                        }),
                    //optionally add validation checking for onBlur or onChange
                },
            },
            {
                accessorKey: "jobTitle",
                header: "Job Title",
                editVariant: "select",
                editSelectOptions: allJobTitles,
                muiEditTextFieldProps: {
                    select: true,
                    error: !!validationErrors?.jobTitle,
                    helperText: validationErrors?.jobTitle,
                },
            },
            {
                accessorKey: "email",
                header: "Email",
                muiEditTextFieldProps: {
                    type: "email",
                    required: true,
                    error: !!validationErrors?.email,
                    helperText: validationErrors?.email,
                    //remove any previous validation errors when employee focuses on the input
                    onFocus: () =>
                        setValidationErrors({
                            ...validationErrors,
                            email: undefined,
                        }),
                },
            },
            {
                accessorKey: "phoneNumber",
                header: "Phone",
                muiEditTextFieldProps: {
                    type: "text",
                    required: true,
                    error: !!validationErrors?.phoneNumber,
                    helperText: validationErrors?.phoneNumber,
                    //remove any previous validation errors when employee focuses on the input
                    onFocus: () =>
                        setValidationErrors({
                            ...validationErrors,
                            phoneNumber: undefined,
                        }),
                },
            },
            {
                accessorKey: "onboardingDate",
                header: "Onboarding Date",
                muiEditTextFieldProps: {
                    type: "date",
                    required: true,
                    error: !!validationErrors?.onboardingDate,
                    helperText: validationErrors?.onboardingDate,
                    //remove any previous validation errors when employee focuses on the input
                    onFocus: () =>
                        setValidationErrors({
                            ...validationErrors,
                            onboardingDate: undefined,
                        }),
                },
            },
            {
                accessorKey: "officeLocation",
                header: "Office Location",
                editVariant: "select",
                editSelectOptions: indianStates,
                muiEditTextFieldProps: {
                    select: true,
                    error: !!validationErrors?.officeLocation,
                    helperText: validationErrors?.officeLocation,
                },
            },
            {
                accessorKey: "department",
                header: "Department",
                editVariant: "select",
                editSelectOptions: allDepartments,
                muiEditTextFieldProps: {
                    select: true,
                    error: !!validationErrors?.department,
                    helperText: validationErrors?.department,
                },
            },
            {
                accessorKey: "directManager",
                header: "Direct Manager",
                muiEditTextFieldProps: {
                    type: "text",
                    required: true,
                    error: !!validationErrors?.directManager,
                    helperText: validationErrors?.directManager,
                    //remove any previous validation errors when employee focuses on the input
                    onFocus: () =>
                        setValidationErrors({
                            ...validationErrors,
                            directManager: undefined,
                        }),
                    //optionally add validation checking for onBlur or onChange
                },
            },
        ],
        [validationErrors]
    );

    //call CREATE hook
    const { mutateAsync: createEmployee, isPending: isCreatingEmployee } = useCreateEmployee();
    //call READ hook
    const {
        data: fetchedEmployees = [],
        isError: isLoadingEmployeesError,
        isFetching: isFetchingEmployees,
        isLoading: isLoadingEmployees,
    } = useGetEmployees();
    //call UPDATE hook
    const { mutateAsync: updateEmployee, isPending: isUpdatingEmployee } = useUpdateEmployee();
    //call DELETE hook
    const { mutateAsync: deleteEmployee, isPending: isDeletingEmployee } = useDeleteEmployee();

    //CREATE action
    const handleCreateEmployee: MRT_TableOptions<Employee>["onCreatingRowSave"] = async ({ values, table }) => {
        const newValidationErrors = validateEmployee(values);
        if (Object.values(newValidationErrors).some((error) => error)) {
            setValidationErrors(newValidationErrors);
            return;
        }
        setValidationErrors({});
        await createEmployee(values);
        table.setCreatingRow(null); //exit creating mode
    };

    //UPDATE action
    const handleSaveEmployee: MRT_TableOptions<Employee>["onEditingRowSave"] = async ({ values, table }) => {
        const newValidationErrors = validateEmployee(values);
        if (Object.values(newValidationErrors).some((error) => error)) {
            setValidationErrors(newValidationErrors);
            return;
        }
        setValidationErrors({});
        await updateEmployee(values);
        table.setEditingRow(null); //exit editing mode
    };

    //DELETE action
    const openDeleteConfirmModal = (row: MRT_Row<Employee>) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            deleteEmployee(row.original.id);
        }
    };

    const table = useMaterialReactTable({
        columns,
        data: fetchedEmployees,
        createDisplayMode: "modal", //default ('row', and 'custom' are also available)
        editDisplayMode: "modal", //default ('row', 'cell', 'table', and 'custom' are also available)
        enableEditing: true,
        getRowId: (row) => row.id,
        muiToolbarAlertBannerProps: isLoadingEmployeesError
            ? {
                  color: "error",
                  children: "Error loading data",
              }
            : undefined,
        muiTableContainerProps: {
            sx: {
                minHeight: "500px",
            },
        },
        onCreatingRowCancel: () => setValidationErrors({}),
        onCreatingRowSave: handleCreateEmployee,
        onEditingRowCancel: () => setValidationErrors({}),
        onEditingRowSave: handleSaveEmployee,
        //optionally customize modal content
        renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
            <>
                <DialogTitle variant="h3">Create New Employee</DialogTitle>
                <DialogContent sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {internalEditComponents} {/* or render custom edit components here */}
                </DialogContent>
                <DialogActions>
                    <MRT_EditActionButtons variant="text" table={table} row={row} />
                </DialogActions>
            </>
        ),
        //optionally customize modal content
        renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
            <>
                <DialogTitle variant="h3">Edit Employee</DialogTitle>
                <DialogContent sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {internalEditComponents} {/* or render custom edit components here */}
                </DialogContent>
                <DialogActions>
                    <MRT_EditActionButtons variant="text" table={table} row={row} />
                </DialogActions>
            </>
        ),
        renderRowActions: ({ row, table }) => (
            <Box sx={{ display: "flex", gap: "1rem" }}>
                <Tooltip title="Edit">
                    <IconButton onClick={() => table.setEditingRow(row)}>
                        <EditIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        ),
        renderTopToolbarCustomActions: ({ table }) => (
            <Button
                variant="contained"
                onClick={() => {
                    table.setCreatingRow(true); //simplest way to open the create row modal with no default values
                    //or you can pass in a row object to set default values with the `createRow` helper function
                    // table.setCreatingRow(
                    //   createRow(table, {
                    //     //optionally pass in default values for the new row, useful for nested data or other complex scenarios
                    //   }),
                    // );
                }}
            >
                Create New Employee
            </Button>
        ),
        state: {
            isLoading: isLoadingEmployees,
            isSaving: isCreatingEmployee || isUpdatingEmployee || isDeletingEmployee,
            showAlertBanner: isLoadingEmployeesError,
            showProgressBars: isFetchingEmployees,
        },
    });

    return (
        <Container sx={{ zIndex: 200000 }}>
            <MaterialReactTable table={table} />;
        </Container>
    );
};

//CREATE hook (post new employee to api)
function useCreateEmployee() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (employee: Employee) => {
            //send api update request here
            return await createUserEmployeeDetails(employee);
        },
        //client side optimistic update
        onMutate: (newEmployeeInfo: Employee) => {
            queryClient.setQueryData(
                ["employees"],
                (prevEmployees: any) =>
                    [
                        ...prevEmployees,
                        {
                            ...newEmployeeInfo,
                            id: uuidv4(),
                        },
                    ] as Employee[]
            );
        },
        // onSettled: () => queryClient.invalidateQueries({ queryKey: ['employees'] }), //refetch employees after mutation, disabled for demo
    });
}

//READ hook (get employees from api)
function useGetEmployees() {
    return useQuery<Employee[]>({
        queryKey: ["employees"],
        queryFn: async () => {
            //send api request here
            return await getUserDetails();
        },
        refetchOnWindowFocus: false,
    });
}

//UPDATE hook (put employee in api)
function useUpdateEmployee() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (employee: Employee) => {
            //send api update request here
            return await updateUserEmployeeDetails(employee);
        },
        //client side optimistic update
        onMutate: (newEmployeeInfo: Employee) => {
            queryClient.setQueryData(["employees"], (prevEmployees: any) =>
                prevEmployees?.map((prevEmployee: Employee) =>
                    prevEmployee.id === newEmployeeInfo.id ? newEmployeeInfo : prevEmployee
                )
            );
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey: ["employees"] }), //refetch employees after mutation
    });
}

//DELETE hook (delete employee in api)
function useDeleteEmployee() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (employeeId: string) => {
            //send api update request here
            await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
            return Promise.resolve();
        },
        //client side optimistic update
        onMutate: (employeeId: string) => {
            queryClient.setQueryData(["employees"], (prevEmployees: any) =>
                prevEmployees?.filter((employee: Employee) => employee.id !== employeeId)
            );
        },
        // onSettled: () => queryClient.invalidateQueries({ queryKey: ['employees'] }), //refetch employees after mutation, disabled for demo
    });
}

const queryClient = new QueryClient();

const DashboardWithProviders = () => (
    //Put this with your other react-query providers near root of your app
    <QueryClientProvider client={queryClient}>
        <Dashboard />
    </QueryClientProvider>
);

export default DashboardWithProviders;

const validateRequired = (value: string) => !!value.length;
const validateEmail = (email: string) =>
    !!email.length &&
    email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

function validateEmployee(employee: Employee) {
    return {
        name: !validateRequired(employee.name) ? "Name is Required" : "",
        email: !validateEmail(employee.email) ? "Incorrect Email Format" : "",
    };
}
