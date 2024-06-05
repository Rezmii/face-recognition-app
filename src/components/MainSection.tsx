import { HStack, Text, VStack } from "@chakra-ui/react";
import InputSection from "./InputSection";
import ImageSection from "./ImageSection";
import { useState } from "react";

const MainSection = () => {
  let user = "Bartek";
  const [imgUrl, setImgUrl] = useState<string>("");
  return (
    <>
      <VStack>
        <VStack align="center">
          <Text fontSize={"2xl"}>{user}, your current rank is 1</Text>
          <Text fontSize={"xl"}>Choose image to detect face</Text>
          <HStack>
            <InputSection setImgUrl={(url) => setImgUrl(url)} />
          </HStack>
          <ImageSection imgUrl={imgUrl} />
        </VStack>
      </VStack>
    </>
  );
};

export default MainSection;
