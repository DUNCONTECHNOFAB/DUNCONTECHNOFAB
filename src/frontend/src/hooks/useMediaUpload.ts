import { useCallback, useRef, useState } from "react";

interface UseMediaUploadOptions {
  accept: "image" | "video";
  onUpload?: (url: string) => void;
}

interface UseMediaUploadReturn {
  selectedFile: File | null;
  previewUrl: string | null;
  uploadProgress: number;
  isUploading: boolean;
  error: string | null;
  handleFileSelect: (file: File) => void;
  triggerUpload: () => void;
  reset: () => void;
}

export function useMediaUpload({
  accept,
  onUpload,
}: UseMediaUploadOptions): UseMediaUploadReturn {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleFileSelect = useCallback(
    (file: File) => {
      setError(null);
      setUploadProgress(0);
      setSelectedFile(file);

      if (accept === "image") {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewUrl(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        // For video, use object URL
        const objectUrl = URL.createObjectURL(file);
        setPreviewUrl(objectUrl);
      }
    },
    [accept],
  );

  const triggerUpload = useCallback(() => {
    if (!selectedFile) {
      setError("Please select a file first.");
      return;
    }
    setIsUploading(true);
    setUploadProgress(0);
    setError(null);

    let progress = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(intervalRef.current!);
        setUploadProgress(100);
        setIsUploading(false);
        // Simulate a CDN URL
        const fakeCdnUrl =
          previewUrl ??
          `https://cdn.duncantechnofab.in/media/${Date.now()}-${selectedFile.name}`;
        onUpload?.(fakeCdnUrl);
      } else {
        setUploadProgress(progress);
      }
    }, 200);
  }, [selectedFile, previewUrl, onUpload]);

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setSelectedFile(null);
    setPreviewUrl(null);
    setUploadProgress(0);
    setIsUploading(false);
    setError(null);
  }, []);

  return {
    selectedFile,
    previewUrl,
    uploadProgress,
    isUploading,
    error,
    handleFileSelect,
    triggerUpload,
    reset,
  };
}
