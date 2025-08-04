import { auth, clerkClient } from "@clerk/nextjs/server";

const adminEmails = [
  "harshsharma29072003@gmail.com"
];

export const getIsAdmin = async () => {
  const { userId } = await auth();

  if (!userId) {
    return false;
  }

  const user = await clerkClient.users.getUser(userId);

  const email = user?.emailAddresses?.[0]?.emailAddress;

  if (!email) {
    return false;
  }

  return adminEmails.includes(email);
};