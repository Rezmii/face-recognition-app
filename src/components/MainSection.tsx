import { HStack, Text, VStack } from "@chakra-ui/react";
import InputSection from "./InputSection";

const MainSection = () => {
  let user = "Bartek";
  return (
    <>
      <VStack>
        <VStack align="center">
          <Text fontSize={"2xl"}>{user}, your current rank is 1</Text>
          <Text fontSize={"xl"}>Choose image to detect face</Text>
          <HStack>
            <InputSection />
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default MainSection;
