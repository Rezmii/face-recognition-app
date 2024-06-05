import { Button, Input } from "@chakra-ui/react";
import { useRef } from "react";

const InputSection = () => {
  const urlRef = useRef<HTMLInputElement>(null);
  const handleInput = () => {
    if (urlRef.current) {
      console.log(urlRef.current.value);
    }
  };
  return (
    <>
      <Input
        ref={urlRef}
        borderColor="gray.400"
        focusBorderColor="white"
        variant="filled"
        size="lg"
        width={400}
      />
      <Button size={"lg"} onClick={handleInput}>
        Detect
      </Button>
    </>
  );
};

export default InputSection;
