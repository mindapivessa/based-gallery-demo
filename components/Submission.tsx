"use client";

import { useState } from "react";
import { ArtPiece } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import placeholderImage from "@/public/placeholder.png";

export default function Submission() {
  const [prompt, setPrompt] = useState("");
  const [submissions, setSubmissions] = useState<ArtPiece[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement DALL-E image generation
    const newSubmission: ArtPiece = {
      id: Date.now().toString(),
      title: prompt,
      imageUrl: placeholderImage.src,
      artist: "AI",
      status: "Pending"
    };
    setSubmissions(prev => [...prev, newSubmission]);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-zinc-900">Submissions</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {submissions.map((piece) => (
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
              <p className="text-sm text-zinc-500">Status: {piece.status}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-zinc-50 border-zinc-200">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your art prompt..."
              className="bg-zinc-100 border-zinc-300"
            />
            <Button type="submit" className="w-full">
              Generate Art
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 