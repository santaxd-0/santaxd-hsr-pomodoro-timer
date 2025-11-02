import { Box, Center, Container } from "@chakra-ui/react";


export const DialogWindow = () => {
    return (
        <Container colorPalette={"yellow"}
        bg={"yellow"} 
        color={"black"}
        rounded={5}
        opacity={0.4}
        borderColor={"green"}>
            <Center>
                Hello World!
            </Center>
        </Container>
    );
}