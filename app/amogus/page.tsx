import { redirect } from "next/navigation";

export default async function Page() {
    const urls = ["https://youtu.be/dQw4w9WgXcQ?si=Sjy9hdDKQn2XOink"];

    await new Promise(resolve => setTimeout(resolve, 3000));

    redirect(urls[Math.floor(Math.random() * urls.length)]);
    
    return null;
}
