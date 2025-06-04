const optimizeCloudinaryImage = (url, width = 600) => {
  if (!url) return "";

  const parts = url.split("/upload/");
  if (parts.length !== 2) return url; // Not a Cloudinary URL or unexpected format

  return `${parts[0]}/upload/f_auto,q_auto,w_${width}/${parts[1]}`;
};

export { optimizeCloudinaryImage };
