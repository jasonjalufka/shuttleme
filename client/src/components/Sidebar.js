import React, { Component } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  height: 100vh;
  background-color: #252529;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 414px) {
    display: none;
  }
`;

const SidebarMenu = styled.ul`
  display: flex;
  align-items: left;
  flex-direction: column;
  list-style: none;
  width: 100%;
  padding-left: 0px;
`;

const MenuLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
  height: 45px;
  color: #fff;
  margin: 20px 30px 10px 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #2e2e33;
`;

const SidebarMenuItem = styled.li`
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
  padding-left: 30px;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: inset 3px 0 0 0 #ffffff;
    cursor: pointer;
  }
`;

const Icon = styled.svg`
  width: 20px;
  height: 20px;
`;

const SidebarMenuItemLabel = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
  padding: 12px 0px;
  margin-left: 20px;
  margin-bottom: 0;
  color: #ffffff;
`;

const MenuSignOut = styled.div`
  border-top: 1px solid #2e2e33;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  height: 45px;
  color: #fff;
  margin: 20px 30px 60px 30px;
  padding: 10px 0px 0px 20px;

  &:hover {
    cursor: pointer;
  }
`;

class Sidebar extends Component {
  render() {
    return (
      <SidebarContainer>
        <SidebarMenu>
          <MenuLogo>shuttle.me</MenuLogo>
          <SidebarMenuItem>
            <Icon viewBox="0 0 20 20">
              <path
                width="20px"
                height="20px"
                fill="white"
                d="M18,17 C18,17.552 17.552,18 17,18 L14,18 C13.448,18 13,17.552 13,17 L13,14 C13,13.448 13.448,13 14,13 L17,13 C17.552,13 18,13.448 18,14 L18,17 Z M18,11 L13,11 C11.895,11 11,11.895 11,13 L11,18 C11,19.105 11.895,20 13,20 L18,20 C19.105,20 20,19.105 20,18 L20,13 C20,11.895 19.105,11 18,11 L18,11 Z M18,6 C18,6.552 17.552,7 17,7 L14,7 C13.448,7 13,6.552 13,6 L13,3 C13,2.448 13.448,2 14,2 L17,2 C17.552,2 18,2.448 18,3 L18,6 Z M18,0 L13,0 C11.895,0 11,0.895 11,2 L11,7 C11,8.105 11.895,9 13,9 L18,9 C19.105,9 20,8.105 20,7 L20,2 C20,0.895 19.105,0 18,0 L18,0 Z M7,17 C7,17.552 6.552,18 6,18 L3,18 C2.448,18 2,17.552 2,17 L2,3 C2,2.448 2.448,2 3,2 L6,2 C6.552,2 7,2.448 7,3 L7,17 Z M7,0 L2,0 C0.895,0 0,0.895 0,2 L0,18 C0,19.105 0.895,20 2,20 L7,20 C8.105,20 9,19.105 9,18 L9,2 C9,0.895 8.105,0 7,0 L7,0 Z"
              />
            </Icon>
            <SidebarMenuItemLabel>Dashboard</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Icon viewBox="0 0 20 19">
              <path
                width="20px"
                height="19px"
                fill="white"
                d="M18,13.4070943 C18,13.8456529 17.729,14.2359392 17.324,14.3787018 L11,16.605388 L11,4.71500707 L11,4.53321581 L16.676,2.53453901 C17.325,2.30550257 18,2.80054996 18,3.50614654 L18,13.4070943 Z M9,4.71500707 L9,16.605388 L2.676,14.3787018 C2.271,14.2359392 2,13.8456529 2,13.4070943 L2,3.50614654 C2,2.80054996 2.675,2.30550257 3.324,2.53453901 L9,4.53321581 L9,4.71500707 Z M17.337,0.117845024 L10.331,2.64443543 C10.117,2.72146562 9.883,2.72146562 9.669,2.64443543 L2.663,0.117845024 C1.362,-0.351525631 0,0.639596213 0,2.05592474 L0,14.1157721 C0,14.9969975 0.547,15.7806514 1.36,16.0620684 L9.68,18.9460789 C9.888,19.0179737 10.112,19.0179737 10.32,18.9460789 L18.64,16.0620684 C19.453,15.7806514 20,14.9969975 20,14.1157721 L20,2.05592474 C20,0.639596213 18.638,-0.351525631 17.337,0.117845024 L17.337,0.117845024 Z"
                id="path-1"
              />
            </Icon>
            <SidebarMenuItemLabel>Map</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Icon viewBox="0 0 20 20">
              <path
                width="20px"
                height="20px"
                fill="white"
                d="M18,11 L14,11 L14,7 L17,7 C17.552,7 18,7.448 18,8 L18,11 Z M18,15 L17.221,15 C16.672,14.39 15.885,14 15,14 C14.647,14 14.314,14.072 14,14.184 L14,13 L18,13 L18,15 Z M15,18 C14.449,18 14,17.551 14,17 C14,16.449 14.449,16 15,16 C15.551,16 16,16.449 16,17 C16,17.551 15.551,18 15,18 L15,18 Z M12,5 L12,15 L9.484,15 C9.038,13.278 7.487,12 5.625,12 C4.538,12 3.556,12.436 2.838,13.142 C2.526,13.448 2,13.216 2,12.779 L2,3 C2,2.448 2.448,2 3,2 L11,2 C11.552,2 12,2.448 12,3 L12,5 Z M7.347,17 C7,17.595 6.362,18 5.625,18 C4.888,18 4.25,17.595 3.903,17 C3.731,16.705 3.625,16.366 3.625,16 C3.625,15.634 3.731,15.295 3.903,15 C4.25,14.405 4.888,14 5.625,14 C6.362,14 7,14.405 7.347,15 C7.519,15.295 7.625,15.634 7.625,16 C7.625,16.366 7.519,16.705 7.347,17 L7.347,17 Z M18,5 L14,5 L14,2 C14,0.895 13.105,0 12,0 L2,0 C0.895,0 0,0.895 0,2 L0,15.234 C0,16.209 0.791,17 1.766,17 C2.213,18.722 3.763,20 5.625,20 C7.487,20 9.037,18.722 9.484,17 L12,17 C12,18.657 13.343,20 15,20 C16.657,20 18,18.657 18,17 C19.105,17 20,16.105 20,15 L20,7 C20,5.895 19.105,5 18,5 L18,5 Z"
                id="path-1"
              />
            </Icon>
            <SidebarMenuItemLabel>Buses</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Icon viewBox="0 0 20 20">
              <path
                width="20px"
                height="20px"
                fill="white"
                d="M11,5.007 L11,12.007 C11,12.559 10.552,13.007 10,13.007 C9.448,13.007 9,12.559 9,12.007 L9,5.007 C9,4.455 9.448,4.007 10,4.007 C10.552,4.007 11,4.455 11,5.007 L11,5.007 Z M11,15.007 C11,15.559 10.552,16.007 10,16.007 C9.448,16.007 9,15.559 9,15.007 C9,14.455 9.448,14.007 10,14.007 C10.552,14.007 11,14.455 11,15.007 L11,15.007 Z M18,17 C18,17.552 17.552,18 17,18 L3,18 C2.448,18 2,17.552 2,17 L2,3 C2,2.448 2.448,2 3,2 L17,2 C17.552,2 18,2.448 18,3 L18,17 Z M18,0 L2,0 C0.895,0 0,0.899 0,2.003 L0,2.007 L0,18.007 C0,19.112 0.895,20 2,20 L18,20 C19.105,20 20,19.108 20,18.003 L20,2.007 C20,0.902 19,0 18,0 L18,0 Z"
                id="path-1"
              />
            </Icon>
            <SidebarMenuItemLabel>Service Alerts</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <MenuSignOut>Sign Out</MenuSignOut>
        </SidebarMenu>
      </SidebarContainer>
    );
  }
}
export default Sidebar;
