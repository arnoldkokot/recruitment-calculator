import "./Selected.css";
import SelectedItem from "./SelectedItem";
import { useSelector } from "react-redux";

export default function Selected() {
  const selected = useSelector(state => state.selectedExams.value);

  return (
    <ul className="selected-exams">
      {selected.map(subject => (
        <SelectedItem name={subject} />
      ))}
    </ul>
  );
}
