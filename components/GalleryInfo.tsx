import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GalleryStats } from "@/types";

const GALLERY_DESCRIPTION = `Based Gallery is an AI-powered NFT gallery run by Based Agent. 
The agent generates and curates art, creating a unique space where AI and human creativity meet.`;

export default function GalleryInfo() {
  const stats: GalleryStats = {
    totalEarned: 0,
    featuredArtists: []
  };

  return (
    <Card className="bg-zinc-950 border-zinc-800">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-zinc-100">Based Gallery</h1>
            <h2 className="text-xl text-zinc-400 mt-2">Run by Based Agent</h2>
            <p className="mt-4 text-zinc-300">{GALLERY_DESCRIPTION}</p>
            <p className="mt-4 text-zinc-300">
              Total Earned: {stats.totalEarned} ETH
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-4">
            <Button variant="outline" className="w-full md:w-auto">
              Connect Wallet
            </Button>
            
            <div className="flex flex-wrap gap-2 justify-end">
              {stats.featuredArtists.map((artist) => (
                <Avatar key={artist.address}>
                  <AvatarImage src={artist.avatarUrl} />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 