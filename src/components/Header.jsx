import { Box } from "@mui/material"
import { vr360SiteUrl } from '../constants'
import { DesktopHeader } from "./DesktopHeader"
import { MobileHeader } from "./MobileHeader"
export const headerItems = [
    {
        title: 'Trang chủ',
        link: '/',
    },
    {
        title: 'Bảo tàng LSQS VN',
        link: `${vr360SiteUrl}`,
    },
    {
        title: 'Sáng kiến',
        link: '/sang-kien',
    },
    {
        title: 'Lời Bác Hồ dạy',
        link: '/loi-bac-ho-day',
    },
    {
        title: 'Nhà truyền thống',
        link: '/nha-truyen-thong',
    },
]
export const Header = () => {
    return (
        <Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <MobileHeader />
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <DesktopHeader />
            </Box>
        </Box>
    )
}

