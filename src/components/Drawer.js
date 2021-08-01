import { SelectMenu, ButtonPrimary } from "@primer/components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/active";
import subjects from "../subjects.json";

export default function Drawer() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const activeSubjects = useSelector(state => state.active.value);

  const handleSelect = selectedSubject => {
    setInput("");
    dispatch(add(selectedSubject));
  };

  /** filterSubjects()
   * 1. Removes from drawer subjects that are already active (to avoid duplicates in Selector)
   * 2. Removes subjects that dont match user search input (from suggestion box)
   */
  const filterSubjects = name => {
    if (name.toLowerCase().includes(input.toLowerCase())) {
      if (!activeSubjects.find(active => active.name === name)) return true;
    }
    return false;
  };
  const filtered = subjects.filter(filterSubjects);

  return (
    <SelectMenu>
      <ButtonPrimary as="summary">Dodaj maturę</ButtonPrimary>
      <SelectMenu.Modal align="right">
        <SelectMenu.Filter
          placeholder="Wyszukaj egzamin"
          value={input}
          aria-label="Filter Projects"
          onChange={event => setInput(event.target.value)}
        />
        <SelectMenu.List>
          {filtered.map(name => (
            <SelectMenu.Item key={name} onClick={() => handleSelect(name)}>
              {name}
            </SelectMenu.Item>
          ))}
        </SelectMenu.List>
      </SelectMenu.Modal>
    </SelectMenu>
  );
}
