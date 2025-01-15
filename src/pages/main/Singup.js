
import styled from "styled-components";
import Icons from "../images/padlock.png";
import { Link, useNavigate} from "react-router-dom";

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
const DivInf = styled.div`
    display: flex;
    gap:10px;
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

function Singup() {
  // const params = useParams();
  // console.log("It's params:", params)
  const navigate = useNavigate();
  const handleSingUp = () => {
    return navigate('entered')
  };
  return (
    <Section>
      <DivWrapper>
        <ImgWrapper>
          <Img src={Icons}></Img>
        </ImgWrapper>
        <Title>Sing up</Title>
        <DivMain>
          <DivInf>
          <Input type="text" placeholder="First Name *"/>
          <Input type="text" placeholder="Last Name *" />
          </DivInf>
          <Input type="email" placeholder="Email Address *"/>
          <Input type="password" placeholder="Password *" />
          <Label>
            <InputLabel type="checkbox" />
            <LabelText>I want to receive inspiration, marketing promotions and updates via email.</LabelText>
          </Label>
          <Button onClick={handleSingUp} >SING UP</Button>
              <Link to='singin'>
              <DivLink>Already have an account? Sing in</DivLink>
              </Link>
        </DivMain>
        <Footer>Copyright © Your Website 2020</Footer>
      </DivWrapper>
    </Section>
  );
}
export default Singup
