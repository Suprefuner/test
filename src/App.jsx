export default function App() {
  return (
    <main className="grid h-screen text-center text-white bg-gray-800 place-content-center">
      <h1 className="mb-3 text-5xl">this is env</h1>
      <h2>this is env</h2>
      <p className="text-3xl">{import.meta.env.VITE_TEST}</p>
    </main>
  )
}
