-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 22, 2024 at 12:06 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proyectoInt2`
--

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentario` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `producto_id` int(10) UNSIGNED DEFAULT NULL,
  `comentario` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id_comentario`, `user_id`, `producto_id`, `comentario`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, 'Muy linda remera', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(2, 2, 1, 'Los brillos que tiene es un detalle muy lindo', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(3, 3, 1, 'Me encanta como queda puesta!', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(4, 4, 2, 'Muy tiro alto el pantalón para mi gusto', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(5, 5, 2, 'Un pantalón muy elegante. Me gusta!', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(6, 1, 2, 'Se lo vi a una chica y corrí a comparlo!!', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(7, 2, 3, 'El Jean muy lindo puedo', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(8, 3, 3, 'Me encanta, mi jean favorito', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(9, 4, 3, 'Mi hermana me vió el jean y fue a comprarse el mismo ', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(10, 5, 4, 'El top queda hermoso', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(11, 1, 4, 'Muy elegante para salir', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(12, 2, 4, 'Me gusta!', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(13, 3, 5, 'La campera que compré es increíblemente abrigada y cómoda! ', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(14, 4, 5, 'Perfecta para los días fríos de invierno.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(15, 5, 5, '¡Qué buena calidad tiene la campera que elegí! Definitivamente vale la pena.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(16, 1, 6, 'Mi nuevo vestido es elegante y me queda genial, estoy muy contenta con la compra.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(17, 2, 6, 'El vestido que compré tiene un color precioso, me hace sentir muy femenina.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(18, 3, 6, 'Qué cómodo es mi vestido nuevo! Ideal para eventos formales y muy favorecedor.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(19, 4, 7, 'Mis nuevos zapatos son muy cómodos, puedo usarlos todo el día sin problemas.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(20, 5, 7, 'El diseño de mis zapatos nuevos es muy moderno, estoy muy feliz con la elección.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(21, 1, 7, 'Qué buen material tienen mis zapatos nuevos, se nota la calidad en cada paso.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(22, 2, 8, 'La pollera que compré es muy versátil, la puedo combinar de muchas formas.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(23, 3, 8, 'Me gusta mucho el color de mi nueva pollera, es perfecto para el verano.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(24, 4, 8, 'Qué buen ajuste tiene mi pollera nueva, es cómoda y favorecedora.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(25, 5, 9, 'Mi nuevo blazer es elegante y perfecto para ocasiones formales, estoy encantada.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(26, 1, 9, 'Qué buen corte tiene mi blazer nuevo, se ajusta muy bien a mi figura.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(27, 2, 9, 'La calidad de mi blazer nuevo es excelente, se nota que está bien hecho.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(28, 3, 10, 'El enterito que compré es muy versátil, puedo usarlo en muchas ocasiones diferentes.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(29, 4, 10, 'Me gusta mucho mi enterito nuevo, es muy llamativo.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(30, 5, 10, 'Qué cómodo es mi enterito nuevo, es perfecto para estar cómoda y a la moda.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `nombre_imagen` text NOT NULL,
  `nombre_producto` text NOT NULL,
  `descripcion_producto` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id_producto`, `user_id`, `nombre_imagen`, `nombre_producto`, `descripcion_producto`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 'images/products/remera.png', 'remera', 'Remera escote recto y hombros semicubiertos.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(2, 2, 'pantalón', 'images/products/pantalon.png', 'Pantalón de tiro alto y cintura con trabillas. Pierna recta. ', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(3, 3, 'jean', 'images/products/jean.png', 'Jean Slim Fit - Skinny Leg - Tiro Alto', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(4, 4, 'top', 'images/products/top.png', 'Top corto de escote pico cruzado y manga sisa.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(5, 5, 'campera', 'images/products/campera.png', 'Cazadora corta de cuello solapa con manga larga', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(6, 1, 'vestido', 'images/products/vestido.png', 'Vestido corto de escote recto y hombros descubiertos.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(7, 2, 'zapatos', 'images/products/zapatos.png', 'Zapato destalonado de tacón kitten. Tira trasera con cierre mediante hebilla. Acabado en punta.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(8, 3, 'pollera', 'images/products/pollera.png', 'Falda pantalón de tiro alto.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(9, 4, 'blazer', 'images/products/blazer.png', 'Blazer abierta de cuello y solapa con manga larga acabada en vuelta y hombreras.', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(10, 5, 'mono', 'images/products/mono.png', 'Mono largo de cuello redondo con manga sisa y manga corta. ', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(10) UNSIGNED NOT NULL,
  `usuario` text NOT NULL,
  `email` text NOT NULL,
  `contra` text NOT NULL,
  `fecha` date NOT NULL,
  `dni` int(11) NOT NULL,
  `profilePic` text NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `usuario`, `email`, `contra`, `fecha`, `dni`, `profilePic`, `updatedAt`, `createdAt`, `deletedAt`) VALUES
(1, 'Luciana', 'luciana@gmail.com', 'luCHi', '2024-04-08', 45891234, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/LDR2019-cr.jpg/440px-LDR2019-cr.jpg', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(2, 'Juana', 'juana@gmail.com', 'Juana', '2024-03-08', 46791334, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg/480px-2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(3, 'Lara', 'lara@gmail.com', 'lara', '2024-03-10', 42450334, 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Madison_Beer_2019_by_Glenn_Francis_%28cropped%29.jpg/440px-Madison_Beer_2019_by_Glenn_Francis_%28cropped%29.jpg', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(4, 'Matias', 'matias@gmail.com', 'Matias', '2024-02-25', 46707834, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Emilia_Attias_en_2017_02.jpg/470px-Emilia_Attias_en_2017_02.jpg', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL),
(5, 'Ana', 'ana@gmail.com', 'ana', '2024-04-03', 42791344, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Megan_Fox_%2851914406561%29_%28cropped%29_%28cropped%29.jpg/440px-Megan_Fox_%2851914406561%29_%28cropped%29_%28cropped%29.jpg', '2024-06-20 23:21:55', '2024-06-20 23:21:55', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentario` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id_producto`);

--
-- Constraints for table `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
