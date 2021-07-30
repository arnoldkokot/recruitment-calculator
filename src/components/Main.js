import { Box, Text, Heading } from "@primer/components";
import "./Main.css";
import Selected from "./Selected";
import Picker from "./Picker";

export default function Main() {
  return (
    <main>
      <Box
        borderColor="border.primary"
        borderWidth={1}
        borderStyle="solid"
        borderRadius={2}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderColor="border.primary"
          borderBottomWidth={1}
          borderBottomStyle="solid"
          p={3}
          position="relative"
        >
          <Text as="p" fontWeight="bold">
            Twoje wybrane matury
          </Text>
          <Picker />
        </Box>

        <Selected />
      </Box>
      <Heading fontSize={5} textAlign="center" m={4}>
        999 punktów
      </Heading>
      <Text>
        Twoje przedmioty składowe G to Matematyka i Fizyka, pamiętaj że nie
        wszystkie kierunki mogą uznawać te przedmioty dokładną listę znajdziesz
        tutaj.
      </Text>
      <Text>
        Sugerowany kierunki: * Informatyka (IEiT) * Autmoatyka i Robotyka
        (EAIiB)
      </Text>
    </main>
  );
}
