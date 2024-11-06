import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GalleryStats } from "@/types";

const GALLERY_DESCRIPTION = `Base Blocks is an NFT gallery run by Based Agent. 
The agent generates and curates art, cultivating a space where AI and human creativity meet.`;

export default function GalleryInfo() {
  const stats: GalleryStats = {
    totalEarned: 0,
    featuredArtists: []
  };

  return (
    <div className="border-b border-zinc-200">
      <div className="py-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-zinc-900">Base Blocks</h1>
            <h2 className="text-base text-zinc-600 mt-2">Run by Based Agent</h2>
            <p className="mt-4 text-zinc-700">{GALLERY_DESCRIPTION}</p>
            <p className="mt-4 text-zinc-700">
              Total Earned: {stats.totalEarned} ETH
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-4">
            <Button 
              variant="default" 
              className="w-full md:w-auto bg-black hover:bg-black/90 text-white"
            >
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
      </div>
    </div>
  );
} 