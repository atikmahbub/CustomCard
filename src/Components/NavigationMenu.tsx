import React from 'react'
import { elastic as Menu  } from 'react-burger-menu'
import '../Styles/css/nav.css'
import Logo from '../Assets/images/logo/logo2r.png'

interface Props{
    menu? : any[]
}


const NavigationMenu : React.FC<Props> = ({menu}) => {
    return (
        <>
        <img src={Logo} className="logo-image" alt="Logo"/>
        <Menu right noOverlay pageWrapId={"page-wrap"} outerContainerId={"App"}>
            {            
                menu?.map((item: any) => (

                    <div className="menu-item">
                        <span className="menu-bar"></span>
                        <a href={item.pathname}>
                            {item.name}
                        </a>  
                    </div>                        

                ))
            }
        </Menu> 
        </>   
    )
}

export default NavigationMenu
