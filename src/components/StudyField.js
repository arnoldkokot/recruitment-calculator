import { CounterLabel, Text } from "@primer/components";
import { useSelector } from "react-redux";
import calculateScore from "../util/calculateScore";

export default function StudyField(props) {
  const { field, rules } = props;
  const active = useSelector(state => state.active.value);
  const { score } = calculateScore(rules, active);
  return (
    <>
      <CounterLabel mr={1}>{score}</CounterLabel>
      <Text>{field}</Text>
    </>
  );
}
