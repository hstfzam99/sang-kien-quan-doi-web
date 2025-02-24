import { Route, Routes } from "react-router";
import { Layout } from "../components/Layout";
import { Home, SangKien, ChiTietSangKien, ChiTietSangKien1ByHTML, NhaTruyenThong, LoiBacHoDay, ChiTietLoiBacDay } from "../pages";

export const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="sang-kien" element={<SangKien />} />
                <Route path="sang-kien/:id" element={<ChiTietSangKien />} />
                <Route path="chitietsangkien1.html" element={<ChiTietSangKien1ByHTML />} />
                <Route path="nha-truyen-thong" element={<NhaTruyenThong />} />
                <Route path="loi-bac-ho-day" element={<LoiBacHoDay />} />
                <Route path="loi-bac-ho-day/:id" element={<ChiTietLoiBacDay />} />
            </Route>
        </Routes>
    )
}