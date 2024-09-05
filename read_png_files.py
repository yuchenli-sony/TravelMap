import os

# 设置 Photo 文件夹的路径
photo_folder = 'Photo'

# 获取 PNG 文件名列表
png_files = [f for f in os.listdir(photo_folder) if f.lower().endswith('.png') or f.lower().endswith('.jpg') or f.lower().endswith('.jpeg')]

# 打印文件名
print("PNG 文件列表：")
for filename in png_files:
    print(filename)

# 打印文件数量
print(f"\n共找到 {len(png_files)} 个 PNG 文件。")