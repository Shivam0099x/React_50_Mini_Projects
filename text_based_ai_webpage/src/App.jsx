import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

export default function App() {
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(undefined);

  const askQuestion = async () => {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${question}`,
    });
    setQuestion("")

    const data = response.text;
    const newData = data.split("* ")
    // console.log(newData)

    const trimmedData = newData.map(item=> item.trim())
    // console.log(trimmedData)

    setResult(trimmedData);
  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="col-span-1 h-screen bg-zinc-800">
        <div className="w-full font-semibold text-xl text-slate-200 p-5 text-center">
          <h2>Your Recent History</h2>
        </div>
      </div>

      <div className="col-span-4 h-screen ">
        <div className="container h-[80%] overflow-y-scroll text-white ">
          {result}
        </div>
        <div className=" border-0 border-zinc-300 h-16 mt-10 bg-zinc-600 rounded-4xl w-[75%] text-white flex justify-between mx-auto pr-5 ">
          <input
            type="text"
            placeholder="Ask me anything"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className=" px-5 py-2 outline-none w-full h-full rounded-4xl text-lg"
          />
          <button onClick={askQuestion} className="cursor-pointer">Ask</button>
        </div>
      </div>
    </div>
  );
}
