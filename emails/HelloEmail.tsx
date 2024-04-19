import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

type MessageUsEmailProps = {
  name: string;
  email: string;
  message: string;
};

const MessageUsEmail = ({ name, email, message }: MessageUsEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Message From Portfolio.</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="my-[20px] mx-auto p-[20px] max-w-4xl">
            <Hr className="my-[16px] mx-0 w-full" />
            <Text className="text-white text-[14px] leading-[24px]">
              Hi Abdalrahman! {name} sent you a message from your Portfolio.
            </Text>
            <Hr className="my-[16px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px]">
              My Email: {email}. Here are the details:
            </Text>
            <Text className="text-[#666666] text-[12px]">{message}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MessageUsEmail;
