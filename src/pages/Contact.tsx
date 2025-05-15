import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
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
    const response = await fetch(backendurl + "/resend/contactme", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message!");
    }
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-5 px-6">
      <div className="max-w-xl mx-auto mt-5">
        <Card className="bg-white shadow-lg rounded-lg py-3 px-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
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
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  rows={5}
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="mt-10">
          <p className="text-gray-700">
            If you have any questions or feedback, please feel free to contact
            me.
          </p>
          <p className="text-gray-700">
            Email:{" "}
            <a href="mailto:admin@vivekwadate.com" className="text-blue-500">
              admin@vivekwadate.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
