/** contendrá un objeto literal con los datos de un usuario. Los datos deben coincidir con la información pedida en el formulario de registro. 
Los datos del usuario deben mostrarse en todos los lugares donde aparezca el header logueado y en “mi perfil”.
 */

const data = {

    usuario:  {
            email: 'luciana@gmail.com',
            userName:"lucianaPerez",
            password:"luCHi" ,
            bday:"2024-04-08",
            dni:"45891234",
            profilePic: "/images/users/profilepic.avif"},
    

    producto: [
        {
            imagen: 'images/products/remera.jpeg',
            nombre: 'Remera',
            description: 'Remera escote recto y hombros semicubiertos.',
            comentarios: [
                {
                    nombreUsuario: 'Luciana',
                    comentario: 'Muy linda remera',
                    imagen: '/images/users/1.webp',

                },
                {
                    nombreUsuario: 'Juana',
                    comentario: 'Los brillos que tiene es un detalle muy lindo',
                    imagen: '/images/users/2.jpeg',
                },
                {
                    nombreUsuario: 'Lara',
                    comentario: 'Me encanta como queda puesta',
                    imagen: '/images/users/3.jpeg',

                }
            ]

        },
        {
            imagen: '/images/products/pantalon.jpeg',
            nombre: 'Pantalón',
            description: 'Pantalón de tiro alto y cintura con trabillas. Pierna recta.',
            comentarios: [
                {
                    nombreUsuario: 'Matias',
                    comentario: 'Un pantalón muy elegante. Me gusta!',
                    imagen: '/images/users/4.avif',

                },
                {
                    nombreUsuario: 'Ana',
                    comentario: 'Muy tiro alto el pantalón para mi gusto',
                    imagen: '/images/users/5.jpeg',
                },
                {
                    nombreUsuario: 'Luciana',
                    comentario: 'Se lo vi a una chica y corrí a comparlo!!',
                    imagen: '/images/users/1.webp',

                }
            ]

        },
        {
            imagen: 'proyecto_integrador/proyecto/public/images/products/jean.jpeg',
            nombre: 'Jean',
            description: 'Jean Slim Fit - Skinny Leg - Tiro Alto',
            comentarios: [
                {
                    nombreUsuario: 'Juana',
                    comentario: 'El Jean muy lindo puedo',
                    imagen: '/images/users/2.jpeg',

                },
                {
                    nombreUsuario: 'Ana',
                    comentario: 'Me encanta, mi jean favorito',
                    imagen: '/images/users/5.jpeg',
                },
                {
                    nombreUsuario: 'Lara',
                    comentario: 'Mi hermana me vió el jean y fue a comprarse el mismo',
                    imagen: '/images/users/3.jpeg',

                }
            ]

        },
        {
            imagen: 'proyecto_integrador/proyecto/public/images/products/top.jpeg',
            nombre: 'Top',
            description: 'Top corto de escote pico cruzado y manga sisa.',
            comentarios: [
                {
                    nombreUsuario: 'Juana',
                    comentario: 'El top queda hermoso',
                    imagen: '/images/users/2.jpeg',

                },
                {
                    nombreUsuario: 'Ana',
                    comentario: 'Muy elegante para salir',
                    imagen: '/images/users/5.jpeg',
                },
                {
                    nombreUsuario: 'Lara',
                    comentario: 'Me gusta!',
                    imagen: '/images/users/3.jpeg',

                }
            ]

        },
        {
            imagen: 'proyecto_integrador/proyecto/public/images/products/campera.jpeg',
            nombre: 'Campera',
            description: 'Cazadora corta de cuello solapa con manga larga.',
            comentarios: [
                {
                    nombreUsuario: 'Matias',
                    comentario: 'La campera que compré es increíblemente abrigada y cómoda!',
                    imagen: '/images/users/4.avif',

                },
                {
                    nombreUsuario: 'Ana',
                    comentario: 'Perfecta para los días fríos de invierno.',
                    imagen: '/images/users/5.jpeg',
                },
                {
                    nombreUsuario: 'Luciana',
                    comentario: '¡Qué buena calidad tiene la campera que elegí! Definitivamente vale la pena.',
                    imagen: '/images/users/1.webp',

                }
            ]

        },
        {
            imagen: 'proyecto_integrador/proyecto/public/images/products/vestido.jpeg',
            nombre: 'vestido',
            description: 'Vestido corto de escote recto y hombros descubiertos.',
            comentarios: [
                {
                    nombreUsuario: 'Juana',
                    comentario: 'Mi nuevo vestido es elegante y me queda genial, estoy muy contenta con la compra',
                    imagen: '/images/users/2.jpeg',

                },
                {
                    nombreUsuario: 'Ana',
                    comentario: 'El vestido que compré tiene un color precioso, me hace sentir muy femenina.',
                    imagen: '/images/users/5.jpeg',
                },
                {
                    nombreUsuario: 'Lara',
                    comentario: 'Qué cómodo es mi vestido nuevo! Ideal para eventos formales y muy favorecedor.',
                    imagen: '/images/users/3.jpeg',

                }
            ]

        },
        {
            imagen: 'proyecto_integrador/proyecto/public/images/products/zapatos.jpeg',
            nombre: 'Zapatos',
            description: 'Zapato destalonado de tacón kitten. Tira trasera con cierre mediante hebilla. Acabado en punta.',
            comentarios: [
                {
                    nombreUsuario: 'Matias',
                    comentario: 'Mis nuevos zapatos son muy cómodos, puedo usarlos todo el día sin problemas.',
                    imagen: '/images/users/4.avif',

                },
                {
                    nombreUsuario: 'Ana',
                    comentario: 'El diseño de mis zapatos nuevos es muy moderno, estoy muy feliz con la elección..',
                    imagen: '/images/users/5.jpeg',
                },
                {
                    nombreUsuario: 'Luciana',
                    comentario: 'Qué buen material tienen mis zapatos nuevos, se nota la calidad en cada paso.',
                    imagen: '/images/users/1.webp',

                }
            ]

        },
        {
            imagen: 'proyecto_integrador/proyecto/public/images/products/pollera.jpeg',
            nombre: 'Pollera',
            description: 'Falda pantalón de tiro alto.',
            comentarios: [
                {
                    nombreUsuario: 'Juana',
                    comentario: 'La pollera que compré es muy versátil, la puedo combinar de muchas formas.',
                    imagen: '/images/users/2.jpeg',

                },
                {
                    nombreUsuario: 'Ana',
                    comentario: 'Me gusta mucho el color de mi nueva pollera, es perfecto para el verano..',
                    imagen: '/images/users/5.jpeg',
                },
                {
                    nombreUsuario: 'Lara',
                    comentario: 'Qué buen ajuste tiene mi pollera nueva, es cómoda y favorecedora.',
                    imagen: '/images/users/3.jpeg',

                }
            ]

        },
        {
            imagen: 'proyecto_integrador/proyecto/public/images/products/blazer.jpeg',
            nombre: 'Blazer',
            description: 'Blazer abierta de cuello y solapa con manga larga acabada en vuelta y hombreras',
            comentarios: [
                {
                    nombreUsuario: 'Matias',
                    comentario: 'Mi nuevo blazer es elegante y perfecto para ocasiones formales, estoy encantada.',
                    imagen: '/images/users/4.avif',

                },
                {
                    nombreUsuario: 'Ana',
                    comentario: 'Qué buen corte tiene mi blazer nuevo, se ajusta muy bien a mi figura.',
                    imagen: '/images/users/5.jpeg',
                },
                {
                    nombreUsuario: 'Luciana',
                    comentario: 'La calidad de mi blazer nuevo es excelente, se nota que está bien hecho.',
                    imagen: '/images/users/1.webp',

                }
            ]

        },
        {
            imagen: 'proyecto_integrador/proyecto/public/images/products/mono.jpeg',
            nombre: 'Mono',
            description: 'Mono largo de cuello redondo con manga sisa y manga corta.',
            comentarios: [
                {
                    nombreUsuario: 'Juana',
                    comentario: 'El enterito que compré es muy versátil, puedo usarlo en muchas ocasiones diferentes.',
                    imagen: '/images/users/2.jpeg',

                },
                {
                    nombreUsuario: 'Ana',
                    comentario: 'Me gusta mucho mi enterito nuevo, es muy llamativo.',
                    imagen: '/images/users/5.jpeg',
                },
                {
                    nombreUsuario: 'Lara',
                    comentario: 'Qué cómodo es mi enterito nuevo, es perfecto para estar cómoda y a la moda.',
                    imagen: '/images/users/3.jpeg',

                }
            ]

        }
        
    ]


}

module.exports = data;