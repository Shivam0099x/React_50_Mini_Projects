import React, { useEffect, useState } from "react";
import { checkHeading, replaceStars } from "../helper";

const Answers = ({ ans, length, index }) => {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {

        // console.log(ans,checkHeading(ans))

    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceStars(answer));
    }
  }, []);

  return (
    <div className="m-3">
      {answer}
      {index === 0 && length > 1 ? (
        <span className="text-white font-semibold text-xl">{answer}</span>
      ) : heading ? (
        <span className="text-white font-semibold text-xl">{answer}</span>
      ) : (
        <span className="text-zinc-300 text-md">{answer}</span>
      )}
    </div>
  );
};

export default Answers;
