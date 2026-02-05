import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

const limit = {
  fileSize: 1024 * 1024 * 1,
};

const fileFilter = function (req, file, callback) {
  const allowedExtension = [".jpg", ".jpeg", ".png", ".webp", ".svg", ".avif"];

  const fileName = file.originalname;

  const fileExtension = path.extname(fileName);

  if (allowedExtension.includes(fileExtension)) {
    callback(null, true);
  } else {
    callback(new Error("File format not supported"), false);
  }
};

export const upload = multer({
  storage: storage,
  limits: limit,
  fileFilter: fileFilter,
});
