import { NextApiRequest } from "next";

import { NextApiResponseServerIo } from "@/types";
import { currentProfilePages } from "@/lib/current-profile-pages";
import { db } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIo,
) {
    // console.log("RECIEVEDEDEDEDED");
  
    // res?.socket?.server?.io?.emit("channelKey", "hello");

   
}