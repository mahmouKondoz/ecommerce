'use client'

import Link from "next/link";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContext } from "react";
import { NavContext } from "../../../../Context/NavContext";

export default function ProfileMenu() {
  const router = useRouter();
  let context = useContext(NavContext)
      if (!context) return null;
     let  { islogin, setIslogin } = context

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIslogin(null);
    router.push("/Login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <User className="w-6 h-6" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">

        {islogin ? (
          <DropdownMenuItem onClick={handleLogout}>
            Sign out
          </DropdownMenuItem>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link href="/Login">Login</Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/Register">Register</Link>
            </DropdownMenuItem>
          </>
        )}

      </DropdownMenuContent>
    </DropdownMenu>
  );
}