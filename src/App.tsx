import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 70%;
  text-align: center;
  font-size: 250px;
  font-weight: 700;
  margin-top: 10px;
  color: ${(props) => props.theme.blue};
  background-color: white;
  border: 5px dashed ${(props) => props.theme.lighterblue};
  border-radius: 30px;
`;
const Form = styled.form`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
const InputInform = styled.input`
  width: 70%;
  height: 60px;
  margin-top: 20px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => props.theme.blue};
  border-radius: 15px;
  border: 5px dashed ${(props) => props.theme.lighterblue};
`;
const Updowns = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 10px;
`;
const Title = styled.h1`
  width: 70%;
  text-align: center;
  padding: 15px;
  font-size: 50px;
  border: 5px dashed ${(props) => props.theme.lighterblue};
  border-radius: 30px;
  margin-top: 40px;
  font-weight: 700;
`;
const Explanation = styled.div`
  font-size: 30px;
  margin-top: 10px;
`;

function App() {
  const [ans, setAns] = useState("");
  const [userAns, setUserAns] = useState(0);
  const [question, setQuestion] = useState("?");
  const [updown, setUpdown] = useState("What is your Answer?");

  useEffect(() => {
    setAns(String(Math.floor(Math.random() * 100)));
  }, []);
  console.log(ans);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAns(Number(e.target.value));
    checker();
  };

  const checker = () => {
    if (userAns == Number(ans)) {
      setQuestion(ans);
      setUpdown("Correct!");
    } else {
      if (userAns > Number(ans)) {
        setUpdown("DOWN!");
      } else {
        setUpdown("UP!");
      }
    }
  };

  return (
    <Wrapper>
      <Title>Numbers!</Title>
      <Explanation>Guess Number Between 1~100</Explanation>
      <Box>{question}</Box>
      <InputInform type="number" onChange={(e) => handleOnChange(e)} />
      <Updowns>{updown}</Updowns>
    </Wrapper>
  );
}

export default App;
