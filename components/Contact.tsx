"use client";

import emailjs from "@emailjs/browser";
import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, email, message } = formData;

    emailjs
      .sendForm(
        "service_x0lafah",
        "template_jj2rphk",
        e.target,
        "THfAeD0Ao7nQTjgJZ"
      )
      .then(
        () => {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          toast({
            description: "Message sent successfully",
            variant: "default",
          });
        },
        (error) => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }
      );
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="flex flex-col justify-center items-center md:gap-8 gap-5 mx-10 my-32 md:mx-40 md:my-24">
      <div className="flex justify-center items-center flex-col mb-10 w-full">
        <div className="flex flex-col justify-start items-start mb-5">
          <h1 className="text-4xl font-bold mb-3">Keep In Touch.</h1>
          <p className="text-muted-foreground text-base">
            {`I'm`} currently specializing in{" "}
            <span className="text-primary">Front-end Development</span>.
          </p>
          <p className="text-muted-foreground text-base">
            Feel free to get in touch and talk more about your projects.
          </p>
        </div>
        <form
          className="flex flex-col justify-center items-center gap-4"
          onSubmit={handleSubmit}
        >
          <div className="user-box">
            <label>Name</label>
            <Input
              required
              name="name"
              placeholder="Your Name"
              type="text"
              onChange={handleInputChange}
              className="md:w-[450px] w-[300px]"
            ></Input>
          </div>
          <div className="user-box">
            <label>Email</label>
            <Input
              placeholder="Your Email"
              required
              name="email"
              type="email"
              className="md:w-[450px] w-[300px]"
              onChange={handleInputChange}
            ></Input>
          </div>
          <div className="user-box">
            <label>Message</label>
            <Textarea
              required
              name="message"
              placeholder="Your Message"
              onChange={handleInputChange}
              className="md:w-[450px] w-[300px]"
            ></Textarea>
          </div>
          <Button variant={"secondary"} className="md:w-[400px] w-[200px]" type="submit">
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
