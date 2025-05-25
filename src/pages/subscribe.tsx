import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";

type FormValues = {
  email: string;
};

export default function Subscribe() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormValues>({
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    const backendurl = import.meta.env.VITE_TEST_BACKEND;
    const response = await fetch(backendurl + "/resend/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      ReactGA.event({
        category: "User",
        action: "Signed up for newsletter",
        label: "newsletter_form",
      });
      //redirect to /blog
      alert("Thankyou for subscribing");
      navigate("/blog");
    } else {
      if (response.status == 400) {
        alert("Email already Subscribed");
      } else {
        alert("Failed to send message!");
      }
    }
    setFormData({ email: "" });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-xl mx-auto mt-10">
        <Card className="bg-white shadow-lg rounded-lg p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Subscribe to my blog
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
