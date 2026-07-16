import Navbar from "./components/layout/Navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white">

      <Navbar />

      <section className="h-screen flex items-center justify-center">

        <h1 className="text-7xl font-black">
          Home
        </h1>

      </section>

    </div>
  );
}

export default App;