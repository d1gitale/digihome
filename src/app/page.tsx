import { Navbar } from "./Navbar";
import { Greeting } from "./Greeting";
import { Projects } from "./Projects";
import Contact from "./Contact"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Greeting></Greeting>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}
