import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Img,
} from "@react-email/components";
import * as React from "react";

interface EmailForMeProps {
  name: string;
  email: string;
  message: string;
}

export const EmailForMe = ({ name, message, email }: EmailForMeProps) => {
  return (
    <Html>
      <Head />
      <Preview>Message from your Portfolio</Preview>
      <Body>
        <Container>
          <Section>
            <Row>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi Abdalrhman,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  You have a new message from your portfolio.
                </Heading>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text style={{ textAlign: "center" }}>{`Name: ${name}`}</Text>
                <Text style={{ textAlign: "center" }}>{`Email: ${email}`}</Text>
                <Text style={{ textAlign: "center" }}>
                  {`Message: ${message}`}
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailForMe;
