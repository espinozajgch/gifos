import LogoDesktop from "../img/logo_desktop_light.png";

export default function Header(props){
    
    const reset = () => {
        props.resetear();
        console.log("resetear");
    };

    return(
        <div className="header">
            <div className="logo">
            <button className={`${props.isDark && "dark"}`} onClick={reset}>
                <img src={LogoDesktop} alt="logo" />
            </button>
                
            </div>
            <button className={`btn-modo ${props.isDark && "dark"}`} onClick={() => props.setDark(!props.isDark)}>
                {props.isDark ? "Light" : "Dark"} Mode
            </button>
        </div>  
    );
}

//export default Header;