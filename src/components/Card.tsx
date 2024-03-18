import { Box, Center, ChakraProvider, Flex, Input } from "@chakra-ui/react"
import { ButtonComponent } from "./Button"
import { login } from "../services/login"


export const Card = () => {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Flex justify='center' align='center'>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' width='50%' marginRight='auto' >
            <Center>
              <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Center>
              <ButtonComponent login={login} />
            </Center>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  )
}