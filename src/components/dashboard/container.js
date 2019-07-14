import React from 'react'
import MyPets from './myPets';

const Container = (props) => (
    <div className="Container">
        <MyPets
            user={props.user}/>
    </div>
)

export default Container