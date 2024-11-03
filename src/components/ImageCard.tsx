import React from 'react';
import { ExternalLink, Heart, Download } from 'lucide-react';

interface ImageCardProps {
  image: {
    urls: { regular: string; full: string };
    alt_description: string;
    user: { name: string; links: { html: string } };
    likes: number;
  };
}

export function ImageCard({ image }: ImageCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-xl">
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <p className="font-medium mb-2">Photo by {image.user.name}</p>
          <div className="flex items-center gap-4">
            <a
              href={image.user.links.html}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-400 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Profile</span>
            </a>
            <div className="flex items-center gap-1">
              <Heart size={16} className="text-red-500" />
              <span>{image.likes}</span>
            </div>
            <a
              href={image.urls.full}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-400 transition-colors"
            >
              <Download size={16} />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}