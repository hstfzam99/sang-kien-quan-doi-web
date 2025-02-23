import { Box, Container, Typography } from "@mui/material"
import { useParams } from "react-router"
import { PageTitleText } from "../constants"

export const ChiTietSangKien = () => {
    const params = useParams()
    const id = params?.id
    return (
        <Container sx={{ marginTop: 8 }}>
            <PageTitleText>Sáng kiến số {id}</PageTitleText>
            <Typography>Sang kien co id = {id}</Typography>
            <Typography>
                Trải qua 79 năm xây dựng, chiến đấu, trưởng thành dưới sự lãnh đạo của Đảng, trực tiếp là Quân uỷ Trung ương - Bộ Quốc phòng, quân và dân Quân khu 3 đoàn kết một lòng, chủ động, sáng tạo hoàn thành xuất sắc mọi nhiệm vụ:
                Trải qua 79 năm xây dựng, chiến đấu, trưởng thành dưới sự lãnh đạo của Đảng, trực tiếp là Quân uỷ Trung ương - Bộ Quốc phòng, quân và dân Quân khu 3 đoàn kết một lòng, chủ động, sáng tạo hoàn thành xuất sắc mọi nhiệm vụ:
            </Typography>

        </Container>
    )
}