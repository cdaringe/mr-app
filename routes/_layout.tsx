import { h } from "preact";
import { Header } from "../components/Header.tsx";

export default async function Layout(req: Request, ctx: FreshContext) {
  return (
    <>
      <Header>
      </Header>
      <ctx.Component />
    </>
  );
}
