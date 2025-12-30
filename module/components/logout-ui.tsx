"use client";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { type ReactNode } from "react";

export default function Logout({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const router = useRouter();

  const handleLogut = () => {
    signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <span className={className} onClick={handleLogut}>
      {children}
    </span>
  );
}
