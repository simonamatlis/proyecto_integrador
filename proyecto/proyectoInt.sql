productosproductoscomentariosactor_episodeCREATE schema proyectoInt2; 
USE proyectoInt2;

CREATE TABLE usuario (
id_usuario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
email TEXT NOT NULL,
contra TEXT NOT NULL,
fecha DATE NOT NULL,
dni INT NOT NULL,
profilePic TEXT,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 
);

CREATE TABLE productos (
id_producto INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
user_id INT UNSIGNED,
nombre_imagen TEXT NOT NULL,
nombre_producto TEXT NOT NULL,
descripción_producto TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES usuario(id_usuario)
);

CREATE TABLE comentarios (
id_comentario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
user_id INT UNSIGNED,
producto_id INT UNSIGNED,
comentario TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES usuario(id_usuario),
FOREIGN KEY (producto_id) REFERENCES productos(id_producto)
);

INSERT INTO usuario (id_usuario,email,contra,fecha, dni,createdAt,deletedAt)
VALUES(default, 'luciana@gmail.com', 'luCHi', '2024-04-08', 45891234,null, null);

INSERT INTO usuario
VALUES(default, 'juana@gmail.com', 'Juana', '2024-03-08', 46791334,null, null);

INSERT INTO usuario
VALUES(default, 'lara@gmail.com', 'lara', '2024-03-10', 42450334,null, null);

INSERT INTO usuario
VALUES(default, 'matias@gmail.com', 'Matias', '2024-02-25', 46707834,null, null);

INSERT INTO usuario
VALUES(default, 'ana@gmail.com', 'ana', '2024-04-03', 42791344,null, null);

use proyectoInt2;
INSERT INTO productos (id_producto, user_id, nombre_imagen, nombre_producto, descripción_producto, createdAt, updatedAt,deletedAt)
VALUES                (default, 1,'images/products/remera.png', 'remera', 'Remera escote recto y hombros semicubiertos.', null, null, null),
					  (default, 2, 'pantalón', 'images/products/pantalon.png','Pantalón de tiro alto y cintura con trabillas. Pierna recta. ', null, null, null),
					  (default, 3, 'jean', 'images/products/jean.png','Jean Slim Fit - Skinny Leg - Tiro Alto', null, null, null),
				      (default, 4, 'top', 'images/products/top.png','Top corto de escote pico cruzado y manga sisa.', null, null, null),
					  (default, 5, 'campera', 'images/products/campera.png','Cazadora corta de cuello solapa con manga larga', null, null, null),
					  (default, 1, 'vestido', 'images/products/vestido.png', 'Vestido corto de escote recto y hombros descubiertos.', null, null, null),
	                  (default, 2, 'zapatos', 'images/products/zapatos.png','Zapato destalonado de tacón kitten. Tira trasera con cierre mediante hebilla. Acabado en punta.', null, null, null),
			          (default, 3, 'pollera', 'images/products/pollera.png','Falda pantalón de tiro alto.', null, null, null),
	                  (default, 4, 'blazer', 'images/products/blazer.png','Blazer abierta de cuello y solapa con manga larga acabada en vuelta y hombreras.', null, null, null),
					  (default, 5, 'mono', 'images/products/mono.png', 'Mono largo de cuello redondo con manga sisa y manga corta. ', null, null, null);

use proyectoInt2;
INSERT INTO comentarios (id_comentario, user_id, producto_id, comentario, createdAt,updatedAt, deletedAt)
VALUES 					(default, 1, 1, 'Muy linda remera', null, null, null),
						(default, 2, 1, 'Los brillos que tiene es un detalle muy lindo', null, null, null),
						(default, 3, 1, 'Me encanta como queda puesta!', null, null, null),
                        
						(default, 4, 2, 'Muy tiro alto el pantalón para mi gusto', null, null, null),
						(default, 5, 2, 'Un pantalón muy elegante. Me gusta!', null, null, null),
						(default, 1, 2, 'Se lo vi a una chica y corrí a comparlo!!', null, null, null),
                        
						(default, 2, 3, 'El Jean muy lindo puedo', null, null, null),
						(default, 3, 3, 'Me encanta, mi jean favorito', null, null, null),
                        (default, 4, 3, 'Mi hermana me vió el jean y fue a comprarse el mismo ',  null, null, null),
						
                        (default, 5, 4, 'El top queda hermoso', null, null, null),
						(default, 1, 4, 'Muy elegante para salir', null, null, null),
						(default, 2, 4, 'Me gusta!', null, null, null),
						
                        (default, 3, 5, 'La campera que compré es increíblemente abrigada y cómoda! ', null, null, null),
						(default, 4, 5, 'Perfecta para los días fríos de invierno.', null, null, null),
						(default, 5, 5, '¡Qué buena calidad tiene la campera que elegí! Definitivamente vale la pena.', null, null, null),
						
                        (default, 1, 6, 'Mi nuevo vestido es elegante y me queda genial, estoy muy contenta con la compra.', null, null, null),
						(default, 2, 6, 'El vestido que compré tiene un color precioso, me hace sentir muy femenina.', null, null, null),
						(default, 3, 6, 'Qué cómodo es mi vestido nuevo! Ideal para eventos formales y muy favorecedor.', null, null, null),
						
                        (default, 4, 7, 'Mis nuevos zapatos son muy cómodos, puedo usarlos todo el día sin problemas.', null, null, null),
						(default, 5, 7, 'El diseño de mis zapatos nuevos es muy moderno, estoy muy feliz con la elección.', null, null, null),
                        (default, 1, 7, 'Qué buen material tienen mis zapatos nuevos, se nota la calidad en cada paso.', null, null, null),
						
                        (default, 2, 8, 'La pollera que compré es muy versátil, la puedo combinar de muchas formas.', null, null, null),
						(default, 3, 8, 'Me gusta mucho el color de mi nueva pollera, es perfecto para el verano.', null, null, null),
						(default, 4, 8, 'Qué buen ajuste tiene mi pollera nueva, es cómoda y favorecedora.', null, null, null),
						
                        (default, 5, 9, 'Mi nuevo blazer es elegante y perfecto para ocasiones formales, estoy encantada.', null, null, null),
						(default, 1, 9, 'Qué buen corte tiene mi blazer nuevo, se ajusta muy bien a mi figura.', null, null, null),
						(default, 2, 9, 'La calidad de mi blazer nuevo es excelente, se nota que está bien hecho.', null, null, null),
						
                        (default, 3, 10, 'El enterito que compré es muy versátil, puedo usarlo en muchas ocasiones diferentes.', null, null, null),
						(default, 4, 10, 'Me gusta mucho mi enterito nuevo, es muy llamativo.', null, null, null),
						(default, 5, 10, 'Qué cómodo es mi enterito nuevo, es perfecto para estar cómoda y a la moda.', null, null, null);


