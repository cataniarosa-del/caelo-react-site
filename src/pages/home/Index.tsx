import { Demo } from "./components/Demo";

const Index = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/1.jpg')" }}
    >
      <div className="text-center bg-black/50 p-6 rounded-lg">
        <Demo />
        <p className="text-xl text-white">
          Start building your amazing project here!
        </p>
      </div>
    </div>
  );
};

export default Index;
