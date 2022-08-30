import {Routes,Route,Link} from 'react-router-dom'
const Home = () => {
    return (
        <>
            <div className="navbar-container">
                <ul className="ul-navbar">
                    <li className="li-navbar">HOME</li>
                    <li className="li-navbar">
                        <Link to="about" className="a-navbar">
                            ABOUT ME
                        </Link>
                    </li>
                    <li className="li-navbar">
                        <Link to="skills" className="a-navbar">
                            SKILLS
                        </Link>
                    </li>
                    <li className="li-navbar">
                        <Link to="blog" className="a-navbar">
                            BLOG
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="content-container">
                <img src="images/Putri(FAPERTA) (1).JPG" widht={500} height={500} />
            </div>
            <div className="footer-container">
                <h1 className="H1">
                    Hi, I'm Putri. I am a graduate of agriculture with an interest in pests
                    and plant diseases.
                </h1>
            </div>
        </>
    )
}

export default Home