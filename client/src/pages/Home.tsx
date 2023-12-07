import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                            Empower Your Workforce, Elevate Your Efficiency Streamlining Success with Our HR Management
                            System
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            We undertake the responsibility of managing intricate tasks, allowing you to direct your
                            attention towards matters of greater significance.
                        </Typography>
                        <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
                            <Link to="/signup">
                                <Button variant="contained">Sign up for free</Button>
                            </Link>
                            <Link to="/login">
                                <Button variant="outlined">Login</Button>
                            </Link>
                        </Stack>
                    </Container>
                </Box>
            </main>
        </>
    );
}
