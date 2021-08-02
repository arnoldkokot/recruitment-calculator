import { ActionList, TextInput } from "@primer/components";
import { SearchIcon, DotIcon } from "@primer/octicons-react";
import { useState } from "react";
import fields from "../fields.json";
import StudyField from "./StudyField";
import ExtendedInfo from "./ExtendedInfo";

export default function Results() {
  const [input, setInput] = useState("");
  const [dialog, setDialog] = useState({ open: false });
  function buildProps(fields, input) {
    const items = [];
    const groups = [];
    let id = 0;

    for (const faculty in fields) {
      let skipGroup = true;
      for (const field in fields[faculty]) {
        if (field.toLowerCase().includes(input)) {
          skipGroup = false;
          items.push({
            leadingVisual: DotIcon,
            text: <StudyField field={field} rules={fields[faculty][field]} />,
            groupId: id,
            onClick: () =>
              setDialog({
                open: true,
                field,
                faculty,
                rules: fields[faculty][field],
              }),
          });
        }
      }
      if (!skipGroup)
        groups.push({
          groupId: id,
          header: { title: faculty, variant: "subtle" },
        });
      id++;
    }
    return { groupMetadata: groups, items };
  }

  return (
    <>
      <TextInput
        icon={SearchIcon}
        width="100%"
        value={input}
        onChange={event => setInput(event.target.value)}
        placeholder="Wyszukaj kierunek"
      />
      <ActionList {...buildProps(fields, input.toLowerCase())} />
      {dialog.open ? <ExtendedInfo {...dialog} callback={setDialog} /> : null}
    </>
  );
}
