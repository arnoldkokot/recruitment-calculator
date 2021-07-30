import { Box, StyledOcticon } from "@primer/components";
import { EyeClosedIcon, XIcon } from "@primer/octicons-react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/selectedExams";

export default function SelectedItem(props) {
  const dispatch = useDispatch();
  return (
    <li>
      <Box
        borderColor="border.primary"
        borderBottomWidth={1}
        borderBottomStyle="solid"
        p={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {props.name}
        <div onClick={() => dispatch(remove(props.name))}>
          <EyeClosedIcon />
          <StyledOcticon icon={XIcon} color="icon.danger" ml={2} />
        </div>
      </Box>
    </li>
  );
}
