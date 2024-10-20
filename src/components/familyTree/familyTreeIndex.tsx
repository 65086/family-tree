import React from "react";
import "./familyTreeStyles.css";
import styled from "styled-components";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";
import { Tree, TreeNode } from 'react-organizational-chart';

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px ;
  font-family: Montserrat;
`;

const Header = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
`;

const HeaderSpan = styled.span`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
`;

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;

 
const HOFNode = (props:any) => {  
      var parentNode=props.treeData.filter((el:any)=>el.parent_id=="0");
      var otherNodes=props.treeData.filter((el:any)=>el.parent_id!="0");
      return (
         <Tree
            lineWidth={'2px'}
            lineColor={'green'}
            lineBorderRadius={'10px'}
            label={<StyledNode><span>{parentNode[0].name} </span><br/> <span>test</span></StyledNode>}
        >
          <ChildNode treeData={otherNodes} parent_id={"1"}/>
        </Tree>
      );
  };

    const ChildNode = (props:any) => {  

      var childNode=props.treeData.filter((el:any)=>el.parent_id ==props.parent_id);
      var allNodes=props.treeData;

      return (
        <>
          {childNode.map(function (item:any) {
            var childNode=allNodes.filter((el:any)=>el.parent_id ==item.id);
            let isHaving= childNode.length;
            return (
              <TreeNode label={<StyledNode>{item.name}</StyledNode>}>
                    {(isHaving) ?
                     (<ChildNode treeData={allNodes} parent_id={item.id}/>):
                    null}
              </TreeNode>
            )
          })}
        </>
      );
  };

    
  export const FamilyTree = (props:any) => {  

    var data = 
        [{"id": "1", "name": "आपाजी", "parent_id": "0"},
        {"id": "2", "name": "संतू", "parent_id": "1"},
        {"id": "3", "name": "बापू", "parent_id": "1"},
        {"id": "4", "name": "test", "parent_id": "3"},
        {"id": "5", "name": "test2", "parent_id": "4"}

        ];

        const { name,profilePhoto } = useGetUserInfo();
        const navigate = useNavigate();
      
        const signUserOut = async () => {
            try {
              await signOut(auth);
              localStorage.clear();
              navigate("/");
            } catch (err) {
              console.error(err);
            }
          };
      
      return (
        <>
    <Container>
      <Header>
      <HeaderSpan>
      <img src={profilePhoto} alt="Avatar" title={name} className="avatar" ></img>
      </HeaderSpan>
      <HeaderSpan>
       Family Tree 
      </HeaderSpan>  
      {/* <HeaderSpan>
      
         <FontAwesomeIcon style={{cursor:'pointer'}} icon="fa-solid fa-right-from-bracket" onClick={signUserOut} />
      </HeaderSpan>       */}
      </Header>

      <HOFNode treeData={data}/>
  

    </Container>
        </>
      );
  };





