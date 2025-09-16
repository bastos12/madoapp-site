import { Login } from "@/components/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inscription | Mado",
  description:
    "Mado est une application de rencontre pour relations sérieuses et durables.",
};

export default function LoginPage() {
  return (
    <main className="">
      <Login />
    </main>
  );
}
