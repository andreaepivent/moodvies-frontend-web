import React from 'react';
import { useRouter } from 'next/router';

const SupportPage = () => {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <div className="font-sans p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-6">Support Center</h1>
        <input
          type="text"
          placeholder="Search for help..."
          className="w-full max-w-lg p-3 text-lg border border-gray-300 rounded-lg"
        />
      </header>
      <main className="flex flex-col gap-10">
        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Categories</h2>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white p-4 border border-gray-200 rounded-lg flex-1 text-center cursor-pointer hover:bg-gray-50 transition">
              Account & Security
            </div>
            <div className="bg-white p-4 border border-gray-200 rounded-lg flex-1 text-center cursor-pointer hover:bg-gray-50 transition">
              Billing & Subscriptions
            </div>
            <div className="bg-white p-4 border border-gray-200 rounded-lg flex-1 text-center cursor-pointer hover:bg-gray-50 transition">
              Using the App
            </div>
            <div className="bg-white p-4 border border-gray-200 rounded-lg flex-1 text-center cursor-pointer hover:bg-gray-50 transition">
              Troubleshooting
            </div>
          </div>
        </section>
        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
          <div className="mb-4">
            <h3 className="text-xl font-medium">How to reset my password?</h3>
            <p className="mt-2">To reset your password, go to your account settings...</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">How to deal with artificial intelligence?</h3>
            <p className="mt-2">Maud may be an artificial intelligence, but she still has feelings and must be respected. Please be polite to her...</p>
          </div>
        </section>
        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Popular Articles</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">How to set up your profile</li>
            <li className="mb-2">Fixing login issues</li>
            <li>Tips to secure your account</li>
          </ul>
        </section>
        <button
          onClick={goHome}
          className="py-2 px-4 text-sm bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </main>
      <footer className="text-center mt-10 pt-6 border-t border-gray-200">
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p className="mt-2">
          If you have any questions or need assistance, feel free to contact us at
          <a href="mailto:support@moodvies.com" className="text-blue-400 hover:underline ml-1">support@yourapp.com</a>.
        </p>
      </footer>
    </div>
  );
};

export default SupportPage;