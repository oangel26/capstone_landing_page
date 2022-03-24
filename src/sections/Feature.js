import styled from 'styled-components';
import img_landing from '../images/landing_page.png'
import img_admin from '../images/admin.png'
import img_user from '../images/user.png'

const Title = styled.h2`
    font-family: 'Bebas Neue', cursive;
    text-align: center;
    padding-top: 20px;
    font-size: 30px;
`;

const P = styled.p`
    margin: 20px 30px;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
    font-size: 20px;
`;

const Subtitle = styled.h3`
    font-family: 'Bebas Neue', cursive;
    text-align: center;
    font-size: 25px;
`;

const Section = styled.section`
    background-color: #449DD1;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #449DD1;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 70vh;
`;
const Example = styled.img`
    object-fit: container;
`;
const Div = styled.div`
    display: flex;
    background-color: #449DD1;
`;

const Item = styled.div`
    width: 33vw;
    text-align: center;
`;

function Feature() {
    return (
        <Section id = 'Feature'>
            <Title>Project Features</Title>
            <Div>
                <Item>
                    <Subtitle>Landing page</Subtitle>
                    <P>The users can access the company information thought it's landing page, also do the login and registration process.</P>
                </Item>
                <Item>
                    <Subtitle>User Service Interface</Subtitle>
                    <P>Different files are shown and can be accessed by the user according to the type of subscripiton held.</P>
                </Item>
                <Item>
                    <Subtitle>User Database Management System</Subtitle>
                    <P>Registration of users are stored in the database. This information can be edited or delted by the user.</P>
                </Item>
            </Div>
            <Container>
                {/* <Example src={img_landing} width = "250px" height = "500px"/> */}
                <Example src={img_admin} width = "600px" height = "400px"/>
                <Example src={img_user} width = "600px" height = "400px"/>
            </Container>
        </Section>
    );
  }
  
  export default Feature;