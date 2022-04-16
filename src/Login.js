import { useState, Component } from "react";

import {
  Box,
  Flex,
  Center,
  Text,
  Image,
  Checkbox,
  Input,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";

import "./Login.css";

import astronot from "./assets/astronot.png";
import logountan from "./assets/logo-untan.png";

import { InputElement } from "./Components/InputElement";

function Cover() {
  return (
    <VStack justify="center" align="center" flex={1} bg="#3949AB" color="white">
      <Image src={astronot} alt="astronot" />
      <Text fontWeight="bold" fontSize="xl">
        Monitoring GCR
      </Text>
      <Text>Universitas Tanjungpura</Text>
    </VStack>
  );
}

const Footer = () => {
  return (
    <VStack fontSize="sm" justify="center" align="center" pb="32px">
      <Text>
        Dikembangkan oleh{" "}
        <Text fontWeight="bold" display="inline">
          UPT. Teknologi Informasi dan Komunikasi
        </Text>
      </Text>
      <Text>Universitas Tanjungpura</Text>
    </VStack>
  );
};

function Login() {
  // functional pure component
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Flex height="100vh" fontFamily="Ubuntu">
      <Cover />
      <VStack flex="1" justify={"space-between"}>
        <VStack pt="200px" alignItems="flex-start">
          <Image src={logountan} alt="logountan" alignSelf="center" />

          <Text id="login-title-sub">Welcome Back</Text>
          <Text id="login-title">Login to your account</Text>

          <InputElement
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukkan username anda"
          />

          <InputElement
            label="Password"
            isPassword
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan password anda"
          />

          <HStack justifyContent="space-between" mt="22px">
            <Checkbox
              value={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            >
              Remember me
            </Checkbox>
            <a href="#" id="forgot-pass">
              Forgot password?
            </a>
          </HStack>
          <Button
            bg="#3949AB"
            color="white"
            borderRadius="24px"
            width="100%"
            mt="38px"
            py="24px"
            onClick={() => {
              console.log(username, password, rememberMe);

              const datajson = JSON.stringify({
                username: username,
                password: password,
                rememberMe: rememberMe,
              });

              fetch("http://localhost:5000/login", {
                method: "POST",
                body: datajson,
              });
            }}
          >
            Login
          </Button>
        </VStack>
        <Footer />
      </VStack>
    </Flex>
  );
}

export default Login;
