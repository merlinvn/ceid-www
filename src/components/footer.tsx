// import Link from "next/link";
// import { Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 CCEID. All rights reserved.</p>

          {/*   <Link className="hover:text-teal-500" href="#"> */}
          {/*     <Facebook className="h-6 w-6" /> */}
          {/*   </Link> */}
          {/*   <Link className="hover:text-teal-500" href="#"> */}
          {/*     <Twitter className="h-6 w-6" /> */}
          {/*   </Link> */}
          {/*   <Link className="hover:text-teal-500" href="#"> */}
          {/*     <Youtube className="h-6 w-6" /> */}
          {/*   </Link> */}
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
}
