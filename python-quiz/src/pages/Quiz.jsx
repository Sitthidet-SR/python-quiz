import React, { useState, useEffect } from "react";

const QUESTIONS = [
  // ตัวแปรและชนิดข้อมูล
  {
    question: "ข้อใดคือวิธีประกาศตัวแปรในภาษา Python?",
    choices: [
      "int x = 5;",
      "x := 5",
      "x = 5",
      "let x = 5;",
    ],
    answer: 2,
    explanation: "Python ใช้ x = 5 ในการประกาศตัวแปร ไม่ต้องระบุชนิดข้อมูลหรือเครื่องหมายพิเศษอื่น ๆ"
  },
  {
    question: "ข้อใดคือชนิดข้อมูลใน Python?",
    choices: [
      "int, float, str, list",
      "integer, decimal, string, array",
      "num, text, array, bool",
      "number, string, list, bool",
    ],
    answer: 0,
    explanation: "ชนิดข้อมูลหลักใน Python ได้แก่ int, float, str, list, bool ฯลฯ"
  },
  // print()
  {
    question: "ฟังก์ชันใดใช้แสดงผลข้อความใน Python?",
    choices: [
      "echo()",
      "print()",
      "printf()",
      "console.log()",
    ],
    answer: 1,
    explanation: "ฟังก์ชัน print() ใช้สำหรับแสดงผลข้อความใน Python"
  },
  {
    question: "ข้อใดคือการแสดงผลค่าตัวแปร x ใน Python?",
    choices: [
      "echo x;",
      "print(x)",
      "console.log(x)",
      "printf(x)",
    ],
    answer: 1,
    explanation: "print(x) ใช้แสดงค่าตัวแปร x ใน Python"
  },
  // input()
  {
    question: "คำสั่งใดใช้รับค่าจากผู้ใช้ใน Python?",
    choices: [
      "input()",
      "scan()",
      "read()",
      "get()",
    ],
    answer: 0,
    explanation: "input() ใช้รับค่าจากผู้ใช้ใน Python"
  },
  // การคำนวณพื้นฐาน
  {
    question: "ข้อใดคือผลลัพธ์ของ 3 ** 2 ใน Python?",
    choices: [
      "6",
      "9",
      "8",
      "5",
    ],
    answer: 1,
    explanation: "เครื่องหมาย ** คือยกกำลัง ดังนั้น 3 ** 2 = 9"
  },
  {
    question: "ข้อใดคือการบวกค่าตัวแปร a และ b ใน Python?",
    choices: [
      "a + b",
      "a & b",
      "a ++ b",
      "a plus b",
    ],
    answer: 0,
    explanation: "การบวกใน Python ใช้เครื่องหมาย + เช่น a + b"
  },
  // if/else
  {
    question: "ถ้าต้องการตรวจสอบว่า x เท่ากับ 10 ใน Python ใช้ข้อใด?",
    choices: [
      "if x == 10:",
      "if x = 10:",
      "if (x == 10)",
      "if x === 10:",
    ],
    answer: 0,
    explanation: "if x == 10: เป็นรูปแบบการเปรียบเทียบค่าใน Python"
  },
  {
    question: "ข้อใดคือโครงสร้าง if/else ที่ถูกต้องใน Python?",
    choices: [
      "if x > 0: print('positive') else: print('negative')",
      "if x > 0: print('positive')\nelse: print('negative')",
      "if (x > 0) { print('positive') } else { print('negative') }",
      "if x > 0 then print('positive') else print('negative')",
    ],
    answer: 1,
    explanation: "Python ใช้ if ... else โดยขึ้นบรรทัดใหม่และย่อหน้า (indent)"
  },
  // for
  {
    question: "ข้อใดคือการวนลูป for ใน Python?",
    choices: [
      "for i in range(5):",
      "for (i=0; i<5; i++)",
      "foreach i in 5",
      "loop i from 1 to 5",
    ],
    answer: 0,
    explanation: "for i in range(5): เป็นรูปแบบการวนลูป for ใน Python"
  },
  // while
  {
    question: "ข้อใดคือการวนลูป while ใน Python?",
    choices: [
      "while (i < 5) { ... }",
      "while i < 5: ...",
      "while i < 5 then ...",
      "do while i < 5: ...",
    ],
    answer: 1,
    explanation: "while i < 5: ... เป็นรูปแบบการวนลูป while ใน Python"
  },
  // function
  {
    question: "ข้อใดคือการนิยามฟังก์ชันใน Python?",
    choices: [
      "function myFunc() {}",
      "def myFunc():",
      "func myFunc()",
      "define myFunc()",
    ],
    answer: 1,
    explanation: "def myFunc(): เป็นการนิยามฟังก์ชันใน Python"
  },
];

const TOTAL_TIME = 120; // วินาที
const QUESTIONS_PER_GAME = 10;

