import { v2 as cloudinary } from 'cloudinary';
import { resolve } from 'styled-jsx/css';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file)
      return new Response(JSON.stringify({ error: 'No file uploaded' }), {
        status: 400,
      });

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: 'notes_app' }, (error, res) => {
          if (error) reject(error);
          else resolve(res);
        })
        .end(buffer);
    });

    return new Response(JSON.stringify({ url: result.secure_url }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Upload failed' }), {
      status: 500,
    });
  }
}
