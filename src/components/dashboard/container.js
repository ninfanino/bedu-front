import React from 'react'
import MyPets from './myPets';

const Container = (props) => {
//    {console.log('Props Container: ', props)}
    return(
    <div className="Container">
        <MyPets
            user={props.user}
            petName={props.petName}
            petAge={props.petAge}
            petRace={props.petRace}
            petCertificate={props.petCertificate}
            petEmergency={props.petEmergency}
            petGender={props.petGender}
            petAdopt={props.petAdopt}
            petLost={props.petLost}
            petFound={props.petFound}
            petInLove={props.petInLove}
            updateAttribute={props.updateAttribute}
            updateFlag={props.updateFlag}
            handlerSaveDash={props.handlerSaveDash}
            handlerGetImageURL={props.handlerGetImageURL}
        />
            
    </div>
)}

export default Container