-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 10-02-2023 a las 17:43:28
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `aeropuerto_argentino`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `airline`
--

CREATE TABLE `airline` (
  `airline_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `airline`
--

INSERT INTO `airline` (`airline_id`, `name`, `created_at`, `updated_at`) VALUES
(0, 'AEROLINEAS ARGENTINAS', '2023-01-31 15:28:55', '2023-01-31 15:28:55'),
(3, 'FLYBONDI', '2023-01-31 15:55:02', '2023-01-31 15:55:02'),
(4, 'JETSMART', '2023-01-31 15:56:00', '2023-01-31 15:56:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `booking`
--

CREATE TABLE `booking` (
  `booking_id` int(11) NOT NULL,
  `passenger_id` int(11) NOT NULL,
  `flight_id` int(11) NOT NULL,
  `seat` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `booking`
--

INSERT INTO `booking` (`booking_id`, `passenger_id`, `flight_id`, `seat`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 1, '2023-01-31 15:33:01', '2023-01-31 15:33:01'),
(5, 1, 3, 1, '2023-01-31 19:30:35', '2023-01-31 19:30:35'),
(8, 1, 2, 1, '2023-01-31 20:22:59', '2023-01-31 20:22:59'),
(9, 1, 2, 1, '2023-01-31 20:34:25', '2023-01-31 20:34:25'),
(10, 1, 2, 1, '2023-01-31 20:34:45', '2023-01-31 20:34:45'),
(11, 2, 5, 1, '2023-01-31 20:47:32', '2023-01-31 20:47:32'),
(12, 2, 2, 1, '2023-02-01 01:54:19', '2023-02-01 01:54:19'),
(13, 2, 3, 1, '2023-02-01 01:55:06', '2023-02-01 01:55:06'),
(14, 1, 5, 1, '2023-02-01 14:16:03', '2023-02-01 14:16:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `flight`
--

CREATE TABLE `flight` (
  `flight_id` int(11) NOT NULL,
  `origin` varchar(50) NOT NULL,
  `destination` varchar(50) NOT NULL,
  `departure_time` timestamp NULL DEFAULT NULL,
  `boarding_time` timestamp NULL DEFAULT NULL,
  `seats_available` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `airline_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `flight`
--

INSERT INTO `flight` (`flight_id`, `origin`, `destination`, `departure_time`, `boarding_time`, `seats_available`, `created_at`, `updated_at`, `airline_id`) VALUES
(2, 'AEP', 'MZA', '2023-02-28 15:07:30', '2023-02-28 16:07:30', 295, '2023-01-31 15:29:43', '2023-02-01 01:54:19', 0),
(3, 'AEP', 'BRC', '2023-02-04 16:18:35', '2023-02-20 17:18:35', 293, '2023-01-31 16:19:24', '2023-02-01 01:55:06', 0),
(4, 'NQN', 'AEP', '2023-03-01 16:19:32', '2023-03-01 17:19:32', 300, '2023-01-31 16:20:03', '2023-01-31 16:20:03', 3),
(5, 'AEP', 'ROS', '2023-02-24 16:20:09', '2023-02-24 17:20:09', 297, '2023-01-31 16:21:09', '2023-02-01 14:16:03', 4),
(6, 'NQN', 'BRC', '2023-02-23 20:40:34', '2023-02-23 21:40:34', 0, '2023-01-31 20:41:00', '2023-01-31 20:41:00', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `passenger`
--

CREATE TABLE `passenger` (
  `passenger_id` int(11) NOT NULL,
  `dni` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL,
  `name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `passenger`
--

INSERT INTO `passenger` (`passenger_id`, `dni`, `email`, `password`, `name`, `last_name`, `created_at`, `updated_at`) VALUES
(1, 37171074, 'francostrato1@gmail.com', '1234', 'FRANCO', 'LOSA', '2023-01-31 15:32:02', '2023-01-31 15:32:02'),
(2, 12012433, 'patanediana@gmail.com', '1234', 'DIANA', 'PATANE', '2023-01-31 20:47:10', '2023-01-31 20:47:10'),
(3, 38919291, 'KIWAMODEL@GMAIL.COM', '1234', 'NANCY', 'NAVARRO', '2023-02-01 14:36:31', '2023-02-01 14:36:31'),
(4, 35385353, 'FABRICIO_622@GMAIL.COM', '1234567', 'FABRICIO', 'LOSA', '2023-02-01 15:09:26', '2023-02-01 15:09:26'),
(5, 113583950, 'JAVIERLOSA@GMAIL.COM', '$2a$10$gRR5PMJD3eFkZKlueLkneOz4.KUpmZNjoIyPLv9sZvhrq46LF.U.S', 'JAVIER', 'LOSA', '2023-02-01 15:20:54', '2023-02-01 15:20:54');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `airline`
--
ALTER TABLE `airline`
  ADD PRIMARY KEY (`airline_id`);

--
-- Indices de la tabla `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`booking_id`),
  ADD KEY `passenger_id` (`passenger_id`),
  ADD KEY `flight_id_2` (`flight_id`) USING BTREE;

--
-- Indices de la tabla `flight`
--
ALTER TABLE `flight`
  ADD PRIMARY KEY (`flight_id`),
  ADD KEY `airline_id` (`airline_id`);

--
-- Indices de la tabla `passenger`
--
ALTER TABLE `passenger`
  ADD PRIMARY KEY (`passenger_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `airline`
--
ALTER TABLE `airline`
  MODIFY `airline_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `booking`
--
ALTER TABLE `booking`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `flight`
--
ALTER TABLE `flight`
  MODIFY `flight_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `passenger`
--
ALTER TABLE `passenger`
  MODIFY `passenger_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`flight_id`) REFERENCES `flight` (`flight_id`),
  ADD CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`passenger_id`) REFERENCES `passenger` (`passenger_id`);

--
-- Filtros para la tabla `flight`
--
ALTER TABLE `flight`
  ADD CONSTRAINT `flight_ibfk_1` FOREIGN KEY (`airline_id`) REFERENCES `airline` (`airline_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
