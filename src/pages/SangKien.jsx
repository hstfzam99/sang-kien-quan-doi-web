import { Box, Button, Container, Grid2, Stack, styled, Typography } from "@mui/material"
import { useNavigate } from "react-router"
import { OPACITY_TO_HEX, PageTitleText } from '../constants'

const items = [
    {
        id: 1,
        title: "Thuyết minh thông minh",
        author: 'Trung uý Phan Xuân Thắng',
        image: '/images/anh.jpg',
        sound: '/images/sangkien.mp3'
    },
    {
        id: 2,
        title: "Mặt nạ phòng hóa đa dụng",
        author: 'Thượng úy Lương Quang Hùng',
        image: '/images/baibanak.jpg',
        sound: ''
    },
]

export const SangKien = () => {
    return (
        <Box mt={{xs:4, md:8}}>
            <PageTitleText>
                Sáng kiến quân đội
            </PageTitleText>

            <Box mt={{xs:4, md:8}}>
                <SectionContainer>
                    <Container>

                        <Grid2 container spacing={4}>
                            {items.map((item) =>
                                <Grid2 item size={{ xs: 12, md: 4 }} sx={{ backgroundColor: 'white' }}>

                                    <SangKienItem
                                        key={item.id}
                                        title={item.title}
                                        image={item.image}
                                        author={item.author}
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
const SangKienItem = (props) => {
    const navigate = useNavigate()

    const onBtnClick = () => {
        console.log('clicked')
        navigate(`${props.id}`)
    }
    return (
        <Box px={2} py={2}>
            <img src={props.image} style={{ maxWidth: '100%', width: "100%", height: 250, marginBottom: 12 }} />
            <Stack spacing={1}>
                <Typography sx={{ fontWeight: 650 }}>{props.title}</Typography>
                <DetailButton variant="contained" onClick={onBtnClick}>Chi tiết sáng kiến</DetailButton>
                <Typography sx={{ color: `#000000${OPACITY_TO_HEX['75']}` }}>Người đăng bởi: {props.author}</Typography>
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