import kagglehub

# Download latest version
path = kagglehub.dataset_download("sripaadsrinivasan/audio-mnist")

print("Path to dataset files:", path)