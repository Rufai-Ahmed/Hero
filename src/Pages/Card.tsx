import styled, { keyframes } from "styled-components";
import pix from "../Assets/775118.jpg";
import { HiOutlineShare } from "react-icons/hi";
import { PiHeartStraight } from "react-icons/pi";
import { useState } from "react";

const Card = () => {
  const [click, setClick] = useState(0);
  const [color, setColor] = useState("");

  const Increment = () => {
    if (click < 1) {
      setClick(click + 1);
    }
  };
  // const colorType = ()=>{
  //        if () {
  //          setColor()
  //        }
  // }

  return (
    <>
      <Container>
        <Wrapper>
          <CardHolder>
            <ImageHolder>
              <Img src={pix} />
            </ImageHolder>
            <Content>
              <Hold>
                <Title>Full-Stack Engineer</Title>
                <Desc>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis esse perspiciatis aliquid{" "}
                </Desc>
              </Hold>
            </Content>
            <DivHolder>
              <Div>Emeka Egwuatu</Div>
              <IconHolder>
                <Icon style={{ fontSize: "20px" }}>
                  <HiOutlineShare />
                </Icon>
                <Icon style={{ fontSize: "20px" }} onClick={Increment}>
                  <PiHeartStraight /> {click}{" "}
                </Icon>
              </IconHolder>
            </DivHolder>
          </CardHolder>
          <CardHolder>
            <ImageHolder>
              <Img src={pix} />
            </ImageHolder>
            <Content>
              <Hold>
                <Title>Full-Stack Engineer</Title>
                <Desc>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis esse perspiciatis aliquid{" "}
                </Desc>
              </Hold>
            </Content>
            <DivHolder>
              <Div>Emeka Egwuatu</Div>
              <IconHolder>
                <Icon style={{ fontSize: "20px" }}>
                  <HiOutlineShare />
                </Icon>
                <Icon style={{ fontSize: "20px" }} onClick={Increment}>
                  <PiHeartStraight /> {click}{" "}
                </Icon>
              </IconHolder>
            </DivHolder>
          </CardHolder>
          <CardHolder>
            <ImageHolder>
              <Img src={pix} />
            </ImageHolder>
            <Content>
              <Hold>
                <Title>Full-Stack Engineer</Title>
                <Desc>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis esse perspiciatis aliquid{" "}
                </Desc>
              </Hold>
            </Content>
            <DivHolder>
              <Div>Emeka Egwuatu</Div>
              <IconHolder>
                <Icon style={{ fontSize: "20px" }}>
                  <HiOutlineShare />
                </Icon>
                <Icon style={{ fontSize: "20px" }} onClick={Increment}>
                  <PiHeartStraight /> {click}{" "}
                </Icon>
              </IconHolder>
            </DivHolder>
          </CardHolder>
          <CardHolder>
            <ImageHolder>
              <Img src={pix} />
            </ImageHolder>
            <Content>
              <Hold>
                <Title>Full-Stack Engineer</Title>
                <Desc>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis esse perspiciatis aliquid{" "}
                </Desc>
              </Hold>
            </Content>
            <DivHolder>
              <Div>Emeka Egwuatu</Div>
              <IconHolder>
                <Icon style={{ fontSize: "20px" }}>
                  <HiOutlineShare />
                </Icon>
                <Icon style={{ fontSize: "20px" }} onClick={Increment}>
                  <PiHeartStraight /> {click}{" "}
                </Icon>
              </IconHolder>
            </DivHolder>
          </CardHolder>
          <CardHolder>
            <ImageHolder>
              <Img src={pix} />
            </ImageHolder>
            <Content>
              <Hold>
                <Title>Full-Stack Engineer</Title>
                <Desc>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis esse perspiciatis aliquid{" "}
                </Desc>
              </Hold>
            </Content>
            <DivHolder>
              <Div>Emeka Egwuatu</Div>
              <IconHolder>
                <Icon style={{ fontSize: "20px" }}>
                  <HiOutlineShare />
                </Icon>
                <Icon style={{ fontSize: "20px" }} onClick={Increment}>
                  <PiHeartStraight /> {click}{" "}
                </Icon>
              </IconHolder>
            </DivHolder>
          </CardHolder>
          <CardHolder>
            <ImageHolder>
              <Img src={pix} />
            </ImageHolder>
            <Content>
              <Hold>
                <Title>Full-Stack Engineer</Title>
                <Desc>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis esse perspiciatis aliquid{" "}
                </Desc>
              </Hold>
            </Content>
            <DivHolder>
              <Div>Emeka Egwuatu</Div>
              <IconHolder>
                <Icon style={{ fontSize: "20px" }}>
                  <HiOutlineShare />
                </Icon>
                <Icon style={{ fontSize: "20px" }} onClick={Increment}>
                  <PiHeartStraight /> {click}{" "}
                </Icon>
              </IconHolder>
            </DivHolder>
          </CardHolder>
          <CardHolder>
            <ImageHolder>
              <Img src={pix} />
            </ImageHolder>
            <Content>
              <Hold>
                <Title>Full-Stack Engineer</Title>
                <Desc>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis esse perspiciatis aliquid{" "}
                </Desc>
              </Hold>
            </Content>
            <DivHolder>
              <Div>Emeka Egwuatu</Div>
              <IconHolder>
                <Icon style={{ fontSize: "20px" }}>
                  <HiOutlineShare />
                </Icon>
                <Icon style={{ fontSize: "20px" }} onClick={Increment}>
                  <PiHeartStraight /> {click}{" "}
                </Icon>
              </IconHolder>
            </DivHolder>
          </CardHolder>
          <CardHolder>
            <ImageHolder>
              <Img src={pix} />
            </ImageHolder>
            <Content>
              <Hold>
                <Title>Full-Stack Engineer</Title>
                <Desc>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis esse perspiciatis aliquid{" "}
                </Desc>
              </Hold>
            </Content>
            <DivHolder>
              <Div>Emeka Egwuatu</Div>
              <IconHolder>
                <Icon style={{ fontSize: "20px" }}>
                  <HiOutlineShare />
                </Icon>
                <Icon style={{ fontSize: "20px" }} onClick={Increment}>
                  <PiHeartStraight /> {click}{" "}
                </Icon>
              </IconHolder>
            </DivHolder>
          </CardHolder>
          <CardHolder>
            <ImageHolder>
              <Img src={pix} />
            </ImageHolder>
            <Content>
              <Hold>
                <Title>Full-Stack Engineer</Title>
                <Desc>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis esse perspiciatis aliquid{" "}
                </Desc>
              </Hold>
            </Content>
            <DivHolder>
              <Div>Emeka Egwuatu</Div>
              <IconHolder>
                <Icon style={{ fontSize: "20px" }}>
                  <HiOutlineShare />
                </Icon>
                <Icon style={{ fontSize: "20px" }} onClick={Increment}>
                  <PiHeartStraight /> {click}{" "}
                </Icon>
              </IconHolder>
            </DivHolder>
          </CardHolder>
          <CardHolder>
            <ImageHolder>
              <Img src={pix} />
            </ImageHolder>
            <Content>
              <Hold>
                <Title>Full-Stack Engineer</Title>
                <Desc>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis esse perspiciatis aliquid{" "}
                </Desc>
              </Hold>
            </Content>
            <DivHolder>
              <Div>Emeka Egwuatu</Div>
              <IconHolder>
                <Icon style={{ fontSize: "20px" }}>
                  <HiOutlineShare />
                </Icon>
                <Icon style={{ fontSize: "20px" }} onClick={Increment}>
                  <PiHeartStraight /> {click}{" "}
                </Icon>
              </IconHolder>
            </DivHolder>
          </CardHolder>
          <CardHolder>
            <ImageHolder>
              <Img src={pix} />
            </ImageHolder>
            <Content>
              <Hold>
                <Title>Full-Stack Engineer</Title>
                <Desc>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis esse perspiciatis aliquid{" "}
                </Desc>
              </Hold>
            </Content>
            <DivHolder>
              <Div>Emeka Egwuatu</Div>
              <IconHolder>
                <Icon style={{ fontSize: "20px" }}>
                  <HiOutlineShare />
                </Icon>
                <Icon style={{ fontSize: "20px" }} onClick={Increment}>
                  <PiHeartStraight /> {click}{" "}
                </Icon>
              </IconHolder>
            </DivHolder>
          </CardHolder>
          <CardHolder>
            <ImageHolder>
              <Img src={pix} />
            </ImageHolder>
            <Content>
              <Hold>
                <Title>Full-Stack Engineer</Title>
                <Desc>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis esse perspiciatis aliquid{" "}
                </Desc>
              </Hold>
            </Content>
            <DivHolder>
              <Div>Emeka Egwuatu</Div>
              <IconHolder>
                <Icon style={{ fontSize: "20px" }}>
                  <HiOutlineShare />
                </Icon>
                <Icon style={{ fontSize: "20px" }} onClick={Increment}>
                  <PiHeartStraight /> {click}{" "}
                </Icon>
              </IconHolder>
            </DivHolder>
          </CardHolder>
          <CardHolder>
            <ImageHolder>
              <Img src={pix} />
            </ImageHolder>
            <Content>
              <Hold>
                <Title>Full-Stack Engineer</Title>
                <Desc>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis esse perspiciatis aliquid{" "}
                </Desc>
              </Hold>
            </Content>
            <DivHolder>
              <Div>Emeka Egwuatu</Div>
              <IconHolder>
                <Icon style={{ fontSize: "20px" }}>
                  <HiOutlineShare />
                </Icon>
                <Icon style={{ fontSize: "20px" }} onClick={Increment}>
                  <PiHeartStraight /> {click}{" "}
                </Icon>
              </IconHolder>
            </DivHolder>
          </CardHolder>
          <CardHolder>
            <ImageHolder>
              <Img src={pix} />
            </ImageHolder>
            <Content>
              <Hold>
                <Title>Full-Stack Engineer</Title>
                <Desc>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis esse perspiciatis aliquid{" "}
                </Desc>
              </Hold>
            </Content>
            <DivHolder>
              <Div>Emeka Egwuatu</Div>
              <IconHolder>
                <Icon style={{ fontSize: "20px" }}>
                  <HiOutlineShare />
                </Icon>
                <Icon style={{ fontSize: "20px" }} onClick={Increment}>
                  <PiHeartStraight /> {click}{" "}
                </Icon>
              </IconHolder>
            </DivHolder>
          </CardHolder>
        </Wrapper>
      </Container>
    </>
  );
};
export default Card;

