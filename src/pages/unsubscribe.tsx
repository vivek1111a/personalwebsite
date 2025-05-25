import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
export default function Unsubscribe() {
  // get email from url will be like this: /unsubscribe/?email=example@example.com
  const [unsubscribed, setUnsubscribed] = useState(false);
  const location = useLocation();

  // Parse query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    const backendurl = import.meta.env.VITE_TEST_BACKEND;
    const response = await fetch(backendurl + "/resend/unsubscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    if (response.ok) {
      ReactGA.event({
        category: "User",
        action: "Unsubscribed from newsletter",
        label: "newsletter_form",
      });
      setUnsubscribed(true);
    } else {
      alert("Failed to send message!");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-xl mx-auto mt-10">
        <Card className="bg-white shadow-lg rounded-lg p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Unsubscribe from my blog
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Button type="submit" className="w-full">
                Unsubscribe
              </Button>
            </form>
            {unsubscribed && (
              <p className="text-green-500 pt-4">Unsubscribed successfully!</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
