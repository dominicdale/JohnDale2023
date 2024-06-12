from PIL import Image
import os

def get_image_dimensions(file_path):
    try:
        with Image.open(file_path) as img:
            width, height = img.size
            print(f"Dimensions of {file_path}: {width} x {height}")
    except FileNotFoundError:
        print(f"File '{file_path}' not found.")
    except Exception as e:
        print(f"Error: {e}")

# Example usage:
if __name__ == "__main__":
    file_path = input("Enter the path to the image file: ").strip()
    if os.path.isfile(file_path):
        get_image_dimensions(file_path)
    else:
        print(f"File '{file_path}' not found.")
