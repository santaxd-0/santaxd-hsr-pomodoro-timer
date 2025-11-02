import { Button } from "@chakra-ui/react";
import { ImageView } from "../components/custom-ui/ImageView/ImageView";

export default function Home() {
  return (
    <ImageView>
      <Button position={"absolute"}
      right={50}
      top={50}>Hello!</Button
    </ImageView>
  );
}
