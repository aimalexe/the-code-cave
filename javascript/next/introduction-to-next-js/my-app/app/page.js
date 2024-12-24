import Layout from "./navigation";

export default function Home() {
  return (
    <Layout>
      <main>
        <h1 className="text-3xl font-bold mb-6 p-2">Welcome to our Home page</h1>
        <p>Your Public API key is: {process.env.PUBLIC_API_KEY}</p>
      </main>
    </Layout>
  );
}
