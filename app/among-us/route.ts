import { redirect } from "next/navigation";

export async function GET() {
    const urls = ["https://youtu.be/dQw4w9WgXcQ?si=Sjy9hdDKQn2XOink"];

    redirect(urls[Math.floor(Math.random() * urls.length)]);
}
