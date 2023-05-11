import { useNavigate } from "react-router-dom"

export const Contact = () => {
    const navigate = useNavigate()
    return (
        <>
        <h1>Contact</h1>
        <button onClick={() => navigate(-1)}>Go back</button>
        </>
    )
}