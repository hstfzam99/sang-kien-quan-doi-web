import { Box, Container, styled, Typography } from "@mui/material"
import { PageTitleText } from "../constants/styled"

export const Introduction = () => {
    return (
        <Container sx={{ marginTop: { xs: 4, md: 8 } }}>
            <PageTitleText mb={1}>
                Quân đội nhân dân Việt Nam
            </PageTitleText>
            <IntroEmphasisText>
                Trải qua 79 năm xây dựng, chiến đấu, trưởng thành dưới sự lãnh đạo của Đảng, trực tiếp là Quân uỷ Trung ương - Bộ Quốc phòng, quân và dân Quân khu 3 đoàn kết một lòng, chủ động, sáng tạo hoàn thành xuất sắc mọi nhiệm vụ:
            </IntroEmphasisText>

            <Box mb={3}>
                <IntroText>
                    - Một là, Quân và dân Quân khu 3 kiên cường bám trụ, mưu trí, dũng cảm chiến đấu, cùng quân và dân cả nước đánh thắng cuộc chiến tranh xâm lược của thực dân Pháp và can thiệp Mỹ.
                </IntroText>
                <IntroText>
                    - Hai là, Quân và dân Quân khu 3 nêu cao tinh thần đoàn kết, tự lực tự cường, sát cánh cùng cả nước, đánh thắng hoàn toàn giặc Mỹ xâm lược và Nguỵ quyền tay sai, thống nhất Tổ quốc, đi lên xây dựng CNXH.
                </IntroText>
                <IntroText>
                    - Ba là, Quân, dân Quân khu 3 thực hiện tốt 2 nhiệm vụ chiến lược xây dựng và bảo vệ Tổ quốc, đạt nhiều thành tựu to lớn trong giai đoạn cách mạng mới.
                </IntroText>
                <IntroText>
                    - Một là, Quân và dân Quân khu 3 kiên cường bám trụ, mưu trí, dũng cảm chiến đấu, cùng quân và dân cả nước đánh thắng cuộc chiến tranh xâm lược của thực dân Pháp và can thiệp Mỹ.
                </IntroText>
            </Box>
            <IntroEmphasisText>
                Từ sau 30/4/1975 đến nay, nhất là thời kỳ đổi mới, đẩy mạnh CNH, HĐH đất nước, trên cơ sở quán triệt các Nghị quyết Đại hội Đảng toàn quốc; Nghị quyết 02 của Bộ chính trị về nhiệm vụ quốc phòng; Nghị quyết Trung ương 8 (khoá IX, khóa XI) về Chiến lược bảo vệ Tổ quốc trong tình hình mới; các Nghị quyết của Đảng uỷ Quân sự Trung ương (nay là Quân ủy Trung ương) LLVT Quân khu luôn hoàn thành toàn diện các nhiệm vụ được giao, có nhiều nhiệm vụ hoàn thành xuất sắc, nổi bật là:

            </IntroEmphasisText>
            <Box>
                <IntroText>
                    - Thứ nhất: Xây dựng LLVT Quân khu vững mạnh về chính trị.

                </IntroText>
                <IntroText>
                    - Thứ hai: Thường xuyên hoàn thành tốt nhiệm vụ huấn luyện, SSCĐ, xây dựng LLVT Quân khu vững mạnh toàn diện.

                </IntroText>
                <IntroText>
                    - Thứ ba: Bảo đảm tốt công tác hậu cần, kỹ thuật, gắn xây dựng, phát triển kinh tế với củng cố quốc phòng an ninh, quốc phòng - an ninh với kinh tế.

                </IntroText>
                <IntroText>
                    - Thứ tư: Thực hiện tốt công tác dân vận, chính sách hậu phương quân đội, phong trào "đền ơn đáp nghĩa", "xoá đói giảm nghèo".
                </IntroText>
            </Box>
        </Container>
    )
}

const IntroEmphasisText = styled(Typography)({
    color: '#000000',
    fontWeight: 700
})
const IntroText = styled(Typography)({
    color: '#000000',
})


