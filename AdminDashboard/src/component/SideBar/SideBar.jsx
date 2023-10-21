import React, { useState } from 'react';
import { MdOutlineSubject } from 'react-icons/md';
import { PiStudentBold } from 'react-icons/pi';
import { GiTeacher } from 'react-icons/gi';
import { IoBookSharp } from 'react-icons/io5';
import { AiFillSetting } from 'react-icons/ai';
import { GrLogout } from 'react-icons/gr';
import {AiOutlineDown} from 'react-icons/ai'
import {MdOutlineFamilyRestroom} from 'react-icons/md'
import {AiOutlineHome} from 'react-icons/ai'
import './SideBar.css';
import { useNavigate } from 'react-router-dom';

function SideBar() {
  const [showStudentList, setShowStudentList] = useState(false)
  const [showTeacherList, setShowTeacherList] = useState(false)
  const navigate = useNavigate()

  const toggleStudentList = () => {
    setShowStudentList(!showStudentList);
   
  };

  const toggleTeacherList = () => {
    setShowTeacherList(!showTeacherList)
   
  };
  const HanelLogout = () => {
    navigate('/')
  }
const handelAllStudent = () => {
  navigate('/AllStudent')
}
const HomeNavigate = () => {
  navigate('/Home')
}
const SettingNavige = () => {
  navigate('/Profile')
}
  return (
    <div className="sideBar">
      <div className="student">
        <div className="menu">
          <ul>
            <div className="item-content">
              <p className='SideBarText'><MdOutlineSubject/></p>
            <h2></h2>
            </div>
          </ul>
          <ul>
            <div className="item-container" onClick={HomeNavigate}>
              <p className='SideBarText'><AiOutlineHome /></p>
              <h3>Home</h3>
            </div>
          </ul>
          <ul>
           
            <div className="item-container" onClick={toggleStudentList}>
              <p className='SideBarText'><PiStudentBold /></p>
              <h3>Student</h3>
              <p className='SideBarText'><AiOutlineDown/></p>
           
            </div>
            {showStudentList && (
              <>
                <li onClick={handelAllStudent}>All Student</li>
                <li>Student Permetion</li>
              </>
            )}
          </ul>
          <ul>
            <div className="item-container" onClick={toggleTeacherList}>
              <p className='SideBarText'><GiTeacher /></p>
              <h3>Teacher</h3>
              <p><AiOutlineDown/></p>
            </div>
            {showTeacherList && (
              <>
                <li>All Teacher</li>
                <li>Add Teacher</li>
              </>
            )}
          </ul>
          <ul>
         <div className="item-container">
          <p className='SideBarText'><MdOutlineFamilyRestroom/></p>
          <h3>Parent</h3>
          </div>  
          </ul>
          <ul>
            <div className="item-container">
              <p className='SideBarText'><IoBookSharp /></p>
              <h3>Subject</h3>
            </div>
          </ul>
          <ul>
            <div className="item-container" onClick={SettingNavige}>
              <p className='SideBarText'><AiFillSetting /></p>
              <h3>Settings</h3>
            </div>
          </ul>
          <div className="logout">
            <ul>
              <div className="item" onClick={HanelLogout}>
                <p className='SideBarText'><GrLogout /></p>
                <h3>Log Out</h3>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
