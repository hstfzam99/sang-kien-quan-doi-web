import { Box, Container, Typography } from "@mui/material"
import { useParams } from "react-router"
import { mockSangKien, mockSangKien2, PageTitleText } from "../constants"
import { SunContent } from "../components"

export const ChiTietSangKien = () => {
    const params = useParams()
    const id = parseInt(params?.id)
    return (
        <Container sx={{ marginTop: { xs: 4, md: 8 } }}>
            <PageTitleText>Sáng kiến số {id}</PageTitleText>

            {id === 1 &&
                <Box sx={{ marginTop: { xs: 1, md: 2 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box>
                        <Typography sx={{ textAlign: { xs: 'center', md: 'center' } }}>Đọc nội dung</Typography>
                        <div>
                            <audio autoPlay controls>
                                <source src="/sounds/sangkien.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </Box>
                </Box>
            }

            {/* <Typography>Sang kien co id = {id}</Typography>
            <Typography>
                Trải qua 79 năm xây dựng, chiến đấu, trưởng thành dưới sự lãnh đạo của Đảng, trực tiếp là Quân uỷ Trung ương - Bộ Quốc phòng, quân và dân Quân khu 3 đoàn kết một lòng, chủ động, sáng tạo hoàn thành xuất sắc mọi nhiệm vụ:
                Trải qua 79 năm xây dựng, chiến đấu, trưởng thành dưới sự lãnh đạo của Đảng, trực tiếp là Quân uỷ Trung ương - Bộ Quốc phòng, quân và dân Quân khu 3 đoàn kết một lòng, chủ động, sáng tạo hoàn thành xuất sắc mọi nhiệm vụ:
            </Typography> */}

            {id === 1 &&
                <SunContent content={mockSangKien['editor-content']} />
            }
            {id === 2 &&
                <SunContent content={mockSangKien2['editor-content']} />
            }
        </Container>
    )
}