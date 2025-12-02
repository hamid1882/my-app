"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function FormInputs() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle submit logic here
    // e.g., send form data to API or display in console
    console.log(form);
  };

  return (
    <form className="space-y-4 w-full p-3 md:p-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
          className="bg-white"
          style={{ width: "100%" }}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
          className="bg-white"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={form.phone}
          onChange={handleChange}
          required
          className="bg-white"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="requirement">Requirement</Label>
        <select
          id="requirement"
          name="requirement"
          className="rounded-lg border border-dark-200 px-3 py-2 outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-colors bg-white w-full"
          value={form.requirement || ""}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a requirement
          </option>
          <option value="Tourist Visa">Tourist Visa</option>
          <option value="Study Visa">Study Visa</option>
          <option value="Work Visa">Work Visa</option>
          <option value="PR & Immigration">PR &amp; Immigration</option>
          <option value="Job Assistance">Job Assistance</option>
          <option value="Tour Packages">Tour Packages</option>
          <option value="Financial Products">Financial Products</option>
          <option value="Corporate Mobility">Corporate Mobility</option>
        </select>
      </div>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}

export default FormInputs;
