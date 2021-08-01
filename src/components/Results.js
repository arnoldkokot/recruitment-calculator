import { ActionList, TextInput } from "@primer/components";
import { SearchIcon, DotIcon } from "@primer/octicons-react";
import { useState } from "react";
import fields from "../fields.json";

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
          text: field,
          groupId: id,
          onClick: () => {
            console.log(field);
          },
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

export default function Results() {
  const [input, setInput] = useState("");
  return (
    <>
      <TextInput
        icon={SearchIcon}
        width="100%"
        value={input}
        onChange={event => setInput(event.target.value)}
      />
      <ActionList {...buildProps(fields, input.toLowerCase())} />
    </>
  );
}

// if (!basicMath)
//   return (
//     <>
//       <Heading fontSize={5} textAlign="center" m={4}>
//         Brak wskaźnika M
//       </Heading>
//       <Text>
//         Uzupełnij swoje matury o Matematykę na poziomie podstawowym, jest ona
//         podstawą do przystąpienia do rekrutacji.
//       </Text>
//     </>
//   );

/* {Object.keys(fields).map(faculty => (
        <Faculty name={faculty} fields={fields[faculty]} />
      ))} */

// const activeSubjects = useSelector(state => state.active.value);

// const shown = activeSubjects.filter(subject => !subject.hidden);

// import { useSelector } from "react-redux";
// import Faculty from "./Faculty";
//
// // Find M from basic math
// const basicMath = shown.find(
//   subject => subject.name === "Matematyka podstawowa"
// );
// const componentM = basicMath ? basicMath.score * 2 : 0;

// // Find G1 and G2
// const advanced = shown.filter(
//   subject => subject.name !== "Matematyka podstawowa"
// );
