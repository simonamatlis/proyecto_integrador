CREATE schema proyectoInt2; 
USE proyectoInt2;

CREATE TABLE usuario (
id_usuario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
email TEXT NOT NULL,
contra TEXT NOT NULL,
fecha DATE NOT NULL,
dni INT NOT NULL,
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
VALUES(default, 'pedro@gmail.com', 'pedRo', '2024-04-08', 45891234,null, null);

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
VALUES (default, 1,'remera', 'remera azul', 'hola', null, null, null),
(default, 2, 'pantalón', 'pantalón azul','hola como ', null, null, null),
(default, 3, 'jean', 'jean azul','hola como estás', null, null, null),
(default, 4, 'top', 'top azul','bien', null, null, null),
(default, 5, 'campera', 'campera azul','bien y', null, null, null),
(default, 1, 'calza', 'calza azul' 'bien y vos', null, null, null),
(default, 2, 'zapatos', 'zapatos azul''bien y vos??', null, null, null),
(default, 3, 'corpiño', 'corpiño azul' 'bien y vos', null, null, null),
(default, 4, 'remera', 'remera blanca''bien y vos??', null, null, null),
(default, 4, 'buzo', 'buzo blanca''bien y vos??', null, null, null);

use proyectoInt2;
INSERT INTO comentarios (id_comentario, user_id, producto_id, comentario, createdAt,updatedAt, deletedAt)
VALUES (default, 1, 1, 'hola', null, null, null),
(default, 2, 1, 'hola como', null, null, null),
(default, 3, 1, 'hola como estás', null, null, null),
(default, 4, 2, 'hola como estás??', null, null, null),
(default, 5, 2, 'hola como estás??', null, null, null),
(default, 1, 2, 'hola como estás??', null, null, null),
(default, 2, 3, 'hola como estás??', null, null, null),
(default, 3, 3, 'hola como estás??', null, null, null),
(default, 4, 3, 'hola como estás??', null, null, null),
(default, 5, 4, 'hola como estás??', null, null, null),
(default, 1, 4, 'hola como estás??', null, null, null),
(default, 2, 4, 'hola como estás??', null, null, null),
(default, 3, 5, 'hola como estás??', null, null, null),
(default, 4, 5, 'hola como estás??', null, null, null),
(default, 5, 5, 'hola como estás??', null, null, null),
(default, 1, 6, 'hola como estás??', null, null, null),
(default, 2, 6, 'hola como estás??', null, null, null),
(default, 3, 6, 'hola como estás??', null, null, null),
(default, 4, 7, 'hola como estás??', null, null, null),
(default, 5, 7, 'hola como estás??', null, null, null),
(default, 1, 7, 'hola como estás??', null, null, null),
(default, 2, 8, 'hola como estás??', null, null, null),
(default, 3, 8, 'hola como estás??', null, null, null),
(default, 4, 8, 'hola como estás??', null, null, null),
(default, 5, 9, 'hola como estás??', null, null, null),
(default, 1, 9, 'hola como estás??', null, null, null),
(default, 2, 9, 'hola como estás??', null, null, null),
(default, 3, 10, 'hola como estás??', null, null, null),
(default, 4, 10, 'hola como estás??', null, null, null),
(default, 5, 10, 'hola como estás??', null, null, null);


