import { redirect } from "next/navigation";

export default async function Page() {
    const urls = ["https://youtu.be/dQw4w9WgXcQ?si=Sjy9hdDKQn2XOink"];

    useTimeout(() => {
        redirect(urls[Math.floor(Math.random() * urls.length)]);
    }, 500);
    
    return null;
}
