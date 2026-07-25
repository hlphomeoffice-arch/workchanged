"use client";

import { useMemo, useState } from "react";

type Answers = {
  repeatability: number | null;
  rules: number | null;
  digital: number | null;
  consequence: number | null;
  human: number | null;
  sensitive: number | null;
};

const initialAnswers: Answers = {
  repeatability: null,
  rules: null,
  digital: null,
  consequence: null,
  human: null,
  sensitive: null,
};

const questions: Array<{
  key: keyof Answers;
  label: string;
  options: Array<[string, number]>;
}> = [
  {
    key: "repeatability",
    label: "How often does the task follow the same pattern?",
    options: [
      ["Rarely", 0],
      ["Sometimes", 1],
      ["Usually", 2],
    ],
  },
  {
    key: "rules",
    label: "How clearly can a good result be described?",
    options: [
      ["It depends heavily on judgement", 0],
      ["Partly", 1],
      ["Clear rules or examples exist", 2],
    ],
  },
  {
    key: "digital",
    label: "Are the inputs already digital and structured?",
    options: [
      ["Mostly physical or scattered", 0],
      ["Mixed", 1],
      ["Yes", 2],
    ],
  },
  {
    key: "consequence",
    label: "What happens if the output is wrong?",
    options: [
      ["Serious harm or a binding decision", 0],
      ["A person can catch it before use", 1],
      ["Low consequence and reversible", 2],
    ],
  },
  {
    key: "human",
    label: "How much trust, negotiation or accountable judgement is involved?",
    options: [
      ["A great deal", 0],
      ["Some", 1],
      ["Very little", 2],
    ],
  },
  {
    key: "sensitive",
    label: "Can the task be tested without confidential or personal data?",
    options: [
      ["No", 0],
      ["Only with approved controls", 1],
      ["Yes", 2],
    ],
  },
];

export function TaskRiskAssessment() {
  const [task, setTask] = useState("");
  const [answers, setAnswers] = useState(initialAnswers);

  const result = useMemo(() => {
    const values = Object.values(answers);
    const answered = values.filter((value): value is number => value !== null);
    if (answered.length < questions.length) {
      return {
        label: "Answer all six questions",
        text: `${questions.length - answered.length} ${
          questions.length - answered.length === 1 ? "answer remains" : "answers remain"
        }. The recommendation will distinguish a controlled test, a split task or human-led work.`,
      };
    }

    const score = answered.reduce((total, value) => total + value, 0);

    if (score >= 9) {
      return {
        label: "Good candidate for a controlled test",
        text: "The task has repeatable, testable characteristics. Compare an AI-assisted version with a human baseline, then measure accuracy and correction time before expanding it.",
      };
    }

    if (score >= 5) {
      return {
        label: "Split the task before testing",
        text: "Some preparation steps may be suitable, while judgement or risk still needs a person. Separate drafting, classification or retrieval from the final accountable decision.",
      };
    }

    return {
      label: "Keep this human-led",
      text: "The task depends heavily on context, trust, consequence or protected information. Look for a lower-risk preparation task instead of automating the outcome.",
    };
  }, [answers]);

  return (
    <section className="decision-tool" aria-labelledby="task-test-title">
      <div className="decision-tool__intro">
        <p className="kicker">Practical tool</p>
        <h2 id="task-test-title">Test a task, not your whole job title</h2>
        <p>
          This produces a workflow recommendation, not a job-loss probability.
          Nothing is sent or saved.
        </p>
      </div>
      <label className="decision-tool__task">
        <span>Task name, optional</span>
        <input
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="For example: draft a weekly status report"
        />
      </label>
      <div className="decision-tool__questions">
        {questions.map((question) => (
          <fieldset key={question.key}>
            <legend>{question.label}</legend>
            <div>
              {question.options.map(([label, value]) => (
                <label key={label}>
                  <input
                    type="radio"
                    name={question.key}
                    value={value}
                    checked={answers[question.key] === value}
                    onChange={() =>
                      setAnswers((current) => ({
                        ...current,
                        [question.key]: value,
                      }))
                    }
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
      <div className="decision-tool__result" aria-live="polite">
        <span>{task.trim() || "This task"}</span>
        <strong>{result.label}</strong>
        <p>{result.text}</p>
      </div>
    </section>
  );
}
