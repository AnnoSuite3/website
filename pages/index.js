import Link from "next/link";
import Head from "next/head";
import { Logo, Heading, Container, Description } from "../components";

export default () => (
  <Container>
    <Head>
      <title>AnnoSuite - This Winter</title>
    </Head>
    <section>
      <Logo>AnnoSuite</Logo>
      <Heading>
        Coming&nbsp;
        <br />
        <span>This Winter.</span>
      </Heading>
      <Description>Digital life revolutionized</Description>
    </section>
  </Container>
);
