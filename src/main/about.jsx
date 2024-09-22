import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function About() {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="font-medium text-zinc-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>MainVid</AlertDialogTitle>
            <AlertDialogDescription>
              We often spend a some unnecessary long amount of time scrolling
              endlessly through series of videos on Youtube searching for the
              right fit. On different occasions, it&apos;s not really worth it.
              <br />
              <br />
              <strong>Mainvid</strong> partially solves this by limiting your
              search results to just one video so you can just dive right in as
              the slogan says {":)"}
              <br />
              <br />
              This is just a fun project, nothing really serious.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="text-xs text-zinc-600 flex flex-col items-end w-full">
            <p>
              {" "}
              Have any feedback? You&apos;d mostly find me on -{" "}
              <a
                className="underline"
                href="https://linkedin.com/in/lemonconfidence"
              >
                Linkedin
              </a>{" "}
              or
              {" "}
              <a className="underline" href="https://x.com/lemonconfidence">
                probably on X
              </a>
            </p>
          </AlertDialogFooter>
          <AlertDialogCancel className="absolute top-4 border-0 p-0 h-0 right-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
