import Image from "next/image";

export default function HomePage() {
  const siteName = "CSMJU Website";
  const courseCount = 3;
  const isOpen = true;
  const topics: string[] = ["HTML", "CSS", "TypeScript", "Next.js"];

  return (
    <main className="page">
      <h1>{siteName}</h1>
      <p>จำนวนรายวิชา: {courseCount}</p>
      <p>สถานะระบบ: {isOpen ? "เปิดใช้งาน" : "ปิดใช้งาน"}</p>

      <ul className="topicList">
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </main>
  );
}