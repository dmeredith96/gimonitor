import { type NextPage } from "next";
import { useEffect } from "react";

interface GroupProps {
  groupName: string;
}

const Group: NextPage<GroupProps> = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="text-white">WIP: Group page</div>
    </main>
  );
};

export default Group;
