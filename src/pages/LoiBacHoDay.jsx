import { Box, Container, Grid2, Stack, styled, Typography } from "@mui/material"
import { OPACITY_TO_HEX, PageTitleText } from '../constants'

export const LoiBacHoDay = () => {
    return (
        <Container sx={{ marginTop: { xs: 4, md: 8 } }}>
            <PageTitleText>Lời Bác Hồ dạy</PageTitleText>
            <List />
        </Container>
    )
}

const items = [
    {
        id: 1,
        tag: 'Lời Bác dạy ngày này năm xưa',
        title: 'Lời Bác dạy ngày 21 tháng 02',
        dateString: ' 23/12/2023 22:01',
        view: 259,
        reference: 'Các cô, các chú là những thầy giáo, những cán bộ giáo dục đều phải luôn luôn cố gắng học thêm, học chính trị, học chuyên môn. Nếu không tiến bộ mãi, thì sẽ không theo kịp đà tiến chung, sẽ trở thành lạc hậu',
        summary: 'Là lời của Chủ tịch Hồ Chí Minh được trích trong bài nói chuyện tại Đại hội chiến sĩ thi đua toàn ngành giáo dục, ngày 21 tháng 2 năm 1956'
    },
    {
        id: 2,
        tag: 'Lời Bác dạy ngày này năm xưa tháng 2',
        title: 'Lời Bác dạy ngày 20 tháng 02',
        dateString: ' 23/12/2023 22:01',
        view: 259,
        reference: 'Các cô, các chú là những thầy giáo, những cán bộ giáo dục đều phải luôn luôn cố gắng học thêm, học chính trị, học chuyên môn. Nếu không tiến bộ mãi, thì sẽ không theo kịp đà tiến chung, sẽ trở thành lạc hậu',
        summary: 'Là lời của Chủ tịch Hồ Chí Minh được trích trong bài nói chuyện tại Đại hội chiến sĩ thi đua toàn ngành giáo dục, ngày 21 tháng 2 năm 1956'
    },
    {
        id: 3,
        tag: 'Lời Bác dạy ngày này năm xưa tháng 2',
        title: 'Lời Bác dạy ngày 19 tháng 02',
        dateString: ' 23/12/2023 22:01',
        view: 259,
        reference: 'Các cô, các chú là những thầy giáo, những cán bộ giáo dục đều phải luôn luôn cố gắng học thêm, học chính trị, học chuyên môn. Nếu không tiến bộ mãi, thì sẽ không theo kịp đà tiến chung, sẽ trở thành lạc hậu',
        summary: 'Là lời của Chủ tịch Hồ Chí Minh được trích trong bài nói chuyện tại Đại hội chiến sĩ thi đua toàn ngành giáo dục, ngày 21 tháng 2 năm 1956'
    },
    {
        id: 4,
        tag: 'Lời Bác dạy ngày này năm xưa',
        title: 'Lời Bác dạy ngày 21 tháng 02',
        dateString: ' 23/12/2023 22:01',
        view: 259,
        reference: 'Các cô, các chú là những thầy giáo, những cán bộ giáo dục đều phải luôn luôn cố gắng học thêm, học chính trị, học chuyên môn. Nếu không tiến bộ mãi, thì sẽ không theo kịp đà tiến chung, sẽ trở thành lạc hậu',
        summary: 'Là lời của Chủ tịch Hồ Chí Minh được trích trong bài nói chuyện tại Đại hội chiến sĩ thi đua toàn ngành giáo dục, ngày 21 tháng 2 năm 1956'
    },

]
export const List = () => {
    return (
        <Box mt={{ xs: 2, md: 1 }}>
            <Stack spacing={2}>
                {items.map((item) => <Item key={item.id} item={item} />)}
            </Stack>
        </Box>
    )
}

export const Item = (props) => {
    return (
        <Box sx={{ borderRadius: 1, border: `1px solid #DDDDDD` }}>
            <Box px={2} py={1} sx={{ borderBottom: `1px solid #DDDDDD`, backgroundColor: '#f5f5f5' }}>
                <Typography sx={{ color: '#1a3f5e', fontWeight: 650, fontSize: 15 }}>{props.item.tag}</Typography>
            </Box>
            <Box p={2}>
                <Grid2 container>
                    <Grid2 item size={{ xs: 12, md: 3 }}>
                        <img src="/images/loibacday1.jpg" />
                    </Grid2>
                    <Grid2 item size={{ xs: 12, md: 9 }}>
                        <Stack spacing={1}>
                            <ATagStyled href={`/loi-bac-ho-day/${props.item.id}`}>
                                <Typography sx={{ color: '#1a3f5e', fontWeight: 700, fontSize: 18 }}>{props.item.title}</Typography>
                            </ATagStyled>
                            <Stack direction={'row'} spacing={2}>
                                <Typography style={{ color: `#000000${OPACITY_TO_HEX['50']}` }}>{props.item.dateString}</Typography>
                                <Typography style={{ color: `#000000${OPACITY_TO_HEX['50']}` }}>Đã xem: {props.item.view}</Typography>
                            </Stack>
                            <Typography sx={{ color: '#e74c3c', fontStyle: 'italic', fontWeight: 650 }}> "{props.item.reference}"</Typography>
                            <Typography> {props.item.summary}</Typography>
                        </Stack>
                    </Grid2>
                </Grid2>
            </Box>
        </Box >
    )
}

const ATagStyled = styled('a')({
    textDecoration: 'none',
    color: 'inherit'
})