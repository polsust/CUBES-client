import Link from "next/link";

interface FooterProps { }

export default function Footer({ }: FooterProps) {
  return (
    <div className="flex absolute bottom-0 flex-col justify-center items-center p-5 w-full text-white bg-secondary">
      <p className="my-2">
        <Link href="/temp" className="text-white">
          Charte de confidentialité
        </Link>
        |
        <Link href="/temp" className="text-white">
          Contact
        </Link>
      </p>

      <p className="my-2">Copyright © 2023</p>
    </div>
  );
}
