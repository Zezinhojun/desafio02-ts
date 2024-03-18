import { Button } from '@chakra-ui/react'

interface ButtonFn {
    login: () => void
}

export const ButtonComponent = ({ login }: ButtonFn) => {
    return (
        <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            Click aqui
        </Button>
    )
}