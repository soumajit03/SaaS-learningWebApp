import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <SignIn
        appearance={{
          elements: {
            rootBox: "flex justify-center items-center",
            card: "bg-white rounded-xl shadow-lg p-6",
          },
        }}
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
        redirectUrl="/"
      />
    </div>
  );
}
