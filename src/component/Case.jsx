import React from "react";
import { useState } from "react";
import camelCase from "camelcase";
import "../css/Case.css";
import {
  Flex,
  Box,
  Button,
  Container,
  Textarea,
  useToast,
  useColorMode,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { FaMoon, FaSun } from "react-icons/fa";

const Case = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  let [text, setText] = useState("");
  const toast = useToast();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleUpper = () => {
    setText(text.toUpperCase());
  };
  const handleLower = () => {
    setText(text.toLowerCase());
  };
  const handleReset = () => {
    setText("");
    toast({
      title: `You have Reset `,
      position: "top",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };
  const handleSpace = () => {
    setText(text.replace(/\s+/g, " ").trim());
  };
  const handleCamel = () => {
    // console.log("fun is running");
    setText(camelCase(text));
  };
  return (
    <Box>
      <Box className="header">
        <Box className="middle">
          <Flex className="navbar">
            <Box className="leftPart">
              <Flex className="leftnavbar">
                <button className="btn">CaseConverter</button>
                <Button bg="transparent">Created By: Dipali</Button>
              </Flex>
            </Box>
            <Box>
              <IconButton
                aria-label="toggle theme"
                rounded="full"
                size="md"
                onClick={toggleColorMode}
                icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
              />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box>
        <Container mt="10px">
          <Textarea
            name="text"
            placeholder="Enter your text"
            value={text}
            onChange={handleChange}
            rows="5"
          />
          <br />
          <Button mx="8px" my="10px" bg="rgb(238,174,202)" onClick={handleUpper}>
            UPPERCASE
          </Button>
          <Button mx="8px" my="10px" bg="rgb(238,174,202)" onClick={handleLower}>
            lowercase
          </Button>
          <Button mx="8px" my="10px" bg="rgb(238,174,202)" onClick={handleCamel}>
            camelCase
          </Button>
          <Button mx="8px" my="10px" bg="rgb(238,174,202)" onClick={handleReset}>
            <DeleteIcon />
            Reset
          </Button>
          <Button mx="10px" my="10px" bg="rgb(238,174,202)" onClick={handleSpace}>
            Remove Extra Space From Text
          </Button>

          <br />
        </Container>
        <Box className="preview">
          <Text className="previewtext">Preview : {text}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Case;
