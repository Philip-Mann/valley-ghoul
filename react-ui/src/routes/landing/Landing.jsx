import './landing.css'; 
import Logo from '../../components/landing/logo/Logo';



const Landing = () => {

    return (
        <>
        <Logo />
        <div className="landing-container">
            <div className="greeting">
                <h1>Handcrafted jewlery made in Sugarland, Texas by Ghostlaydee</h1>
            </div>
            <div className="icons">
                <a 
                    href='https://www.instagram.com/valley.ghoul/'
                    rel="noreferrer"
                    target="_blank"
                >
                    <i class="fab fa-instagram fa-3x">valley.ghoul</i>
                </a>
                
            </div>
        </div> 
        </>
    )
}

export default Landing;