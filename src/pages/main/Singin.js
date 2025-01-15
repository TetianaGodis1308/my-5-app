
import styled from "styled-components";
import Icons from "../images/padlock.png";
import { Link, useNavigate } from "react-router-dom";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`
const DivWrapper = styled.div`
  width: 50vh;
  background-color: rgb(30, 29, 30);
  padding: 70px;
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
  column-gap:300px;
  row-gap: 30px;
`
const ImgWrapper = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgb(251, 130, 197);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Img = styled.img`
    width: 30px;
`
const Title = styled.h1`
color: white;
font-size: 18px;
margin-top: -20px;
`
const DivMain = styled.div`
  display: flex;
  flex-wrap:wrap;
  row-gap: 20px;
`
const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0.5em;  
  // margin: 0.5em;  
  border: 1px solid rgba(100, 100, 100, 0.5);  
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  font-size: 14px;
`
const InputLabel = styled.input`
border: 1px solid rgba(100, 100, 100, 0.5);
background-color: rgba(0, 0, 0, 0);
cursor: pointer;
`
const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`
const LabelText = styled.span`
  color: rgba(223, 220, 220, 0.98);
  font-size: 13px;
`
const Button = styled.button`
  background-color: rgb(107, 178, 225);
  color: rgb(30, 29, 30);
  padding: 0.5em;  
  border: none;
  border-radius: 3px;
  width: 100%;
  cursor:pointer;
  height: 40px;
  font-size: 15px;
  &:hover {
    font-size: 20px;
  }
`
const DivQuest = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
  `
const DivLink = styled.div`
  color:rgb(107, 178, 225);
  font-size: 13px;
  cursor:pointer;
    &:hover {
    text-decoration: underline;
}
`
const Footer = styled.footer`
color: rgba(189, 187, 187, 0.5);
margin-top: 30px;
font-size: 13px;
`
function Singin() {
  const navigate = useNavigate();
  const handleSingIn = () => {
    return navigate('success')
  };
  // const params = useParams();
  // console.log("It's params:", params)
  return (
    <Section>
      <DivWrapper>
        <ImgWrapper>
          <Img src={Icons}></Img>
        </ImgWrapper>
        <Title>Sing in</Title>
        <DivMain>
          <Input type="email" placeholder="Email Address *"/>
          <Input type="password" placeholder="Password *" />
          <Label>
            <InputLabel type="checkbox" />
            <LabelText>Remember me</LabelText>
          </Label>
          <Button onClick={handleSingIn} >SING IN</Button>
          <DivQuest>
              <Link to='forg_password'>
              <DivLink>Forgot password?</DivLink>
              </Link>
              <Link to='not_available'>
              <DivLink>Don't have an account?Sing up</DivLink>
              </Link>
          </DivQuest>
        </DivMain>
        <Footer>Copyright © Your Website 2020</Footer>
      </DivWrapper>
    </Section>
  );
}
export default Singin
