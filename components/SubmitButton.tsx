"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
      type="submit"
      disabled={pending}
    >
      {pending ? "Submiting..." : "Submit"}
    </button>
  );
};

export default SubmitButton;
