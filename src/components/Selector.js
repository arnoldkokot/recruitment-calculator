import { Box, Text } from "@primer/components";
import Drawer from "./Drawer";
import { useSelector } from "react-redux";
import Subject from "./Subject";

export default function Selector() {
  const activeSubjects = useSelector(state => state.active.value);
  return (
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
        p={3}
        position="relative"
      >
        <Text as="p" fontWeight="bold">
          Twoje matury
        </Text>
        <Drawer />
      </Box>
      {activeSubjects.map(subject => (
        <Subject {...subject} key={subject.name} />
      ))}
    </Box>
  );
}
