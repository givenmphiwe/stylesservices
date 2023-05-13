import { useNavigate } from "react-router-dom"
import { FaMarkdown} from "react-icons/fa"

export const Services = () => {
    const navigate = useNavigate()
    return (
        <body className="wrapper">
            <h1>Our service</h1>

            <p>Lore ipsum dolor skdmewd ewfk kefm ewfoefmoe few foekwfm</p>

            <div className="content-box">
                <div className="card">
                    <FaMarkdown/>
                    <h2>Marketing Services</h2>
                    <p>Aliquam ut turpisa fekwokfm fvwefweewf</p>
                </div>

                <div className="card">
                    <FaMarkdown/>
                    <h2>Marketing Services</h2>
                    <p>Aliquam ut turpisa fekwokfm fvwefweewf</p>
                </div>

                <div className="card">
                    <FaMarkdown/>
                    <h2>Marketing Services</h2>
                    <p>Aliquam ut turpisa fekwokfm fvwefweewf</p>
                </div>

                <div className="card">
                    <FaMarkdown/>
                    <h2>Marketing Services</h2>
                    <p>Aliquam ut turpisa fekwokfm fvwefweewf</p>
                </div>

                <div className="card">
                    <FaMarkdown/>
                    <h2>Marketing Services</h2>
                    <p>Aliquam ut turpisa fekwokfm fvwefweewf</p>
                </div>
            </div>
        </body>
    )
}