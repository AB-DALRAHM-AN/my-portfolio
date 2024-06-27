import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface MessageUsEmailProps {
  name: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const MessageUsEmail = ({ name }: MessageUsEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to {`Abdelrahman's`} Portfolio</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={620}
                src={`https://abdalrahman.tech/opengraph-image.png`}
                alt="Header Image"
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {name},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Welcome to my personal portfolio!
                </Heading>

                <Text style={paragraph}>
                  {`I'm`} Abdelrahman, a Business Administration student from
                  Ain Shams University, passionate about web development and
                  entrepreneurship. {`I’m`} excited to share my journey and
                  projects with you.
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  Explore my portfolio to see the latest projects {`I've`} been
                  working on, read my blog for insights on business and coding,
                  and get in touch if {`you'd`} like to collaborate!
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={section} colSpan={2}>
                <a style={button} href={`https://abdalrahman.tech/blog`}>
                  Read My Blog
                </a>
              </Column>
            </Row>
          </Section>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | A.B.D.A.L.R.H.A.M.A.N | E.G.Y | www.abdalrahman.tech
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default MessageUsEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
  textDecoration: "none",
  display: "inline-block",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};
