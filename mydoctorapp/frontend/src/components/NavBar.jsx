import CustomButton from "../reusables/CustomButton"
import style from "../styles/navbar.module.css"
import Logo from "../reusables/Logo"
const NavBar = ()=> {
    return(
        <>
        <div className={style.externalDiv}>
             <div className={style.navbar}>
                <div>
                    <Logo/>
                </div>
                <div className={style.buttonAndHomeDiv}>

                    <ul className={style.homeNav}>
                        <li className={style.home}><a href="#">HOME</a></li>
                        <li><a href="#">CONSULTANT</a></li>
                        <li><a href="#">FEEDBACK</a></li>
                    </ul>

                    <div className={style.buttons}>
                        <CustomButton style={style.signup} type="submit" textContent="Sign up"/>
                        <CustomButton style={style.signup} type="submit" textContent="Login"/>
                    </div>
                </div>
             </div>
        </div>
        </>
    )
}

export default NavBar