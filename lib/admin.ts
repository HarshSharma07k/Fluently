import { currentUser } from "@clerk/nextjs/server";

const adminEmails = [
  "harshsharma29072003@gmail.com"
];

export const getIsAdmin = async () => {
  const user = await currentUser();

  if (!user) {
    return false;
  }

  const userEmail = user?.emailAddresses?.[0]?.emailAddress;

  if (!userEmail) {
    return false;
  }

  return adminEmails.includes(userEmail);
};