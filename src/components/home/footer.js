import React from 'react'

const Footer = () => (
    <div className="Footer">
        <img src="/images/logo-footer.png" alt="Patrocinador" className="logoFooter" />

        <div className="address">
            Guadalajara, Jalisco <br/>
            Teléfono: 334455667788
        </div>

        <div className="socialMediaFooter">
            <div className="iconFooter">
                <img src="/images/icon-fb.png" alt="Facebook" />
            </div>
            <div className="iconFooter">
                <img src="/images/icon-in.png" alt="Instagram" />
            </div>
        </div>

        <div className="copy">
            © 2019. Todos los Derechos Reservados / Aviso de Privacidad 
        </div>
    </div>
)

export default Footer;