import { Box, ChakraProvider, Flex, Heading } from "@chakra-ui/react"

export const HeaderTitle = () => {
    return (
        <>
            <ChakraProvider>
                <Box bg='#9413dc'>
                    <Flex align='center' justify='center'>
                        <Heading size='lg' padding='25px' color='#ffffff' > Dio Bank</Heading>
                    </Flex>
                </Box>
            </ChakraProvider >
        </>
    )
}