import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Page1 from "@/components/Page1";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import Page4 from "@/components/Page4";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Header />

      {/* First page */}
      <Page1 />

      {/* Second Page */}
      <Page2 />
      <Page3 />
      <Page4/>
      <Footer/>
    </main>

  );
}
