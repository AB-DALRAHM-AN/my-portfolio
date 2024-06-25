"use client";

import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

type FormInput = {
  name: string;
  email: string;
  message: string;
};

export default function ContactUsForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormInput>();

  async function onSubmit(formData: FormInput) {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        reset();
        toast({
          title: "Successfully sent! 🚀",
          description:
            "Thank you for reaching out. Check your email",
          action: <ToastAction altText="Ok">Ok</ToastAction>,
        });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Failed to send message.",
        description: "Please try again later.",
        action: <ToastAction altText="Ok">Ok</ToastAction>,
      });
    }
  }

  return (
    <section className="flex flex-col justify-center items-center md:gap-8 gap-5 mx-10 my-16 md:mx-40 md:my-24">
      <div className="flex justify-center items-center flex-col mb-10 w-full">
        <div className="flex flex-col justify-start items-start mb-5">
          <h1 className="text-4xl font-bold mb-3">Keep In Touch.</h1>
          <span className="text-muted-foreground text-base">
            {"I'm"} currently specializing in{" "}
            <span className="text-primary">Front-end Development</span>.
          </span>
          <span className="text-muted-foreground text-base">
            Feel free to get in touch and talk more about your projects.
          </span>
        </div>
        <form
          className="flex flex-col justify-center items-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="user-box">
            <label>Name</label>
            <Input
              required
              placeholder="Your Name"
              type="text"
              {...register("name")}
              className="md:w-[450px] w-[300px]"
            />
          </div>
          <div className="user-box">
            <label>Email</label>
            <Input
              placeholder="Your Email"
              required
              type="email"
              {...register("email")}
              className="md:w-[450px] w-[300px]"
            />
          </div>
          <div className="user-box">
            <label>Message</label>
            <Textarea
              required
              placeholder="Your Message"
              {...register("message")}
              className="md:w-[450px] w-[300px]"
            />
          </div>
          <Button
            variant={'outline'}
            className="md:w-[400px] w-[200px] bg-card hover:bg-card-foreground/10"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </form>
      </div>
    </section>
  );
}
