import React from 'react'

/****
 * Necesita conectarse al back
 ***/

const Blog = () => (
    <div className="Blog">
        <div className="title">
            Blog
        </div>
        <div className="lineGreen"></div>
        <div className="slogan">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <div className="BlogContainer">
            <div className="BlogItem">
                <img src="/images/adopciones1.jpg" className="BlogImg" alt="Blog" />
                <div className="BlogInfo">
                    <div className="titleBlog">Cómo armar el expediente médico de tu perro</div>
                    <div className="dateBlog">22 de junio</div>
                    <div className="infoBlog">Nadie está exento de una emergencia y los perros no son la excepción</div>
                    <div className="btnBlog">Ver más</div>
                </div>
            </div>

            <div className="BlogItem">
                <img src="/images/adopciones2.jpg" className="BlogImg" alt="Blog" />
                <div className="BlogInfo">
                    <div className="titleBlog">Test ¿Cuánto conoces a tu perro?</div>
                    <div className="dateBlog">22 de junio</div>
                    <div className="infoBlog">Nadie  nace sabiendo ser papá o mamá, esa frase la escuchamos siempre que alguien acaba de ...</div>
                    <div className="btnBlog">Ver más</div>
                </div>
            </div>

            <div className="BlogItem">
                <img src="/images/adopciones3.jpg" className="BlogImg" alt="Blog" />
                <div className="BlogInfo">
                    <div className="titleBlog">Alimento apropiado para tu perro</div>
                    <div className="dateBlog">22 de junio</div>
                    <div className="infoBlog">El momento de elegir qué marca de croquetas vamos a darle a nuestro perro es tan difícil...</div>
                    <div className="btnBlog">Ver más</div>
                </div>
            </div>

            <div className="BlogItem">
                <img src="/images/adopciones4.jpg" className="BlogImg" alt="Blog" />
                <div className="BlogInfo">
                    <div className="titleBlog">¿A cuántos perros famosos puedes reconocer?</div>
                    <div className="dateBlog">22 de junio</div>
                    <div className="infoBlog">El mundo del espectáculo está lleno de grandes estrellas y las estrellas de 4 patas no se...</div>
                    <div className="btnBlog">Ver más</div>
                </div>
            </div>
        </div>
    </div>
)

export default Blog