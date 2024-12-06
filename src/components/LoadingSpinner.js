import { CircularProgress, Box } from "@mui/material";

const LoadingSpinner = ({ size = 40 }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
            }}
        >
            <CircularProgress size={size} />
        </Box>
    );
};

export default LoadingSpinner;
