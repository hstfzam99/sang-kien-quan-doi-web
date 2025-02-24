import { Box, Button, Container, Grid2, Stack, styled, Typography } from "@mui/material"
import { useNavigate } from "react-router"

const actions = [
    {
        title: "Hoạt động nổi bật",
        image: '',
        link: ''
    },
    {
        title: "Sáng kiến quân đội mới nhất",
        image: '',
        link: '/sang-kien'
    },
    {
        title: "Tin tức nổi bật",
        image: '',
        link: '/sang-kien'
    },
    {
        title: "Lời Bác dạy",
        image: '',
        link: '/loi-bac-ho-day'
    },
]
export const QuickActions = () => {
    return (
        <Box mt={{ xs: 4, md: 8 }}>
            <SectionContainer>
                <Grid2 container spacing={2}>

                    {actions.map((action) =>
                        <Grid2 item size={{ xs: 12, md: 6 }} sx={{ backgroundColor: 'white' }}>

                            <QuickActionItem
                                title={action.title}
                                image={action.image}
                                link={action.link}
                            />
                        </Grid2>
                    )}
                </Grid2>
            </SectionContainer>
        </Box>
    )
}

const QuickActionItem = (props) => {
    const navigate = useNavigate()

    const onBtnClick = () => navigate(props.link)
    return (
        <Box px={2} py={2}>
            <Stack spacing={1}>
                <img src="images/haucan.jpg" />
                <Box>
                    <Typography sx={{ fontWeight: 700, mb: 1 }}>{props.title}</Typography>
                    <DetailButton variant="contained" onClick={onBtnClick}>Xem thêm</DetailButton>
                </Box>
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