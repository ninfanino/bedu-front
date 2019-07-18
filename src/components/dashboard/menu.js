import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MenuDashboard extends Component {
    render () {
        return (
            <div className="MenuDashboard">
                <img src="/images/logo-header.png" alt="Xuxo" className="LogoDashboard" />

                <ul className="UlDashboard">
                    <li className="itemMenuDashboard myPets"></li>
                    <li className="itemMenuDashboard notifications"></li>
                    <NavLink to="/dashboard/findPartner">
                        <li className="itemMenuDashboard findPartner"></li>
                    </NavLink>
                    <li className="itemMenuDashboard provisionalHome"></li>
                    <li className="itemMenuDashboard findPet"></li>
                    <li className="itemMenuDashboard adoptions"></li>
                    <li className="itemMenuDashboard settings"></li>
                    <li className="itemMenuDashboard logout"></li>
                </ul>
            </div>
        )
    }
}

export default MenuDashboard