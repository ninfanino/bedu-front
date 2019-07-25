import React from 'react'

const ItemFound = (props) => {
    let { handleOpenModal, item } = props;
    return (
        <button className="itemGrid" onClick={handleOpenModal}>
            <img src={item.picture} className="img-mask" alt={item.name} />
            <div className="mask black">
                <img src="../images/icon-encontrados.png" alt="Dog" width={40} />
            </div>
        </button>
    ) 
}

export default ItemFound