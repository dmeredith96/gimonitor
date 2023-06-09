import { Button, Container, Input } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const [teamName, setTeamName] = useState("");

  const handleTeamNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTeamName(event.target.value);
  };

  const onFindTeamButtonClicked = () => {
    console.log(teamName);
  };

  return (
    <>
      <Head>
        <title>GIMonitor</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            GI<span className="text-[hsl(280,100%,70%)]">Monitor</span>
          </h1>
          <h3 className="sm:text font-bold text-white">
            Making it easy to track your Group Ironman squad
          </h3>
          <Container className="flex flex-col gap-2" maxW="md" centerContent>
            <Input
              value={teamName}
              onChange={handleTeamNameChange}
              placeholder="Enter your Group Ironman team name"
              size="md"
              background="white"
              maxW="xs"
            />
            <Link href={`/groups/${teamName}`}>
              <Button maxW="xs" onClick={onFindTeamButtonClicked}>
                Find my group
              </Button>
            </Link>
          </Container>
        </div>
      </main>
    </>
  );
};

export default Home;
