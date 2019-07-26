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
                    <NavLink to="/dashboard/found" activeClassName="selectedLink">
                        <li className="itemMenuDashboard provisionalHome"></li>
                    </NavLink>
                    <NavLink to="/dashboard/lost" activeClassName="selectedLink">
                        <li className="itemMenuDashboard findPet"></li>
                    </NavLink>
                    <NavLink to="/dashboard/adoptions" activeClassName="selectedLink">
                        <li className="itemMenuDashboard adoptions"></li>
                    </NavLink>
                    <li className="itemMenuDashboard logout"></li>
                </ul>
            </div>
        )
    }
}

export default MenuDashboard