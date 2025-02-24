import { Box, Container, Stack, Typography } from "@mui/material"
import { useParams } from "react-router"
import { PageTitleText } from "../constants"

export const ChiTietLoiBacDay = () => {
    const params = useParams()
    const id = params?.id
    return (
        <Container sx={{ marginTop: 8 }}>
            <PageTitleText>Lời bác dạy số {id}</PageTitleText>
            <Stack direction={'row'} spacing={2}>
                <Typography>23/12/2023 22:01</Typography>
                <Typography>Đã xem: {'476'}</Typography>
            </Stack>
            
            <img src="/images/loibacday1-big.jpg" style={{maxWidth:'100%'}}/>
            <Typography>
                Trải qua 79 năm xây dựng, chiến đấu, trưởng thành dưới sự lãnh đạo của Đảng, trực tiếp là Quân uỷ Trung ương - Bộ Quốc phòng, quân và dân Quân khu 3 đoàn kết một lòng, chủ động, sáng tạo hoàn thành xuất sắc mọi nhiệm vụ:
                Trải qua 79 năm xây dựng, chiến đấu, trưởng thành dưới sự lãnh đạo của Đảng, trực tiếp là Quân uỷ Trung ương - Bộ Quốc phòng, quân và dân Quân khu 3 đoàn kết một lòng, chủ động, sáng tạo hoàn thành xuất sắc mọi nhiệm vụ:
            </Typography>

        </Container>
    )
}