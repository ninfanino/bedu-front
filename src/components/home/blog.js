import React from 'react'

/****
 * Necesita conectarse al back
 ***/

var entries = [
    {
        path:   "/images/adopciones1.jpg",
        title:  "Cómo armar el expediente médico de tu perro",
        date:   "22 de junio",
        info:   "Nadie está exento de una emergencia y los perros no son la excepción",
    },
    {
        path:   "/images/adopciones2.jpg",
        title:  "Test ¿Cuánto conoces a tu perro?",
        date:   "22 de junio",
        info:   "Nadie  nace sabiendo ser papá o mamá, esa frase la escuchamos siempre que alguien acaba de ...",
    },
    {
        path:   "/images/adopciones3.jpg",
        title:  "Alimento apropiado para tu perro",
        date:   "22 de junio",
        info:   "El momento de elegir qué marca de croquetas vamos a darle a nuestro perro es tan difícil...",
    },
    {
        path:   "/images/adopciones4.jpg",
        title:  "¿A cuántos perros famosos puedes reconocer?",
        date:   "22 de junio",
        info:   "El mundo del espectáculo está lleno de grandes estrellas y las estrellas de 4 patas no se...",
    },
]

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
            {
                entries.map((item, i) => 
                    <div className="BlogItem" key={i}>
                        <img src={item.path} className="BlogImg" alt={item.title}/>
                        <div className="BlogInfo">
                            <div className="titleBlog">{item.title}</div>
                            <div className="dateBlog">{item.date}</div>
                            <div className="infoBlog">{item.info}</div>
                            <div className="btnBlog">Ver más</div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
)

export default Blog