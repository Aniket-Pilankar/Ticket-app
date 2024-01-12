"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  categoriesOptions,
  ticketingStatusOptions,
} from "../_constants/constants";
import { Category, TicketStatus } from "../TicketPage/types";
import { useRouter } from "next/navigation";

interface InitialState {
  title: string;
  description: string;
  priority: number;
  progress: number;
  status: TicketStatus | "";
  category: Category | "";
}

const initialState: InitialState = {
  title: "",
  description: "",
  priority: 1,
  progress: 0,
  status: "",
  category: "",
};

const TicketForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log("value:", value);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }
      router.push("/");
    } catch (e) {
      console.log("e:", e);
    }
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-3 w-1/2" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="title">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows={5}
        />
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select One
          </option>
          {categoriesOptions.map((category, _index) => (
            <option key={_index} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        <label>Priority</label>
        <div className="flex gap-2 items-center">
          <label htmlFor="radio_1" className="mt-0">
            1
          </label>
          <input
            type="radio"
            name="priority"
            id="radio_1"
            value={1}
            onChange={handleChange}
            checked={1 === Number(formData.priority)}
          />
          <label htmlFor="radio_2" className="mt-0">
            2
          </label>
          <input
            type="radio"
            name="priority"
            id="radio_2"
            value={2}
            onChange={handleChange}
            checked={2 === Number(formData.priority)}
          />
          <label htmlFor="radio_3" className="mt-0">
            3
          </label>
          <input
            type="radio"
            name="priority"
            id="radio_3"
            value={3}
            onChange={handleChange}
            checked={3 === Number(formData.priority)}
          />
          <label htmlFor="radio_4" className="mt-0">
            4
          </label>
          <input
            type="radio"
            name="priority"
            id="radio_4"
            value={4}
            onChange={handleChange}
            checked={4 === Number(formData.priority)}
          />
          <label htmlFor="radio_5" className="mt-0">
            5
          </label>
          <input
            type="radio"
            name="priority"
            id="radio_5"
            value={5}
            onChange={handleChange}
            checked={5 === Number(formData.priority)}
          />
        </div>
        <input
          type="range"
          name="progress"
          value={formData.progress}
          onChange={handleChange}
          min={0}
          max={100}
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="" disabled>
            Select One
          </option>
          {ticketingStatusOptions.map((status, _index) => (
            <option key={_index} value={status.value}>
              {status.label}
            </option>
          ))}
        </select>
        <input type="submit" className="btn" value={"Create Ticket"} />
      </form>
    </div>
  );
};

export default TicketForm;
