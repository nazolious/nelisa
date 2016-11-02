-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 02, 2016 at 11:06 AM
-- Server version: 5.5.50-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `nelisa`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` char(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_category` (`category`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`) VALUES
(3, 'Canned'),
(1, 'Dairy'),
(4, 'Drinks'),
(5, 'Fruit'),
(8, 'Gifts and Cards'),
(2, 'Grains'),
(6, 'Personal Care'),
(7, 'Sugar-Candy');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product` char(100) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_product` (`product`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product`, `category_id`) VALUES
(1, 'Chakalaka Can', 3),
(2, 'Milk 1l', 1),
(3, 'Imasi', 1),
(4, 'Fanta 500ml', 4),
(5, 'Coke 500ml', 4),
(6, 'Cream Soda 500ml', 4),
(7, 'Bananas - loose', 5),
(8, 'Apples - loose', 5),
(9, 'Rose (plastic)', 8),
(10, 'Valentine Cards', 8),
(11, 'Bread', 2),
(12, 'Iwisa Pap 5kg', 2),
(13, 'Top Class Soy Mince', 2),
(14, 'Shampoo 1 litre', 6),
(15, 'Soap Bar', 6),
(16, 'Mixed Sweets 5s', 7),
(17, 'Heart Chocolates', 7),
(18, 'sinazo', 3);

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE IF NOT EXISTS `purchases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` char(100) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  `cost` char(100) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=156 ;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`id`, `date`, `qty`, `cost`, `product_id`) VALUES
(1, '23-Jan', 3, 'R7,00', 1),
(2, '28-Jan', 15, 'R7,00', 1),
(3, '6-Feb', 15, 'R7,00', 1),
(4, '10-Feb', 15, 'R7,00', 1),
(5, '16-Feb', 2, 'R8,50', 1),
(6, '17-Feb', 10, 'R7,00', 1),
(7, '23-Feb', 3, 'R9,00', 1),
(8, '24-Feb', 10, 'R7,00', 1),
(9, '27-Feb', 15, 'R7,00', 1),
(10, '28-Feb', 3, 'R8,50', 1),
(11, '01-Mar', 3, 'R8,50', 1),
(12, '23-Jan', 4, 'R7,00', 2),
(13, '28-Jan', 25, 'R7,00', 2),
(14, '6-Feb', 10, 'R7,00', 2),
(15, '09-Feb', 3, 'R9,50', 2),
(16, '10-Feb', 10, 'R7,00', 2),
(17, '12-Feb', 3, 'R9,50', 2),
(18, '13-Feb', 15, 'R7,00', 2),
(19, '16-Feb', 6, 'R9,50', 2),
(20, '17-Feb', 15, 'R7,00', 2),
(21, '19-Feb', 1, 'R9,50', 2),
(22, '20-Feb', 15, 'R7,00', 2),
(23, '24-Feb', 20, 'R7,00', 2),
(24, '27-Feb', 20, 'R7,00', 2),
(25, '23-Jan', 1, 'R17,00', 3),
(26, '28-Jan', 15, 'R17,00', 3),
(27, '04-Feb', 4, 'R24,00', 3),
(28, '6-Feb', 25, 'R17,00', 3),
(29, '10-Feb', 10, 'R17,00', 3),
(30, '13-Feb', 20, 'R17,00', 3),
(31, '17-Feb', 15, 'R17,00', 3),
(32, '20-Feb', 10, 'R17,00', 3),
(33, '24-Feb', 15, 'R17,00', 3),
(34, '27-Feb', 15, 'R17,00', 3),
(35, '23-Jan', 2, 'R4,50', 4),
(36, '28-Jan', 24, 'R4,50', 4),
(37, '6-Feb', 24, 'R4,50', 4),
(38, '13-Feb', 12, 'R4,50', 4),
(39, '16-Feb', 1, 'R6,50', 4),
(40, '17-Feb', 12, 'R4,50', 4),
(41, '24-Feb', 6, 'R4,50', 4),
(42, '26-Feb', 2, 'R6,50', 4),
(43, '27-Feb', 12, 'R4,50', 4),
(44, '23-Jan', 3, 'R3,50', 5),
(45, '28-Jan', 36, 'R3,50', 5),
(46, '6-Feb', 36, 'R3,50', 5),
(47, '10-Feb', 18, 'R3,50', 5),
(48, '13-Feb', 12, 'R3,50', 5),
(49, '17-Feb', 24, 'R3,50', 5),
(50, '24-Feb', 18, 'R3,50', 5),
(51, '27-Feb', 24, 'R3,50', 5),
(52, '23-Jan', 4, 'R4,50', 6),
(53, '28-Jan', 24, 'R4,50', 6),
(54, '6-Feb', 18, 'R4,50', 6),
(55, '16-Feb', 2, 'R7,50', 6),
(56, '17-Feb', 12, 'R4,50', 6),
(57, '24-Feb', 6, 'R4,50', 6),
(58, '27-Feb', 12, 'R4,50', 6),
(59, '28-Jan', 4, 'R1,00', 7),
(60, '03-Feb', 12, 'R1,00', 7),
(61, '06-Feb', 8, 'R1,00', 7),
(62, '10-Feb', 4, 'R1,00', 7),
(63, '13-Feb', 4, 'R1,00', 7),
(64, '20-Feb', 20, 'R1,00', 7),
(65, '24-Feb', 10, 'R1,00', 7),
(66, '27-Feb', 10, 'R1,00', 7),
(67, '28-Jan', 10, 'R1,50', 8),
(68, '03-Feb', 100, 'R1,50', 8),
(69, '06-Feb', 100, 'R1,50', 8),
(70, '10-Feb', 20, 'R1,50', 8),
(71, '17-Feb', 60, 'R1,50', 8),
(72, '20-Feb', 90, 'R1,50', 8),
(73, '24-Feb', 90, 'R1,50', 8),
(74, '27-Feb', 60, 'R1,50', 8),
(75, '09-Feb', 20, 'R10,00', 9),
(76, '11-Feb', 20, 'R2,00', 10),
(77, '28-Jan', 30, 'R9,00', 11),
(78, '04-Feb', 4, 'R11,00', 11),
(79, '6-Feb', 30, 'R9,00', 11),
(80, '10-Feb', 10, 'R9,00', 11),
(81, '13-Feb', 5, 'R9,00', 11),
(82, '17-Feb', 15, 'R9,00', 11),
(83, '20-Feb', 10, 'R9,00', 11),
(84, '24-Feb', 15, 'R9,00', 11),
(85, '26-Feb', 1, 'R11,00', 11),
(86, '27-Feb', 20, 'R9,00', 11),
(87, '23-Jan', 3, 'R20,00', 12),
(88, '28-Jan', 15, 'R20,00', 12),
(89, '6-Feb', 5, 'R20,00', 12),
(90, '10-Feb', 5, 'R20,00', 12),
(91, '16-Feb', 1, 'R30,00', 12),
(92, '17-Feb', 5, 'R20,00', 12),
(93, '20-Feb', 5, 'R20,00', 12),
(94, '26-Feb', 1, 'R30,00', 12),
(95, '27-Feb', 10, 'R20,00', 12),
(96, '23-Jan', 5, 'R8,00', 13),
(97, '28-Jan', 10, 'R8,00', 13),
(98, '6-Feb', 10, 'R8,00', 13),
(99, '10-Feb', 15, 'R8,00', 13),
(100, '13-Feb', 5, 'R8,00', 13),
(101, '17-Feb', 5, 'R8,00', 13),
(102, '20-Feb', 10, 'R8,00', 13),
(103, '24-Feb', 15, 'R8,00', 13),
(104, '27-Feb', 15, 'R8,00', 13),
(105, '28-Feb', 5, 'R11,00', 13),
(106, '01-Mar', 3, 'R11,00', 13),
(107, '28-Jan', 1, 'R20,00', 14),
(108, '02-Feb', 1, 'R20,00', 14),
(109, '04-Feb', 2, 'R20,00', 14),
(110, '11-Feb', 2, 'R20,00', 14),
(111, '13-Feb', 3, 'R20,00', 14),
(112, '14-Feb', 1, 'R20,00', 14),
(113, '18-Feb', 1, 'R20,00', 14),
(114, '19-Feb', 2, 'R20,00', 14),
(115, '20-Feb', 2, 'R20,00', 14),
(116, '26-Feb', 2, 'R20,00', 14),
(117, '27-Feb', 5, 'R20,00', 14),
(118, '28-Feb', 2, 'R20,00', 14),
(119, '01-Mar', 2, 'R20,00', 14),
(120, '28-Jan', 3, 'R3,00', 15),
(121, '02-Feb', 3, 'R3,00', 15),
(122, '04-Feb', 5, 'R3,00', 15),
(123, '06-Feb', 5, 'R3,00', 15),
(124, '13-Feb', 5, 'R3,00', 15),
(125, '18-Feb', 5, 'R3,00', 15),
(126, '20-Feb', 3, 'R3,00', 15),
(127, '25-Feb', 5, 'R3,00', 15),
(128, '26-Feb', 5, 'R3,00', 15),
(129, '27-Feb', 5, 'R3,00', 15),
(130, '28-Feb', 3, 'R3,00', 15),
(131, '01-Mar', 5, 'R3,00', 15),
(132, '28-Jan', 60, 'R3,00', 16),
(133, '03-Feb', 240, 'R3,00', 16),
(134, '06-Feb', 150, 'R3,00', 16),
(135, '10-Feb', 150, 'R3,00', 16),
(136, '13-Feb', 50, 'R3,00', 16),
(137, '17-Feb', 12, 'R3,00', 16),
(138, '20-Feb', 20, 'R3,00', 16),
(139, '24-Feb', 8, 'R3,00', 16),
(140, '10-Feb', 20, 'R25,00', 17),
(142, '14-feb', 776, '98', NULL),
(143, '14-feb', 23, '232', NULL),
(144, '20-febbnbnnnbnbn', 600, '99.99', NULL),
(145, '76548', 12, '54', NULL),
(146, '12-feb', 12, '32', NULL),
(147, '12-feb', 12, '22', NULL),
(148, 'sgdgeg', 54533, '123', NULL),
(149, '11111111111111', 3443, '2', NULL),
(150, '14', 12, '333', NULL),
(151, '13-Feb', 122, '123', NULL),
(152, '12-feb', 432, '6546', NULL),
(153, '14-oct', 654, '543211', NULL),
(154, '14-oct', 745251, '2653647', NULL),
(155, '14-oct', 745273, 'R12.00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE IF NOT EXISTS `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` char(100) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  `salesPrice` char(100) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=122 ;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `date`, `qty`, `salesPrice`, `product_id`) VALUES
(1, '8-Feb', 1, 'R10.00', 1),
(2, '9-Feb', 5, 'R10.00', 1),
(3, '10-Feb', 0, 'R10.00', 1),
(4, '11-Feb', 2, 'R10.00', 1),
(5, '12-Feb', 3, 'R10.00', 1),
(6, '13-Feb', 7, 'R10.00', 1),
(7, '14-Feb', 3, 'R10.00', 1),
(8, '9-Feb', 3, 'R10.00', 2),
(9, '10-Feb', 5, 'R10.00', 2),
(10, '11-Feb', 5, 'R10.00', 2),
(11, '12-Feb', 3, 'R10.00', 2),
(12, '13-Feb', 6, 'R10.00', 2),
(13, '14-Feb', 6, 'R10.00', 2),
(14, '8-Feb', 2, 'R25.00', 3),
(15, '9-Feb', 6, 'R25.00', 3),
(16, '10-Feb', 4, 'R25.00', 3),
(17, '11-Feb', 4, 'R25.00', 3),
(18, '12-Feb', 9, 'R25.00', 3),
(19, '13-Feb', 6, 'R25.00', 3),
(20, '14-Feb', 5, 'R25.00', 3),
(21, '8-Feb', 4, 'R6.50', 4),
(22, '9-Feb', 3, 'R6.50', 4),
(23, '10-Feb', 1, 'R6.50', 4),
(24, '11-Feb', 2, 'R6.50', 4),
(25, '12-Feb', 0, 'R6.50', 4),
(26, '13-Feb', 6, 'R6.50', 4),
(27, '14-Feb', 7, 'R6.50', 4),
(28, '8-Feb', 4, 'R6.50', 5),
(29, '9-Feb', 8, 'R6.50', 5),
(30, '10-Feb', 3, 'R6.50', 5),
(31, '11-Feb', 3, 'R6.50', 5),
(32, '12-Feb', 2, 'R6.50', 5),
(33, '13-Feb', 8, 'R6.50', 5),
(34, '14-Feb', 14, 'R6.50', 5),
(35, '8-Feb', 1, 'R7.50', 6),
(36, '9-Feb', 5, 'R7.50', 6),
(37, '10-Feb', 2, 'R7.50', 6),
(38, '11-Feb', 1, 'R7.50', 6),
(39, '12-Feb', 1, 'R7.50', 6),
(40, '13-Feb', 4, 'R7.50', 6),
(41, '14-Feb', 8, 'R7.50', 6),
(42, '8-Feb', 5, 'R2.00', 7),
(43, '9-Feb', 5, 'R2.00', 7),
(44, '10-Feb', 3, 'R2.00', 7),
(45, '11-Feb', 4, 'R2.00', 7),
(46, '12-Feb', 2, 'R2.00', 7),
(47, '13-Feb', 4, 'R2.00', 7),
(48, '14-Feb', 5, 'R2.00', 7),
(49, '8-Feb', 2, 'R2.00', 8),
(50, '9-Feb', 0, 'R2.00', 8),
(51, '10-Feb', 2, 'R2.00', 8),
(52, '11-Feb', 3, 'R2.00', 8),
(53, '12-Feb', 3, 'R2.00', 8),
(54, '13-Feb', 2, 'R2.00', 8),
(55, '14-Feb', 9, 'R2.00', 8),
(56, '10-Feb', 1, 'R15.00', 9),
(57, '11-Feb', 3, 'R15.00', 9),
(58, '12-Feb', 2, 'R15.00', 9),
(59, '13-Feb', 7, 'R15.00', 9),
(60, '14-Feb', 1, 'R15.00', 9),
(61, '12-Feb', 6, 'R4.00', 10),
(62, '13-Feb', 5, 'R4.00', 10),
(63, '14-Feb', 3, 'R4.00', 10),
(64, '8-Feb', 2, 'R12.00', 11),
(65, '9-Feb', 7, 'R12.00', 11),
(66, '10-Feb', 2, 'R12.00', 11),
(67, '11-Feb', 3, 'R12.00', 11),
(68, '12-Feb', 2, 'R12.00', 11),
(69, '13-Feb', 5, 'R12.00', 11),
(70, '14-Feb', 7, 'R12.00', 11),
(71, '8-Feb', 1, 'R30.00', 12),
(72, '9-Feb', 2, 'R30.00', 12),
(73, '10-Feb', 1, 'R30.00', 12),
(74, '11-Feb', 0, 'R30.00', 12),
(75, '12-Feb', 0, 'R30.00', 12),
(76, '13-Feb', 3, 'R30.00', 12),
(77, '14-Feb', 3, 'R30.00', 12),
(78, '8-Feb', 2, 'R12.00', 13),
(79, '9-Feb', 1, 'R12.00', 13),
(80, '10-Feb', 3, 'R12.00', 13),
(81, '11-Feb', 2, 'R12.00', 13),
(82, '12-Feb', 2, 'R12.00', 13),
(83, '13-Feb', 4, 'R12.00', 13),
(84, '14-Feb', 7, 'R12.00', 13),
(85, '8-Feb', 0, 'R30.00', 14),
(86, '9-Feb', 0, 'R30.00', 14),
(87, '10-Feb', 1, 'R30.00', 14),
(88, '11-Feb', 1, 'R30.00', 14),
(89, '12-Feb', 0, 'R30.00', 14),
(90, '13-Feb', 4, 'R30.00', 14),
(91, '14-Feb', 0, 'R30.00', 14),
(92, '8-Feb', 1, 'R6.00', 15),
(93, '9-Feb', 0, 'R6.00', 15),
(94, '10-Feb', 0, 'R6.00', 15),
(95, '11-Feb', 0, 'R6.00', 15),
(96, '12-Feb', 2, 'R6.00', 15),
(97, '13-Feb', 2, 'R6.00', 15),
(98, '14-Feb', 0, 'R6.00', 15),
(99, '8-Feb', 9, 'R3.00', 16),
(100, '9-Feb', 3, 'R3.00', 16),
(101, '10-Feb', 7, 'R2.00', 16),
(102, '11-Feb', 8, 'R2.00', 16),
(103, '12-Feb', 3, 'R3.00', 16),
(104, '13-Feb', 6, 'R3.00', 16),
(105, '14-Feb', 18, 'R3.00', 16),
(106, '10-Feb', 3, 'R35.00', 17),
(107, '11-Feb', 5, 'R35.00', 17),
(108, '12-Feb', 2, 'R35.00', 17),
(109, '13-Feb', 10, 'R35.00', 17),
(112, 'm bm5', 5, '5', NULL),
(113, 'hfgfg', 4, '4', NULL),
(114, '11111111111111', 4, '43', NULL),
(115, 'nnnbnbnbnbnb', 4, '5', NULL),
(116, '20-febbnbnnnbnbn', 8765555, '765', NULL),
(121, '2016-10-06', 132, '123', 1);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `purchases`
--
ALTER TABLE `purchases`
  ADD CONSTRAINT `purchases_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
