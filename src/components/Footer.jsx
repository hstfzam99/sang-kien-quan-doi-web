import { Box, Container, Typography } from "@mui/material"

export const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#ffffff' }}>
            <Container sx={{paddingY:4}}>
                <Typography sx={{ color: '#000000' }}>
                    Quân đội nhân dân Việt Nam (22/12/1944 - 22/12/2024)
                </Typography>
                <Typography sx={{ color: '#000000' }}>
                    Dự án Web này được thực hiện bởi Tùng Đỗ Xuân và Trung uý Phan Xuân Thắng (Chính trị viên phó Đại 1)
                </Typography>
            </Container>
        </Box>
    )
}

