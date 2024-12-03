import CustomButton from "../reusables/CustomButton"
import style from "../styles/navbar.module.css"
const NavBar = ()=> {
    return(
        <>
        <div className={style.externalDiv}>
             <div className={style.navbar}>
                <div>
                    <h1><span>MY</span>DOCTOR</h1>
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