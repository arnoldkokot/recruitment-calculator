import { Box, StyledOcticon, TextInput, Text } from "@primer/components";
import { XIcon, EyeClosedIcon } from "@primer/octicons-react";
import { useDispatch } from "react-redux";
import { remove, changeScore } from "../redux/active";

export default function Subject(props) {
  const { name, score } = props;
  const dispatch = useDispatch();

  function handleInput(input) {
    let converted = Number(input);

    if (isNaN(converted)) return;
    if (converted < 0) converted = 0;
    if (converted > 100) converted = 100;

    dispatch(changeScore({ name, newScore: converted }));
  }

  return (
    <Box
      borderColor="border.primary"
      borderTopWidth={1}
      borderTopStyle="solid"
      display="grid"
      gridTemplateColumns="1fr 1fr 32px 32px"
    >
      <Box p={2}>{name}</Box>
      <Box display="flex" alignItems="center">
        <TextInput
          aria-label="Score"
          width={60}
          autoComplete="off"
          variant="small"
          value={score}
          onChange={event => handleInput(event.target.value)}
        />
        <Text ml={-20}>%</Text>
      </Box>

      <Box className="pointer" p={2} onClick={() => dispatch(remove(name))}>
        <StyledOcticon icon={EyeClosedIcon} mb={2.5} />
      </Box>
      <Box className="pointer" p={2} onClick={() => dispatch(remove(name))}>
        <StyledOcticon icon={XIcon} color="icon.danger" mb={2.5} />
      </Box>
    </Box>
  );
}
