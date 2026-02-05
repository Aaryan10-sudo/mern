export const handleSingleFile = (req, res) => {
  try {
    const file = req.file;
    res.status(200).json({
      message: "File uploaded successfully",
      link: `http://localhost:8080/${file.filename}`,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
