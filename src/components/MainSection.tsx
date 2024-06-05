import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import InputSection from "./InputSection";
import ImageSection from "./ImageSection";
import { useState } from "react";
import { recognizeFace } from "../services/getCarifaiRequestOptions";

const MainSection = () => {
  let user = "Bartek";
  const [imgUrl, setImgUrl] = useState<string>("");
  const [clarifaiResult, setClarifaiResult] = useState<any>(null);

  const handleImageDetection = async (url: string) => {
    setImgUrl(url);
    try {
      const result = await recognizeFace(url);
      setClarifaiResult(result.outputs[0].data.concepts);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log(clarifaiResult);

  return (
    <>
      <VStack>
        <VStack align="center">
          <Text fontSize={"2xl"}>{user}, your current rank is 1</Text>
          <Text fontSize={"xl"}>Choose image to detect face</Text>
          <HStack>
            <InputSection setImgUrl={(url) => handleImageDetection(url)} />
          </HStack>
          <ImageSection imgUrl={imgUrl} />
          <Text fontSize="2xl" fontWeight="bold">
            {clarifaiResult
              ? clarifaiResult[0].name
                  .split(" ")
                  .map(
                    (part: string) =>
                      part.charAt(0).toUpperCase() + part.slice(1)
                  )
                  .join(" ")
              : ""}
          </Text>
        </VStack>
      </VStack>
    </>
  );
};

export default MainSection;
