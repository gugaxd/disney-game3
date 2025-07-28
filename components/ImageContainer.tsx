
import React from 'react';

interface ImageContainerProps {
  imageUrl: string;
  blurLevel: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ imageUrl, blurLevel }) => {
  return (
    <div className="mb-6 aspect-square w-full rounded-lg overflow-hidden shadow-lg border-2 border-slate-700 bg-slate-900">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Guess the Disney character or movie"
          className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${blurLevel}`}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-slate-700">
            <p className="text-slate-400">Loading image...</p>
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
