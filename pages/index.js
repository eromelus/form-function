import Head from "next/head";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Head>
        <title>Form &#38; Function</title>
        <meta name="description" content="stretch therapy personal training" />
      </Head>

      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <h1>Home Page</h1>
    </div>
  );
}
