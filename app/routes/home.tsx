import type { Route } from "./+types/home";
import { Quiz } from "../components/Quiz";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Quiz App" },
    { name: "description", content: "Test your knowledge with our interactive quiz!" },
  ];
}

export default function Home() {
  return <Quiz />;
}
