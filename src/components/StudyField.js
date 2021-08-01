import { CounterLabel, Text } from "@primer/components";
import { useSelector } from "react-redux";
import calculateScore from "../util/calculateScore";

export default function StudyField(props) {
  const { field, rules } = props;
  const active = useSelector(state => state.active.value);
  return (
    <>
      <CounterLabel mr={1}>{calculateScore(rules, active)}</CounterLabel>
      <Text>{field}</Text>
    </>
  );
}
