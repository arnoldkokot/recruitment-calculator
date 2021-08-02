import { Dialog, Box, Heading, Text, CircleBadge } from "@primer/components";
import { DotIcon } from "@primer/octicons-react";
import { useSelector } from "react-redux";
import calculateScore from "../util/calculateScore";

export default function ExtendedInfo(props) {
  const active = useSelector(state => state.active.value);
  const { open, faculty, field, rules, callback } = props;
  const { score, G1_name, G2_name, M } = calculateScore(rules, active);

  const partials = [
    M > 0 ? { name: "Matematyka podstawowa", id: "M" } : null,
    G1_name ? { name: G1_name, id: "G1" } : null,
    G2_name ? { name: G2_name, id: "G2" } : null,
  ].filter(Boolean);

  return (
    <Dialog
      isOpen={open}
      onDismiss={() => callback({ open: false })}
      aria-labelledby="header-id"
    >
      <Dialog.Header id="header-id">{faculty}</Dialog.Header>
      <Box p={3}>
        <Heading fontSize={3} mb={2}>
          {field}
        </Heading>
        <Text>Twój wynik dla tego kierunku:</Text>
        <CircleBadge ml="auto" mr="auto" mb={2}>
          {score} pkt
        </CircleBadge>
        {partials.length > 0 ? (
          <>
            <Text>Wynik ten został obliczony za pomocą przedmiotów:</Text>
            {partials.map((partial, index) => (
              <Box key={index}>
                <DotIcon />
                <Text ml={2}>
                  {partial.name} jako wskażnik {partial.id}
                </Text>
              </Box>
            ))}
          </>
        ) : (
          <Text>
            Żadna z uzupełnionych matur nie jest akceptowana przez ten kierunek
          </Text>
        )}
        <Box mt={2}>
          <Text>Matury uznawane przez ten kierunek</Text>
          {[...new Set([...rules.g1, ...rules.g2])].map((exam, index) => (
            <Box key={index}>
              <DotIcon />
              <Text ml={2}>{exam}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Dialog>
  );
}
