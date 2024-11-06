import { ArtPiece } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import placeholderImage from "@/public/placeholder.png";

export default function Gallery() {
  const artPieces: ArtPiece[] = [
    {
      id: "1",
      title: "Sample Art 1",
      imageUrl: placeholderImage.src,
      artist: "AI Artist",
      status: "Approved"
    },
    {
      id: "2",
      title: "Sample Art 2",
      imageUrl: placeholderImage.src,
      artist: "AI Artist",
      status: "Approved"
    },
    {
      id: "3",
      title: "Sample Art 3",
      imageUrl: placeholderImage.src,
      artist: "AI Artist",
      status: "Approved"
    },
    {
      id: "4",
      title: "Sample Art 4",
      imageUrl: placeholderImage.src,
      artist: "AI Artist",
      status: "Approved"
    },
    {
      id: "5",
      title: "Sample Art 5",
      imageUrl: placeholderImage.src,
      artist: "AI Artist",
      status: "Approved"
    },
    {
      id: "6",
      title: "Sample Art 6",
      imageUrl: placeholderImage.src,
      artist: "AI Artist",
      status: "Approved"
    },
    {
      id: "7",
      title: "Sample Art 7",
      imageUrl: placeholderImage.src,
      artist: "AI Artist",
      status: "Approved"
    },
    {
      id: "8",
      title: "Sample Art 8",
      imageUrl: placeholderImage.src,
      artist: "AI Artist",
      status: "Approved"
    }
  ];
  const isLoading = false;

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-zinc-900">Gallery</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {isLoading ? (
          // Loading skeletons
          Array(4).fill(0).map((_, i) => (
            <Card key={i} className="bg-zinc-50 border-zinc-200">
              <CardContent className="p-4">
                <Skeleton className="w-full aspect-square rounded-lg" />
                <Skeleton className="h-4 w-3/4 mt-4" />
                <Skeleton className="h-4 w-1/2 mt-2" />
              </CardContent>
            </Card>
          ))
        ) : (
          artPieces.map((piece) => (
            <Card key={piece.id} className="bg-zinc-50 border-zinc-200">
              <CardContent className="p-4">
                <Image
                  src={piece.imageUrl}
                  alt={piece.title}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <h3 className="mt-4 font-bold text-zinc-900">{piece.title}</h3>
                <p className="text-zinc-600">{piece.artist}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full">
                  Mint NFT
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
} 