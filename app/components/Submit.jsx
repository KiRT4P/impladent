import { useFormStatus } from "react-dom";

export default function Submit() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending} className="border-2 border-primary rounded-2xl float-right hover:bg-primary hover:text-white duration-300 cursor-pointer px-8 py-2 text-primary w-min uppercase text-lg">
            {pending ? "Odosielam..." : "Odoslať"}
        </button>
    );
}