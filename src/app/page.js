import HeadBar from "./components/Header";
import Introcontainer from "./components/Introcontainer";

export default function Home() {
  return (
    <>
      <HeadBar />
      <main className="w-full flex justify-center items-center px-4 md:px-8 lg:px-12">
        <div className="w-full max-w-7xl flex justify-center">
          <Introcontainer />
        </div>
      </main>
    </>
  );
}
