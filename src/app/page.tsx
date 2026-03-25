import Landing from "@/components/Landing";

export const metadata = {
  title: "Ketan Ayatti — DevOps Engineer",
  description: "I built a deployment platform that detects failure and rolls back automatically. Then I ran an LLM on AWS EC2 for $0/month. That's the kind of problem I enjoy.",
};

export default function Home() {
  return (
    <>
      <Landing />
    </>
  );
}
