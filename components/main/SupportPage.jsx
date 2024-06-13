import React from "react";
import { useRouter } from "next/router";
import { Button } from "../ui/button";

const SupportPage = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <div className="w-size h-size bg-gray-900 text-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-6">Support Center</h1>
        <input
          type="text"
          placeholder="Search for help..."
          className="w-full max-w-lg p-3 text-lg border border-gray-700 rounded-lg bg-gray-800 text-white"
        />
      </div>
      <div className="flex flex-col gap-10">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Categories</h2>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-700 p-4 border border-gray-600 rounded-lg flex-1 text-center cursor-pointer hover:bg-gray-600 transition">
              Account & Security
            </div>
            <div className="bg-gray-700 p-4 border border-gray-600 rounded-lg flex-1 text-center cursor-pointer hover:bg-gray-600 transition">
              Billing & Subscriptions
            </div>
            <div className="bg-gray-700 p-4 border border-gray-600 rounded-lg flex-1 text-center cursor-pointer hover:bg-gray-600 transition">
              Soon on App
            </div>
            <div className="bg-gray-700 p-4 border border-gray-600 rounded-lg flex-1 text-center cursor-pointer hover:bg-gray-600 transition">
              Troubleshooting
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
          <div className="mb-4">
            <h3 className="text-xl font-medium">How to reset my password?</h3>
            <p className="mt-2">
              To reset your password, go to your account settings...
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">
              How to deal with artificial intelligence?
            </h3>
            <p className="mt-2">
              Maud may be an artificial intelligence, but she still has feelings
              and must be respected. Please be polite to her...
            </p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Popular Articles</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">How to set up your profile</li>
            <li className="mb-2">Fixing login issues</li>
            <li>Tips to secure your account</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Button
            variant="gradientPurple"
            className="h-9 w-1/4 rounded-md px-3 text-white "
            onClick={goHome}
          >
            Back to Home
          </Button>
        </div>
      </div>
      <div className="text-center mt-10 pt-6 border-t border-gray-700">
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p className="mt-2">
          If you have any questions or need assistance, feel free to contact us
          at
          <a
            href="mailto:support@moodvies.com"
            className="text-blue-400 hover:underline ml-1"
          >
            support@moodvies.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

  export default SupportPage;
