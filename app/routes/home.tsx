import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "Custom Website development" },
  ];
}

export default function Home() {
  console.log("Home page rendered");
  return <section>My App</section>;
}
