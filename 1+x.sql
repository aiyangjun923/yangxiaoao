/*
 Navicat Premium Data Transfer

 Source Server         : root
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : 1+x

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 27/11/2019 16:25:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `stuid` int(255) NOT NULL,
  `stuname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `stuage` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `stusex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `stumajor` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 22 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES (3, 173042, '杨俊', '18', '男', 'UI');
INSERT INTO `student` VALUES (21, 173325, '小芳', '18', '女', 'web');
INSERT INTO `student` VALUES (14, 77777, '741', '17', '女', '171');
INSERT INTO `student` VALUES (8, 173525, '曾柄璋', '18', '男', 'java');
INSERT INTO `student` VALUES (18, 857, '75', '757', '75', 'h5');
INSERT INTO `student` VALUES (20, 173052, '赖俊', '18', '男', 'c ++');
INSERT INTO `student` VALUES (19, 857757, '75', '757', '75', '75');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `uname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pwd` int(10) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 26 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'xiaoli', 23);
INSERT INTO `user` VALUES (2, 'xiaox', 22);
INSERT INTO `user` VALUES (3, 'laobai', 21);
INSERT INTO `user` VALUES (4, 'laijun', 18);
INSERT INTO `user` VALUES (5, 'baibai', 5);
INSERT INTO `user` VALUES (7, 'bb', 15);
INSERT INTO `user` VALUES (12, 'aa', 223);
INSERT INTO `user` VALUES (15, 'aiwo', 11);
INSERT INTO `user` VALUES (16, 'yangy', 223);
INSERT INTO `user` VALUES (17, 'laiun', 22);
INSERT INTO `user` VALUES (25, 'yangjun', 1212);
INSERT INTO `user` VALUES (19, 'mmm', 625);

SET FOREIGN_KEY_CHECKS = 1;
