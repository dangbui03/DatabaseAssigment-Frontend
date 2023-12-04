import Logo from "./Logo";
import LogoDesc from "./LogoDesc";
import WebDesc from "./WebDesc";
export default function Main() {
  return (
    <main className="grid grid-cols-2 gap-10 h-screen pt-24 items-center justify-center w-screen -z-10">
      <section className="p-5">
        <Logo />
        <LogoDesc />
      </section>
      <WebDesc />
    </main>
  );
}
