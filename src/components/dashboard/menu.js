import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MenuDashboard extends Component {
    render () {
        return (
            <div className="MenuDashboard">
                <NavLink to={{pathname: "/home", state: { fromDashboard: true }}} activeClassName="selectedLink">
                    <img src="/images/logo-header.png" alt="Xuxo" className="LogoDashboard" />
                </NavLink>
                <ul className="UlDashboard">
                    <NavLink to="/dashboard" exact activeClassName="selectedLink">
                        <li className="itemMenuDashboard myPets"></li>
                    </NavLink>
                    <NavLink to="/dashboard/notifications" activeClassName="selectedLink">
                        <li className="itemMenuDashboard notifications"></li>
                    </NavLink>
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