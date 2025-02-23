import { Box, Button, Container, Grid2, Stack, styled, Typography } from "@mui/material"
import { useNavigate } from "react-router"
import { OPACITY_TO_HEX, PageTitleText } from "../constants"

const items = [
    {
        id: 1,
        title: "Nhà Truyền Thống 1",
        image: '/images/baibanak.jpg',
    },
    {
        id: 2,
        title: "Phòng Hồ Chí Minh",
        image: '/images/anh.jpg'
    },
]
export const NhaTruyenThong = () => {
    return (
        <Box mt={8}>
            <PageTitleText>
                Nhà Truyền Thống
            </PageTitleText>

            <Box mt={8}>
                <SectionContainer>
                    <Container>

                        <Grid2 container spacing={4}>
                            {items.map((item) =>
                                <Grid2 item size={4} sx={{ backgroundColor: 'white' }}>

                                    <NhaTruyenThongItem
                                        key={item.id}
                                        title={item.title}
                                        image={item.image}
                                        id={item.id}
                                    />
                                </Grid2>
                            )}
                        </Grid2>
                    </Container>
                </SectionContainer>
            </Box>
        </Box>
    )
}

const NhaTruyenThongItem = (props) => {
    const navigate = useNavigate()

    const onBtnClick = () => {
        navigate(`${props.id}`)
    }
    return (
        <Box px={2} py={2}>
            <img src={props.image} style={{ maxWidth: '100%', width: "100%", height: 250, marginBottom: 12 }} />
            <Stack spacing={1}>
                <Typography sx={{ fontWeight: 650 }}>{props.title}</Typography>
                <DetailButton variant="contained" onClick={onBtnClick}>Xem thêm</DetailButton>
            </Stack>
        </Box>
    )
}


const SectionContainer = styled(Box)({
    backgroundColor: '#212529',
    padding: 32
})
const DetailButton = styled(Button)({
    paddingX: 8,
    paddingY: 4,
})