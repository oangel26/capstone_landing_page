import styled from 'styled-components';

const Img = styled.div`
    background-image: url("https://cdn.pixabay.com/photo/2021/05/28/14/34/ships-6291071_1280.jpg");
    width: 100%;
    height: 70vh;
`;

const Div = styled.div`
    display: flex;
    background-color: #449DD1;
    color: #003459;
`;

const Item = styled.div`
    width: 33vw;
    text-align: center;
`;

function Feature() {
    return (
        <section id = 'Feature'>
            <Div>
                <Item>
                    <h3>Titulo Feature 1</h3>
                    <p>parrafo 1</p>
                </Item>
                <Item>
                    <h3>Titulo Feature 2</h3>
                    <p>parrafo 2</p>
                </Item>
                <Item>
                    <h3>Titulo Feature 3</h3>
                    <p>parrafo 3</p>
                </Item>
            </Div>
            <Img>
            </Img>
        </section>
    );
  }
  
  export default Feature;