import "./Picker.css";
import { SelectMenu, ButtonPrimary } from "@primer/components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/selectedExams";

const subjects = [
  "Matematyka",
  "Fizyka",
  "Informatyka",
  "Chemia",
  "Biologia",
  "Język obcy",
  "Geografia",
];

export default function Picker() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSelect = selectedSubject => {
    setInput("");
    dispatch(add(selectedSubject));
  };

  const filteredSubjects = subjects
    .filter(s => s.toLowerCase().includes(input))
    .map(s => (
      <SelectMenu.Item key={s} onClick={() => handleSelect(s)}>
        {s}
      </SelectMenu.Item>
    ));

  return (
    <SelectMenu>
      <ButtonPrimary as="summary">Dodaj maturę</ButtonPrimary>
      <SelectMenu.Modal align="right">
        {/* <SelectMenu.Header>Poziom rozszerzony</SelectMenu.Header> */}
        <SelectMenu.Filter
          placeholder="Wyszukaj egzamin"
          value={input}
          aria-label="Filter Projects"
          onChange={event => setInput(event.target.value)}
        />
        <SelectMenu.List>{filteredSubjects}</SelectMenu.List>
      </SelectMenu.Modal>
    </SelectMenu>
  );
}
