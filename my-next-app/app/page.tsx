import axios from "axios";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">This is home page</div>
      </div>
    </div>
  );
}
