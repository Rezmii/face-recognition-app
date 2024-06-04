import { Button, HStack, Input, Text, VStack } from "@chakra-ui/react";

const MainSection = () => {
  let user = "Bartek";
  return (
    <>
      <VStack>
        <Text fontSize={"2xl"}>{user}, your current rank is 1</Text>
        <Text fontSize={"xl"}>Choose image to detect face</Text>
        <HStack alignItems="center">
          <Input
            borderColor="gray.400"
            focusBorderColor="white"
            variant="filled"
            size="lg"
            width={400}
          />
          <Button size={"lg"}>Detect</Button>
        </HStack>
      </VStack>
    </>
  );
};

export default MainSection;
