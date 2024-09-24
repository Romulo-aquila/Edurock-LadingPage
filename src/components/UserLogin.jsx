import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";

function UserLogin() {
  const UserIcon = styled.div`
   font-size: 1.1rem;
   width: 47px;
   height: 45px;
   background-color: #fff;
   border: 1px solid #cbc9c9;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   transition: all 0.2s;

   &:hover {
    background-color: #5f2ded;
   }
  `;

  return (
    <UserIcon><FaUserAlt/></UserIcon>
  )
}

export default UserLogin;