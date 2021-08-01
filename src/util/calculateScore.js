function gScore(eligible, examsArray) {
  const { score } = examsArray.reduce(
    (best, current) => {
      if (current.score > best.score && eligible.includes(current.name))
        return current;
      return best;
    },
    { score: 0 }
  );

  let G;
  if (score < 30) G = score;
  else if (score <= 80) G = score + 2 * (score - 30);
  else G = score + 100;

  return G;
}

function mScore(examsArray) {
  const basicMath = examsArray.find(
    subject => subject.name === "Matematyka podstawowa"
  );
  return basicMath ? basicMath.score * 2 : 0;
}

export default function calculateScore(rules, active) {
  const shown = active.filter(subject => !subject.hidden);

  const M = mScore(shown);
  const G1 = gScore(rules.g1, shown);
  const G2 = gScore(rules.g2, shown);

  return 4 * (0.75 * G1 + 0.25 * G2) + M;
}
