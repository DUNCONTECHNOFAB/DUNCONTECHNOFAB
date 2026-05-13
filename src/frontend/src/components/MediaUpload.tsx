import { Button } from "@/components/ui/button";
import { useMediaUpload } from "@/hooks/useMediaUpload";
import { CheckCircle2, Upload, X } from "lucide-react";
import { useRef } from "react";
import { toast } from "sonner";

interface MediaUploadProps {
  accept: "image" | "video";
  label?: string;
  onSuccess?: (url: string) => void;
  currentSrc?: string;
  className?: string;
}

export function MediaUpload({
  accept,
  label = "Upload Media",
  onSuccess,
  currentSrc,
  className = "",
}: MediaUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    selectedFile,
    previewUrl,
    uploadProgress,
    isUploading,
    error,
    handleFileSelect,
    triggerUpload,
    reset,
  } = useMediaUpload({
    accept,
    onUpload: (url) => {
      toast.success("Upload complete!", {
        description:
          accept === "image"
            ? "Image updated successfully."
            : "Video uploaded successfully.",
      });
      onSuccess?.(url);
    },
  });

  const activeSrc = previewUrl ?? currentSrc ?? null;
  const acceptAttr = accept === "image" ? "image/*" : "video/*";

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
  }

  return (
    <div
      className={`rounded-lg border border-border bg-card/50 p-3 ${className}`}
      data-ocid="media_upload.panel"
    >
      <p className="text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </p>

      {/* Current / Preview */}
      {activeSrc && (
        <div className="mb-2 rounded-md overflow-hidden border border-border relative group">
          {accept === "image" ? (
            <img
              src={activeSrc}
              alt="preview"
              className="w-full h-28 object-cover"
            />
          ) : (
            <video src={activeSrc} className="w-full h-28 object-cover">
              <track kind="captions" />
            </video>
          )}
          {selectedFile && (
            <button
              type="button"
              onClick={reset}
              aria-label="Remove selected file"
              className="absolute top-1 right-1 bg-card/80 rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-smooth"
            >
              <X className="w-3.5 h-3.5 text-foreground" />
            </button>
          )}
        </div>
      )}

      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept={acceptAttr}
        className="hidden"
        onChange={onFileChange}
        data-ocid="media_upload.input"
      />

      {/* Actions */}
      <div className="flex gap-2 flex-wrap">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => inputRef.current?.click()}
          className="text-xs h-7 px-2 border-primary/30 text-primary hover:bg-primary/5"
          data-ocid="media_upload.upload_button"
        >
          <Upload className="w-3 h-3 mr-1" />
          {selectedFile ? "Change" : "Select File"}
        </Button>

        {selectedFile && !isUploading && uploadProgress < 100 && (
          <Button
            type="button"
            size="sm"
            onClick={triggerUpload}
            className="text-xs h-7 px-2 bg-accent hover:bg-accent/90 text-accent-foreground"
            data-ocid="media_upload.submit_button"
          >
            Upload
          </Button>
        )}

        {uploadProgress === 100 && (
          <span
            className="flex items-center gap-1 text-xs text-accent font-semibold"
            data-ocid="media_upload.success_state"
          >
            <CheckCircle2 className="w-3.5 h-3.5" /> Uploaded
          </span>
        )}
      </div>

      {/* Progress bar */}
      {(isUploading || (uploadProgress > 0 && uploadProgress < 100)) && (
        <div className="mt-2">
          <div
            className="h-1.5 w-full rounded-full bg-muted overflow-hidden"
            data-ocid="media_upload.loading_state"
          >
            <div
              className="h-full rounded-full bg-accent transition-all duration-200"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {uploadProgress}% uploading…
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <p
          className="text-xs text-destructive mt-1"
          data-ocid="media_upload.error_state"
        >
          {error}
        </p>
      )}

      {selectedFile && (
        <p
          className="text-xs text-muted-foreground mt-1 truncate"
          title={selectedFile.name}
        >
          {selectedFile.name}
        </p>
      )}
    </div>
  );
}
