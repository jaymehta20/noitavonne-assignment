import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="mx-4 w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        <div className="space-y-6">
          <div className="flex items-center justify-center">
            <MountainIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
            <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-gray-50">
              Acme Corp
            </span>
          </div>
          <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-gray-50">
            Sign in to your account
          </h2>
          <form className="space-y-4">
            <div>
              <Label
                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                htmlFor="email"
              >
                Email address
              </Label>
              <Input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-50 dark:focus:border-indigo-500"
                id="email"
                placeholder="name@example.com"
                type="email"
              />
            </div>
            <div>
              <Label
                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                htmlFor="password"
              >
                Password
              </Label>
              <Input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-50 dark:focus:border-indigo-500"
                id="password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
            <div>
              <Link href="/">
                <Button className="w-full" type="submit">
                  Sign in
                </Button>
              </Link>
            </div>
          </form>
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            Don&apos;t have an account?
            <Link
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
              href="#"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
