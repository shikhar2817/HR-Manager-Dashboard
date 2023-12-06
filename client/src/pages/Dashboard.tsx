import { Button, Container, Stack } from "@mui/material";
import VirtualizedTable from "../components/VirtualizedTable";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../components/Modal";

export const Dashboard = () => {
    return (
        <Container>
            <Stack direction="row" spacing={2} sx={{ marginBottom: 3 }}>
                <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "70vw" }}>
                    <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
                    <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "30vw" }}
                >
                    Create Employee
                </Button>
            </Stack>

            <VirtualizedTable />
            <Modal />
        </Container>
    );
};
