import Link from "next/link";

export default function Return_Home() {
    return (
      <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
          
          <div
            className="mx-auto mt-3 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <Link
              className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
              href="/"
            >        
            ← Return to Home
          </Link>

          <p>© 2023- , Derek.</p>

        </div>
      </div>
    );
  }