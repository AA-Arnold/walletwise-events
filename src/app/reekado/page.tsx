import MainLayout from "@/components/templates/MainLayout/MainLayout";
import { Clock3 } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <MainLayout>
      <main className="flex min-h-[calc(80vh-160px)] items-center justify-center px-4 py-12">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
            <Clock3 className="h-10 w-10 text-purple-600" />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Event Details Coming Soon
          </h1>

          <p className="mt-3 text-gray-600">
            We&apos;re putting the finishing touches together. Information about
            this event, including schedule, speakers, and registration details,
            will be available soon.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/"
              className="rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-purple-700"
            >
              Back to Events
            </Link>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default page;
