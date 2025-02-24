import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, IconButton, List, ListItem, ListItemText, styled, Typography } from "@mui/material";
import { useState } from 'react';
import { headerItems } from "./Header";


export const MobileHeader = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setOpen(open);
    };

    return (
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)} sx={{ width: '70%' }}>
                <Box sx={{ width: '70vw', padding: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src={'/images/logo.png'} style={{ width: '80px', marginRight: 8 }} />
                            <LogoText>SÁNG KIẾN</LogoText>
                        </Box>
                        <IconButton onClick={toggleDrawer(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <List>
                        {headerItems.map((item) => (
                            <ListItem button key={item.title} component="a" href={item.link}>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};

const LogoText = styled(Typography)({
    fontSize: 20,
    textTransform: 'uppercase',
});

const ATagStyled = styled('a')({
    textDecoration: 'none',
    color: 'inherit'
});
