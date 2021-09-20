import * as React from "react"
import './index.scss'


const Button = ({children}) => {


    return (
<div>
    <button type={''} className="custom-button">

        {children}

    </button>
</div>
    )
}
export default Button
