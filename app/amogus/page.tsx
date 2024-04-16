import { redirect } from "next/navigation";

export default function Page() {
    const urls = ["https://youtu.be/dQw4w9WgXcQ?si=Sjy9hdDKQn2XOink"];

    setTimeout(() => {
        redirect(urls[Math.floor(Math.random() * urls.length)]);
    }, 500);
    
    return null;
}