function getRandomQuestions() {
  const count = Math.min(QUESTIONS_PER_GAME, QUESTIONS.length);
  const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function getStats() {
  const stats = localStorage.getItem("python_quiz_stats");
  return stats ? JSON.parse(stats) : { best: 0, played: 0 };
}

function setStats(newStats) {
  localStorage.setItem("python_quiz_stats", JSON.stringify(newStats));
}

function Quiz() {
  const [questions, setQuestions] = useState(getRandomQuestions());
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [time, setTime] = useState(TOTAL_TIME);
  const [finished, setFinished] = useState(false);
  const [stats, setStatsState] = useState(getStats());
  const [gameEndedBy, setGameEndedBy] = useState(null); // "timeout" หรือ "complete"

  useEffect(() => {
    if (finished) return;
    if (time === 0) {
      setFinished(true);
      setGameEndedBy("timeout");
    }
    const timer = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(timer);
  }, [time, finished]);

  useEffect(() => {
    // อัปเดตสถิติเมื่อ finished เท่านั้น
    if (finished) {
      const newScore = score;
      const newStats = {
        best: Math.max(stats.best, newScore),
        played: stats.played + 1,
      };
      setStats(newStats);
      setStatsState(newStats);
    }
    // eslint-disable-next-line
  }, [finished]);

  function handleChoice(idx) {
    if (showAnswer) return;
    setSelected(idx);
    setShowAnswer(true);
    if (idx === questions[current].answer) {
      setScore((prev) => prev + 1);
    }
  }

  function nextQuestion() {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
      setShowAnswer(false);
    } else {
      setFinished(true);
      setGameEndedBy("complete");
    }
  }

  function restart() {
    setQuestions(getRandomQuestions());
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowAnswer(false);
    setTime(TOTAL_TIME);
    setFinished(false);
    setGameEndedBy(null);
  }

  if (finished) {
    return (
      <div style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="quiz-container" style={{maxWidth: 520, width: '100%', background: 'rgba(255,255,255,0.98)', borderRadius: 32, boxShadow: '0 8px 40px rgba(0,0,0,0.10)', padding: '40px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h1>Python Quiz</h1>
          <p>คะแนนของคุณ: {score} / {questions.length}</p>
          <p>คะแนนสูงสุด: {stats.best}</p>
          <p>เล่นไปแล้ว: {stats.played} ครั้ง</p>
          {gameEndedBy === "timeout" && <p style={{color: 'red'}}>หมดเวลา!</p>}
          <button onClick={restart}>เล่นใหม่</button>
          <div style={{marginTop: 32, textAlign: 'center', color: '#64748b', fontSize: '0.98rem'}}>
            สร้างโดย นักศึกษา สาขาวิทยาการคอมพิวเตอร์ รุ่นที่ 27
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className="quiz-container" style={{maxWidth: 520, width: '100%', background: 'rgba(255,255,255,0.98)', borderRadius: 32, boxShadow: '0 8px 40px rgba(0,0,0,0.10)', padding: '40px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>Python Quiz</h1>
        <div>เวลา: {time} วินาที</div>
        <div>คะแนน: {score}</div>
        <div>
          <b>ข้อ {current + 1}:</b> {q.question}
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, margin: '18px 0'}}>
          {q.choices.map((c, i) => {
            let bg = undefined;
            if (showAnswer) {
              if (i === q.answer) bg = "#aaffaa";
              else if (selected === i) bg = "#ffcccc";
            }
            return (
              <button
                key={i}
                onClick={() => handleChoice(i)}
                disabled={showAnswer}
                style={{
                  background: bg || 'linear-gradient(135deg, #c7d2fe 0%, #e0e7ff 100%)',
                  border: showAnswer && i === q.answer ? '2px solid #22c55e' : 'none',
                  color: showAnswer && i === q.answer ? '#065f46' : '#18181b',
                  fontWeight: showAnswer && i === q.answer ? 'bold' : 600,
                  width: 220,
                  minWidth: 180,
                  margin: '10px 0',
                  borderRadius: 16,
                  fontSize: '1.15rem',
                  boxShadow: '0 2px 10px rgba(37,99,235,0.07)',
                  transition: 'all 0.15s',
                  textAlign: 'center',
                  padding: '14px 0',
                  cursor: showAnswer ? 'default' : 'pointer',
                  outline: 'none',
                }}
              >
                {c}
              </button>
            );
          })}
        </div>
        {showAnswer && (
          <div>
            {selected === q.answer ? (
              <span style={{ color: "green" }}>ถูกต้อง!</span>
            ) : (
              <span style={{ color: "red" }}>ผิด! คำตอบที่ถูกคือ: {q.choices[q.answer]}</span>
            )}
            <div>{q.explanation}</div>
            <button onClick={nextQuestion} style={{ marginTop: 10 }} autoFocus>
              {current + 1 < questions.length ? "ข้อต่อไป" : "ดูผลคะแนน"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz; 