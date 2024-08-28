import Footer from "./components/Footer";
import HeadBar from "./components/Header";
import Introcontainer from "./components/Introcontainer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeadBar />
      <div className="flex-grow w-full max-w-7xl mx-auto px-4">
        <Introcontainer />
      </div>
      <Footer />
    </main>
  );
}
