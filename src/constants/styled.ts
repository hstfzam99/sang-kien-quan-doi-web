import { styled, Typography } from "@mui/material";

export const PageTitleText = styled(Typography)(({ theme }) => ({
    color: 'black',
    fontWeight: 600,
    textAlign: 'center',
    fontSize: '28px',
    [theme.breakpoints.up('md')]: {
        fontSize: '48px',
    },
}));