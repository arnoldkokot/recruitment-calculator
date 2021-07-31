import { Heading } from "@primer/components";
import { useSelector } from "react-redux";

function calculateScore(M, G1, G2) {
  return 4 * (0.75 * G1 + 0.25 * G2) + M;
}

export default function Results() {
  const activeSubjects = useSelector(state => state.active.value);

  const shown = activeSubjects.filter(subject => !subject.hidden);

  // Find M from basic math
  const basicMath = shown.find(
    subject => subject.name === "Matematyka podstawowa"
  );
  const componentM = basicMath ? basicMath.score * 2 : 0;

  // Find G1 and G2
  const advanced = shown.filter(
    subject => subject.name !== "Matematyka podstawowa"
  );

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

  return (
    <>
      <Heading fontSize={5} textAlign="center" m={4}>
        Twój wynik to 0 punktów
      </Heading>
      M={componentM}
      <br />
      {JSON.stringify(advanced)}
    </>
  );
}
