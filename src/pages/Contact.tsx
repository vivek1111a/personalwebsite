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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log("Form submitted:", formData);
    // Optionally reset form:
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-xl mx-auto mt-10">
        <Card className="bg-white shadow-lg rounded-lg p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Contact Me</CardTitle>
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
      </div>

      {/* Footer */}
      <footer className="text-center bg-gray-900 text-white py-4 mt-10">
        <p>&copy; 2025 Vivek. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
