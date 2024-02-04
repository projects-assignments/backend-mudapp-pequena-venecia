-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: sql11.freesqldatabase.com    Database: sql11680539
-- ------------------------------------------------------
-- Server version	5.5.62-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrier`
--

DROP TABLE IF EXISTS `carrier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrier` (
  `carrier_id` int(11) NOT NULL AUTO_INCREMENT,
  `availability` tinyint(4) DEFAULT '1',
  `location` varchar(45) DEFAULT NULL,
  `car_rate` decimal(10,0) DEFAULT NULL,
  `van_rate` decimal(10,0) DEFAULT NULL,
  `average_rating` decimal(10,0) DEFAULT NULL,
  `User_user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`carrier_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrier`
--

LOCK TABLES `carrier` WRITE;
/*!40000 ALTER TABLE `carrier` DISABLE KEYS */;
INSERT INTO `carrier` VALUES (11,0,'Barcelona',48,70,5,6),(12,1,'Barcelona, Gràcia',45,75,4,7),(13,0,'Barcelona, Sants-Montjuïc',49,90,5,8),(14,0,'Barcelona, Sant Martí',48,78,4,9),(15,1,'Barcelona, Sarrià-Sant Gervasi',47,85,5,10);
/*!40000 ALTER TABLE `carrier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `client_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (16,1),(17,2),(18,3),(19,4),(20,5);
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_type` varchar(45) DEFAULT NULL,
  `payment_status` varchar(20) DEFAULT NULL,
  `service_service_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (51,'Tarjeta de crédito','Aprobado',21),(52,'Efectivo','Pendiente',22),(53,'PayPal','Completado',23),(54,'Transferencia bancaria','Aprobado',24),(55,'Tarjeta de débito','Completado',25);
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating` (
  `rating_id` int(11) NOT NULL AUTO_INCREMENT,
  `carrier_carrier_id` int(11) DEFAULT NULL,
  `rating_review` varchar(45) DEFAULT NULL,
  `rating_grade` int(11) DEFAULT NULL,
  `service_service_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`rating_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES (41,14,'Mal servicio.',2,24),(42,12,'Entrega retrasada y mala atención.',2,22),(43,13,'Entrega retrasada.',3,23),(44,11,'Rápido y eficiente.',5,21),(45,15,'Buen trato al cliente.',4,25);
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service` (
  `service_id` int(11) NOT NULL AUTO_INCREMENT,
  `package_size` varchar(45) DEFAULT NULL,
  `origin` varchar(45) DEFAULT NULL,
  `destination` varchar(45) DEFAULT NULL,
  `date_time` datetime DEFAULT NULL,
  `service_status` varchar(45) DEFAULT 'booked',
  `carrier_carrier_id` int(11) DEFAULT NULL,
  `client_client_id` int(11) DEFAULT NULL,
  `payment_payment_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`service_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (21,'Pequeño','Barcelona','Hospitalet de Llobregat','2024-01-29 14:00:00','canceled',11,16,NULL),(22,'Mediano','Barcelona','Badalona','2024-01-29 15:30:00','confirmed',12,17,NULL),(23,'Grande','Barcelona','Sant Cugat del Vallès','2024-01-29 16:45:00','in progress',13,18,NULL),(24,'Pequeño','Barcelona','Santa Coloma de Gramenet','2024-01-30 10:00:00','finished',14,19,NULL),(25,'Mediano','Barcelona','Hospitalet de Llobregat','2024-01-30 12:30:00','in progress',15,20,NULL),(27,'pequeño','girona','barcelona','2024-05-02 00:00:00','canceled',14,2,NULL);
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) DEFAULT NULL,
  `user_lastname` varchar(20) DEFAULT NULL,
  `user_password` varchar(100) DEFAULT NULL,
  `user_rol` varchar(20) DEFAULT NULL,
  `user_email` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'María','Suarez','12345','client','maria.perez@mail.com'),(2,'Carlos','Rodríguez','abcde','client','carlos.rodriguez@mai'),(3,'Juan','López','qwerty','client','juan.lopez@mail.com'),(4,'Ana','García','56789','client','ana.garcia@mail.com'),(5,'Pedro','Martínez','zxcvb','client','pedro.martinez@mail.'),(6,'Javier','Torres','asdfg','carrier','javier.torres@mail.c'),(7,'Laura','Sánchez','qazws','carrier','laura.sanchez@mail.c'),(8,'Sergio','Ramírez','98765','carrier','sergio.ramirez@mail.'),(9,'Marta','López','plmko','carrier','marta.lopez@mail.com'),(10,'Raúl','González','yxcvb','carrier','raul.gonzalez@mail.c'),(11,'Isadora','Suarez','$2b$10$/nBAmTMbUQ2vrDNHNgVSJOYY5K/poqW1YtssgOKyqOKX13JcHdii6','Client','Isadora@gmail.com'),(12,'Junior','Perez','$2b$10$wDaOTb.MyLa2z0lD1wY3.Oz.DFov.P1unKMgmGotIGe/Wsn2xo/86','Carrier','Junuior@gmail.com'),(13,'Juan','Perez','$2b$10$1q0Cpnden1rZCuFQQWZtWePQT1TBgy5Qx6RXIsQsS4L8gYTzMhIp2','client','juan@mail.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle` (
  `vehicle_id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicle_plate` varchar(45) DEFAULT NULL,
  `vehicle_brand` varchar(45) DEFAULT NULL,
  `vehicle_model` varchar(45) DEFAULT NULL,
  `carrier_carrier_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`vehicle_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES (1,'','','',0),(31,'ABC123','Mercedes-Benz','Sprinter',11),(32,'XYZ456','Ford','Transit',12),(33,'DEF789','Honda','Camry',13),(34,'GHI101','Renault','Master',14),(35,'JKL111','Peugeot','Boxer',15);
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-05  0:15:51
