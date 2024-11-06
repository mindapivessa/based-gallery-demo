import GalleryInfo from "@/components/GalleryInfo";
import Gallery from "@/components/Gallery";
import Submission from "@/components/Submission";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <GalleryInfo />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <Gallery />
        <Submission />
      </div>
    </main>
  );
}
