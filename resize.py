import os
from PIL import Image

def resize_image(input_path, output_path, width):
    img = Image.open(input_path)
    aspect_ratio = img.height / img.width
    new_height = int(width * aspect_ratio)
    resized_img = img.resize((width, new_height), Image.BILINEAR) 
    resized_img.save(output_path)

def convert_to_webp(input_path, output_path):
    try:
        image = Image.open(input_path)
        image.save(output_path, "webp")
        print(f"Conversion successful: {input_path} -> {output_path}")
    except Exception as e:
        print(f"Error converting {input_path} to WebP: {e}")

def process_folder(folder_path, output_folder, width):
    for root, _, files in os.walk(folder_path):
        for filename in files:
            if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
                input_path = os.path.join(root, filename)
                output_relative_path = os.path.relpath(input_path, folder_path)
                
                # Resizing
                resized_output_filename = os.path.splitext(output_relative_path)[0] + os.path.splitext(filename)[1]
                resized_output_path = os.path.join(output_folder, resized_output_filename)
                resized_output_dir = os.path.dirname(resized_output_path)
                if not os.path.exists(resized_output_dir):
                    os.makedirs(resized_output_dir)
                resize_image(input_path, resized_output_path, width)
                
                # Converting to WebP
                webp_output_filename = os.path.splitext(output_relative_path)[0] + ".webp"
                webp_output_path = os.path.join(output_folder, webp_output_filename)
                convert_to_webp(resized_output_path, webp_output_path)

if __name__ == "__main__":
    input_folder = "media/"
    output_folder = "media_resized/"
    target_width = 600

    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    process_folder(input_folder, output_folder, target_width)
    print("Images resized, converted to WebP, and saved to", output_folder)
