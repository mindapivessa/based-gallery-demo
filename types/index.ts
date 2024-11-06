export interface ArtPiece {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  mintUrl?: string;
  status?: 'Approved' | 'Pending' | 'Rejected';
  walletAddress?: string;
}

export interface GalleryStats {
  totalEarned: number;
  featuredArtists: {
    address: string;
    avatarUrl: string;
  }[];
} 