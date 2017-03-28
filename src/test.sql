/*
Navicat MySQL Data Transfer

Source Server         : 123
Source Server Version : 50022
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50022
File Encoding         : 65001

Date: 2013-07-19 17:46:13
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `message`
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `message_id` varchar(40) NOT NULL,
  `CONTENT` varchar(200) default NULL,
  `admin_id` varchar(40) default NULL,
  `vehicle_id` varchar(40) default NULL,
  `optime` datetime default NULL,
  `type` varchar(20) default NULL,
  PRIMARY KEY  (`message_id`),
  KEY `m_v_fk` (`vehicle_id`),
  CONSTRAINT `m_v_fk` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`vehicle_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES ('001dfee1-14d8-1030-925e-9c971ed1bd40', '罗佳军', null, null, '2012-07-01 22:19:50', null);
INSERT INTO `message` VALUES ('1', 'dafasdf', null, '1', null, null);
INSERT INTO `message` VALUES ('2e4aef5b-130e-1030-8cd5-b4f0951ccdad', '点点滴滴点点滴滴点对点', null, null, '2012-06-29 15:42:38', null);
INSERT INTO `message` VALUES ('3f5e8c39-153b-1030-8935-78fa7e893670', null, null, null, '2012-07-02 10:10:16', null);
INSERT INTO `message` VALUES ('6a242855-12e2-1030-8cd5-b4f0951ccdad', 'fa拉斯的技法来说的飞机sdfasdfdsfdf', null, null, '2012-06-29 10:29:20', null);
INSERT INTO `message` VALUES ('736a43da-14d7-1030-925e-9c971ed1bd40', '123123asdfsdfd', null, null, '2012-07-01 22:15:54', null);
INSERT INTO `message` VALUES ('8b4d5019-126c-1030-9fc3-01f6ce26532e', 'dsafsdf', null, null, '2012-06-28 20:25:35', null);
INSERT INTO `message` VALUES ('919a0cf5-16c5-1030-91f8-c84504413b67', '罗佳军你好xzadfadsf', null, null, '2012-07-04 09:12:56', '1');
INSERT INTO `message` VALUES ('ac34ae1a-14d7-1030-925e-9c971ed1bd40', '逻辑卷罗佳军', null, null, '2012-07-01 22:17:29', null);
INSERT INTO `message` VALUES ('b61a710f-153b-1030-8935-78fa7e893670', null, null, null, '2012-07-02 10:13:35', null);
INSERT INTO `message` VALUES ('c3b9388e-126c-1030-9fc3-01f6ce26532e', 'asdfsdfasdfsdgfd', null, null, '2012-06-28 20:27:10', null);

-- ----------------------------
-- Table structure for `organization`
-- ----------------------------
DROP TABLE IF EXISTS `organization`;
CREATE TABLE `organization` (
  `organization_id` varchar(40) NOT NULL default '',
  `organization` varchar(20) default NULL,
  PRIMARY KEY  (`organization_id`),
  KEY `organization_id` (`organization_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of organization
-- ----------------------------
INSERT INTO `organization` VALUES ('', null);
INSERT INTO `organization` VALUES ('1', '庆阳市');

-- ----------------------------
-- Table structure for `t_a_account`
-- ----------------------------
DROP TABLE IF EXISTS `t_a_account`;
CREATE TABLE `t_a_account` (
  `ACCOUNT_ID` varchar(36) NOT NULL,
  `DEPART_ID` varchar(32) default NULL,
  `LOGINNAME` varchar(30) default NULL,
  `PASSWORD` varchar(32) default NULL,
  `USERNAME` varchar(80) default NULL,
  `TEL_PHONE_NUMBER` varchar(30) default NULL,
  `MOBILE_PHONE_NUMBER` varchar(30) default NULL,
  `EMAIL` varchar(150) default NULL,
  `POLICE_NO` varchar(50) default NULL,
  `ID_NUMBER` char(50) default NULL,
  `ISONLINE` decimal(2,0) default '2' COMMENT '1表示在\r\n\r\n线，2表示不在线',
  `APROVAL_STATUS` decimal(2,0) default '0' COMMENT '0表示未\r\n\r\n审核，1表示已审核，2表示审核未通过',
  `POLICE_TYPE` decimal(2,0) default NULL COMMENT '0表示公安 1表示交\r\n\r\n警 3 表示特警4表示消防',
  `LAST_LOGINTIME` datetime default NULL,
  `STAMP` datetime default NULL,
  `LOGIN_TYPE` decimal(8,0) default NULL COMMENT '0表示USBKEY登录，\r\n\r\n1表示账号口令登录',
  `USBKEY_ID` varchar(50) default NULL,
  `IS_LOCK` decimal(8,0) default '0' COMMENT '0表示正\r\n\r\n常，1表示锁定 ',
  `IS_DELETE` decimal(8,0) default '0' COMMENT '0表示正\r\n\r\n常，1表示删除',
  `HEADSHIP` varchar(50) default NULL,
  `SEX` decimal(8,0) default NULL COMMENT '0表示男，1表示女，2表示其\r\n\r\n他',
  PRIMARY KEY  (`ACCOUNT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='账号信息表';

-- ----------------------------
-- Records of t_a_account
-- ----------------------------
INSERT INTO `t_a_account` VALUES ('7821a656-ec1b-1030-aa56-1ade0ca20945', null, '233', '4a4d993ed7bd7d467b27af52d2aaa800', '123', '123', '123', '123', '123', '123sdfasdf', '2', '0', null, null, null, null, null, '0', '0', null, null);
INSERT INTO `t_a_account` VALUES ('c6a579f9-ec1e-1030-aa56-1ade0ca20945', null, '252345', '310dcbbf4cce62f762a2aaa148d556bd', '252345', null, null, null, null, null, '2', '0', null, null, null, null, null, '0', '0', null, null);
INSERT INTO `t_a_account` VALUES ('eada61b7-ec1d-1030-aa56-1ade0ca20945', null, 'aaaa', '47bce5c74f589f4867dbd57e9ca9f808', 'aaaa', null, '2341234', null, null, null, '2', '0', null, null, null, null, null, '0', '0', null, null);

-- ----------------------------
-- Table structure for `t_a_depart`
-- ----------------------------
DROP TABLE IF EXISTS `t_a_depart`;
CREATE TABLE `t_a_depart` (
  `DEPART_ID` varchar(32) NOT NULL,
  `DEPART_NO` varchar(30) default NULL COMMENT '数据来源于通用权限系统',
  `DEPART_NAME` varchar(50) NOT NULL,
  `SUPER_DEPART_ID` varchar(32) NOT NULL,
  `MANAGER_NAME` varchar(80) default NULL,
  `MANAGER_PHONE` varchar(20) default NULL,
  `EMAIL` varchar(80) default NULL,
  `ACCOUNT_ID` decimal(8,0) default NULL,
  `RECEIVE_PERSON_NAME` varchar(40) default NULL,
  `RECEIVE_PERSON_PHONE` varchar(30) default NULL,
  `DEPART_TYPE` decimal(2,0) NOT NULL default '4' COMMENT '1表示省\r\n\r\n公安厅2表示市公安局3表示县公安分局4表示派出所5表示交警',
  `IS_DELETE` decimal(2,0) NOT NULL default '1' COMMENT '1表示未\r\n\r\n删除2表示已删除',
  `REMARK` varchar(200) default NULL,
  `STAMP` datetime NOT NULL,
  `DEPART_SEQUENCE` varchar(32) default NULL,
  PRIMARY KEY  (`DEPART_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='此表只是做为机构信息的记录';

-- ----------------------------
-- Records of t_a_depart
-- ----------------------------

-- ----------------------------
-- Table structure for `t_a_module`
-- ----------------------------
DROP TABLE IF EXISTS `t_a_module`;
CREATE TABLE `t_a_module` (
  `MODULE_ID` decimal(8,0) NOT NULL,
  `MODULE_NAME` varchar(50) NOT NULL,
  `PARENT_MODULE_ID` decimal(8,0) default NULL,
  `CONTROL1` varchar(100) default NULL,
  `CONTROL2` varchar(100) default NULL,
  `CONTROL3` varchar(100) default NULL,
  `CONTROL4` varchar(100) default NULL,
  `REMARKS` varchar(100) default NULL,
  `MODULE_TYPE` decimal(8,0) default NULL COMMENT '0表示模块，1表示功能点，2\r\n\r\n表示指令',
  PRIMARY KEY  (`MODULE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='功能模块表，给角色分配模块时用';

-- ----------------------------
-- Records of t_a_module
-- ----------------------------
INSERT INTO `t_a_module` VALUES ('1', '系统管理', null, '1', '1', null, null, null, null);

-- ----------------------------
-- Table structure for `t_a_monitor_vehicle`
-- ----------------------------
DROP TABLE IF EXISTS `t_a_monitor_vehicle`;
CREATE TABLE `t_a_monitor_vehicle` (
  `MONITOR_ID` decimal(8,0) NOT NULL,
  `ACCOUNT_ID` decimal(8,0) NOT NULL,
  `CALL_LETTER` varchar(30) NOT NULL,
  `POSITION_MODE` decimal(2,0) NOT NULL,
  `NUMBER_PLATE` varchar(30) NOT NULL,
  PRIMARY KEY  (`MONITOR_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_a_monitor_vehicle
-- ----------------------------

-- ----------------------------
-- Table structure for `t_a_role`
-- ----------------------------
DROP TABLE IF EXISTS `t_a_role`;
CREATE TABLE `t_a_role` (
  `ROLE_ID` varchar(36) NOT NULL,
  `ROLE_NAME` varchar(30) NOT NULL,
  `ROLE_TYPE` decimal(2,0) NOT NULL default '2' COMMENT '1表示初\r\n\r\n始角色，允许修改，不能删除，2表示自定义角色，可以由创建者删除和修改',
  `SUPER_ROLE_ID` decimal(8,0) default NULL,
  `ACCOUNT_ID` decimal(8,0) default NULL,
  `CREATE_TIME` datetime default NULL,
  `REMARKS` varchar(100) default NULL,
  `ISPUBLIC` varchar(2) default NULL,
  PRIMARY KEY  (`ROLE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='存储角色信息';

-- ----------------------------
-- Records of t_a_role
-- ----------------------------
INSERT INTO `t_a_role` VALUES ('11acdaa8-ec1e-1030-aa56-1ade0ca20945', '3453452454wer', '2', null, null, '2013-04-01 21:13:30', '23245wertwert', null);
INSERT INTO `t_a_role` VALUES ('7b5c0a11-ec1f-1030-aa56-1ade0ca20945', '22', '2', null, null, '2013-04-01 21:23:11', '22', null);

-- ----------------------------
-- Table structure for `t_a_role_account`
-- ----------------------------
DROP TABLE IF EXISTS `t_a_role_account`;
CREATE TABLE `t_a_role_account` (
  `ACCOUNT_ID` varchar(36) NOT NULL,
  `ROLE_ID` varchar(36) NOT NULL,
  PRIMARY KEY  (`ACCOUNT_ID`,`ROLE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_a_role_account
-- ----------------------------

-- ----------------------------
-- Table structure for `t_a_role_module`
-- ----------------------------
DROP TABLE IF EXISTS `t_a_role_module`;
CREATE TABLE `t_a_role_module` (
  `ROLE_ID` decimal(8,0) NOT NULL,
  `MODULE_ID` decimal(8,0) NOT NULL,
  PRIMARY KEY  (`ROLE_ID`,`MODULE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_a_role_module
-- ----------------------------

-- ----------------------------
-- Table structure for `vehicle`
-- ----------------------------
DROP TABLE IF EXISTS `vehicle`;
CREATE TABLE `vehicle` (
  `vehicle_id` varchar(40) NOT NULL,
  `plateNumber` varchar(10) default NULL,
  `miletotal` int(11) default NULL,
  `oiltotal` int(11) default NULL,
  `organization_id` varchar(40) default NULL,
  PRIMARY KEY  (`vehicle_id`),
  KEY `v_o_pk` (`organization_id`),
  CONSTRAINT `v_o_pk` FOREIGN KEY (`organization_id`) REFERENCES `organization` (`organization_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vehicle
-- ----------------------------
INSERT INTO `vehicle` VALUES ('1', '甘A0000F警', '10000', '10000', '1');
INSERT INTO `vehicle` VALUES ('f62c6e80-131c-1030-8cd5-b4f0951ccdad', '甘A20002', null, null, null);
