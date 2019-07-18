import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MenuDashboard extends Component {
    render () {
        return (
            <div className="MenuDashboard">
                <img src="/images/logo-header.png" alt="Xuxo" className="LogoDashboard" />

                <ul className="UlDashboard">
                    <NavLink to="/dashboard" exact activeClassName="selectedLink">
                        <li className="itemMenuDashboard myPets"></li>
                    </NavLink>
                    <li className="itemMenuDashboard notifications"></li>
                    <NavLink to="/dashboard/findPartner" activeClassName="selectedLink">
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