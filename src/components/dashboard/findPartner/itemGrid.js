import React from 'react'

const ItemFindPartner = (props) => {
    let { handleOpenModal } = props;
    return (
        <button className="itemGrid" onClick={handleOpenModal}>
            <img src="../images/adopciones1.jpg" className="img-mask" alt="Dog" />
            <div className="mask black">
                <img src="../images/icon-dates.png" alt="Dog" width={40} />
            </div>
        </button>
    ) 
}

export default ItemFindPartner