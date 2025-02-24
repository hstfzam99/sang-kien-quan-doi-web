import { Box, styled, Typography } from "@mui/material"
import { OPACITY_TO_HEX } from "../constants/color"
import { useTheme, useMediaQuery } from '@mui/material';

export const Banner = () => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box mb={3}>
            <Box sx={{
                backgroundImage: 'url(images/banner.jpg)',
                height: { xs: '30vh', md: '50vh' },
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            }}>
                <BoxAbsolute>
                    <Box sx={{ paddingX: { xs: 1, md: 1 } }}>
                        <BannerTextStyled sx={{ fontWeight: 700, fontSize: { xs: 32, md: 52 } }}>
                            Quân đội nhân dân {isMdUp ? "" : <br />} Việt Nam
                        </BannerTextStyled>
                        <BannerTextStyled sx={{ fontWeight: 500, fontSize: { xs: 24, md: 40 } }}>
                            Quân đội ta từ nhân dân mà ra, vì nhân dân mà chiến đấu
                        </BannerTextStyled>
                    </Box>
                </BoxAbsolute>
            </Box>
        </Box>
    )
}

const BannerTextStyled = styled(Typography)({
    color: 'white',
    textAlign: 'center'
})

const BoxAbsolute = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: `#000000${OPACITY_TO_HEX['67']}`,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})