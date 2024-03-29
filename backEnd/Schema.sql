-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema harmony
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema harmony
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `harmony` DEFAULT CHARACTER SET utf8mb3 ;
USE `harmony` ;

-- -----------------------------------------------------
-- Table `harmony`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `harmony`.`admin` (
  `idadmin` INT NOT NULL AUTO_INCREMENT,
  `admin` VARCHAR(85) NOT NULL,
  `password` VARCHAR(85) NOT NULL,
  `image` LONGTEXT NULL DEFAULT NULL,
  `userType` VARCHAR(85) NOT NULL,
  PRIMARY KEY (`idadmin`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `harmony`.`calendrier`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `harmony`.`calendrier` (
  `idcalendrier` INT NOT NULL AUTO_INCREMENT,
  `date` VARCHAR(45) NOT NULL,
  `event` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcalendrier`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `harmony`.`teachers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `harmony`.`teachers` (
  `idteacher` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(85) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `image` LONGTEXT NOT NULL,
  `number` INT NOT NULL,
  `admin_idadmin` INT NOT NULL,
  `class` VARCHAR(45) NOT NULL,
  `userType` VARCHAR(85) NOT NULL,
  PRIMARY KEY (`idteacher`),
  INDEX `fk_teachers_admin1_idx` (`admin_idadmin` ASC) VISIBLE,
  CONSTRAINT `fk_teachers_admin1`
    FOREIGN KEY (`admin_idadmin`)
    REFERENCES `harmony`.`admin` (`idadmin`))
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `harmony`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `harmony`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(85) NOT NULL,
  `email` VARCHAR(455) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `Birthday` DATE NOT NULL,
  `Number` INT NOT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB
AUTO_INCREMENT = 37
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `harmony`.`chat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `harmony`.`chat` (
  `idchat` INT NOT NULL AUTO_INCREMENT,
  `latest_msg` LONGTEXT NOT NULL,
  `users_idusers` INT NOT NULL,
  `teachers_idteacher` INT NOT NULL,
  PRIMARY KEY (`idchat`),
  INDEX `fk_chat_users1_idx` (`users_idusers` ASC) VISIBLE,
  INDEX `fk_chat_teachers1_idx` (`teachers_idteacher` ASC) VISIBLE,
  CONSTRAINT `fk_chat_teachers1`
    FOREIGN KEY (`teachers_idteacher`)
    REFERENCES `harmony`.`teachers` (`idteacher`),
  CONSTRAINT `fk_chat_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `harmony`.`users` (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `harmony`.`classes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `harmony`.`classes` (
  `idclasses` INT NOT NULL AUTO_INCREMENT,
  `class_name` VARCHAR(85) NOT NULL,
  `imageEmploi` LONGTEXT NOT NULL,
  `teachers_idteacher` INT NOT NULL,
  `admin_idadmin` INT NOT NULL,
  PRIMARY KEY (`idclasses`),
  INDEX `fk_classes_teachers1_idx` (`teachers_idteacher` ASC) VISIBLE,
  INDEX `fk_classes_admin1_idx` (`admin_idadmin` ASC) VISIBLE,
  CONSTRAINT `fk_classes_admin1`
    FOREIGN KEY (`admin_idadmin`)
    REFERENCES `harmony`.`admin` (`idadmin`),
  CONSTRAINT `fk_classes_teachers1`
    FOREIGN KEY (`teachers_idteacher`)
    REFERENCES `harmony`.`teachers` (`idteacher`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `harmony`.`login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `harmony`.`login` (
  `idlogin` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(255) NOT NULL,
  `role` TINYINT NOT NULL DEFAULT '0',
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idlogin`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `harmony`.`messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `harmony`.`messages` (
  `idmessages` INT NOT NULL AUTO_INCREMENT,
  `senders` VARCHAR(85) NOT NULL,
  `content` LONGTEXT NOT NULL,
  `created_at` DATE NOT NULL,
  `chat_idchat` INT NOT NULL,
  PRIMARY KEY (`idmessages`),
  INDEX `fk_messages_chat1_idx` (`chat_idchat` ASC) VISIBLE,
  CONSTRAINT `fk_messages_chat1`
    FOREIGN KEY (`chat_idchat`)
    REFERENCES `harmony`.`chat` (`idchat`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `harmony`.`subject`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `harmony`.`subject` (
  `idsubject` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(95) NOT NULL,
  `classes_idclasses` INT NOT NULL,
  `teachers_idteacher` INT NOT NULL,
  PRIMARY KEY (`idsubject`),
  INDEX `fk_subject_classes1_idx` (`classes_idclasses` ASC) VISIBLE,
  INDEX `fk_subject_teachers1_idx` (`teachers_idteacher` ASC) VISIBLE,
  CONSTRAINT `fk_subject_classes1`
    FOREIGN KEY (`classes_idclasses`)
    REFERENCES `harmony`.`classes` (`idclasses`),
  CONSTRAINT `fk_subject_teachers1`
    FOREIGN KEY (`teachers_idteacher`)
    REFERENCES `harmony`.`teachers` (`idteacher`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `harmony`.`student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `harmony`.`student` (
  `idStudent` INT NOT NULL AUTO_INCREMENT,
  `First_name` VARCHAR(45) NOT NULL,
  `LastName` VARCHAR(45) NOT NULL,
  `Birthday` DATE NOT NULL,
  `class` VARCHAR(85) NOT NULL,
  `image` LONGTEXT NOT NULL,
  `users_idusers` INT NOT NULL,
  `classes_idclasses` INT NOT NULL,
  PRIMARY KEY (`idStudent`),
  INDEX `fk_Student_users1_idx` (`users_idusers` ASC) VISIBLE,
  INDEX `fk_Student_classes1_idx` (`classes_idclasses` ASC) VISIBLE,
  CONSTRAINT `fk_Student_classes1`
    FOREIGN KEY (`classes_idclasses`)
    REFERENCES `harmony`.`classes` (`idclasses`),
  CONSTRAINT `fk_Student_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `harmony`.`users` (`idusers`))
ENGINE = InnoDB
AUTO_INCREMENT = 19
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `harmony`.`notes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `harmony`.`notes` (
  `idnote` INT NOT NULL AUTO_INCREMENT,
  `note1` FLOAT NOT NULL,
  `note2` FLOAT NULL,
  `note3` FLOAT NULL,
  `subject_idsubject` INT NOT NULL,
  `teachers_idteacher` INT NOT NULL,
  `noteName` VARCHAR(45) NOT NULL,
  `student_idStudent` INT NOT NULL,
  PRIMARY KEY (`idnote`, `teachers_idteacher`, `student_idStudent`),
  INDEX `fk_notes_subject1_idx` (`subject_idsubject` ASC) VISIBLE,
  INDEX `fk_notes_teachers1_idx` (`teachers_idteacher` ASC) VISIBLE,
  INDEX `fk_notes_student1_idx` (`student_idStudent` ASC) VISIBLE,
  CONSTRAINT `fk_notes_subject1`
    FOREIGN KEY (`subject_idsubject`)
    REFERENCES `harmony`.`subject` (`idsubject`),
  CONSTRAINT `fk_notes_teachers1`
    FOREIGN KEY (`teachers_idteacher`)
    REFERENCES `harmony`.`teachers` (`idteacher`),
  CONSTRAINT `fk_notes_student1`
    FOREIGN KEY (`student_idStudent`)
    REFERENCES `harmony`.`student` (`idStudent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `harmony`.`payement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `harmony`.`payement` (
  `idpayement` INT NOT NULL AUTO_INCREMENT,
  `montantTotal` INT NOT NULL,
  `montantPaye` INT NOT NULL,
  `montantRestant` INT NOT NULL,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`idpayement`),
  INDEX `fk_payement_users_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_payement_users`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `harmony`.`users` (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
