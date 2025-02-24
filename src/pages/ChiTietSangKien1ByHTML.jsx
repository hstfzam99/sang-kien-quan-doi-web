import { useEffect } from "react"
import { useNavigate } from "react-router"

export const ChiTietSangKien1ByHTML = () => {

    const navigate = useNavigate()
    useEffect(() => {
        navigate('/sang-kien/1')
    }, [])


    return (
        <></>
    )
}