// const Container = styled.div``
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
`;

const Txt = styled.div`
  font-size: 10px;
`;

const Icon = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: orangered;
  /* flex-direction: column; */
  animation: ${pulseAnimation} 2s infinite;
`;

const IconHolder = styled.div`
  width: 50%;
  height: 40px;
  /* background-color: darkblue; */
  display: flex;
  gap: 10px;
  position: absolute;
  right: 0px;
  bottom: 0px;
`;

const Desc = styled.div`
  margin-top: 10px;
  font-size: 15px;
`;

const Title = styled.div`
  /* color: #fff; */
  font-size: 20px;
  font-family: sans-serif;
`;

const Hold = styled.div`
  width: 95%;
  height: 90%;
  /* margin-top: 20px; */
  /* background-color: cornflowerblue; */
  text-align: left;
`;

const Div = styled.div`
  width: 50%;
  /* height: 30px; */
  background-color: orangered;
  border-radius: 5px;
  color: #fff;
  padding: 5px 10px;
  transition: all 450ms;
  position: absolute;
  top: 0;
  left: 10px;

  &:hover {
    background-color: #fff;
    color: orangered;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

const DivHolder = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  /* background-color: brown; */
  position: relative;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  height: 120px;
  /* position: relative; */
  /* background-color: brown; */
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 5px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0px;
`;

const ImageHolder = styled.div`
  width: 100%;
  height: 200px;
  /* background-color: blue; */
`;

const CardHolder = styled.div`
  width: 250px;
  height: 395.5px;

  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);

  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 95%;
  height: 95%;

  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 30px 0;

  @media screen and (max-width: 835px) {
    width: 95%;
    display: flex;

    justify-content: center;
    flex-wrap: wrap;
  }
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 515px) {
    width: 100%;
  }
`;
