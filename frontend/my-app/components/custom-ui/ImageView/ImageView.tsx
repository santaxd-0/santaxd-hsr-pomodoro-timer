import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export const ImageView = ({ children }: any) => {
    return (
        <Box position={"relative"}>
            <Image rounded="md"
            src="login_wallpaper.png"
            alt="Honkai Train Picture"
            fit={"contain"}
            height={"fit"}/>
            {children}
        </Box>
    );
}