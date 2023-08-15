import os
from PIL import Image

def resize_image(input_path, output_path, width):
    img = Image.open(input_path)
    aspect_ratio = img.height / img.width
    new_height = int(width * aspect_ratio)
    resized_img = img.resize((width, new_height), Image.BILINEAR) 
    resized_img.save(output_path)

def process_folder(folder_path, output_folder, width):
    for root, _, files in os.walk(folder_path):
        for filename in files:
            if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
                input_path = os.path.join(root, filename)
                output_relative_path = os.path.relpath(input_path, folder_path)
                output_filename = os.path.splitext(output_relative_path)[0] + "--small" + os.path.splitext(filename)[1]
                output_path = os.path.join(output_folder, output_relative_path)
                output_dir = os.path.dirname(output_path)
                if not os.path.exists(output_dir):
                    os.makedirs(output_dir)
                resize_image(input_path, output_path, width)

if __name__ == "__main__":
    input_folder = "media/"
    output_folder = "media_resized/"
    target_width = 1000

    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    process_folder(input_folder, output_folder, target_width)
    print("Images resized and saved to", output_folder)
