import subprocess
import os

BASE_URL: str = "https://www.ee.columbia.edu/~dpwe/sounds/tidigits/"
test_speakers: list[str] = ["MDL", "MEH", "FDC", "FEA"]
training_speakers: list[str] = ["MAE", "MBD", "MCB", "FAC", "FBH", "FCA"]
speakers: list[str] = test_speakers + training_speakers
file_names: list[str] = ["O"] + [str(i) for i in range(10)]
file_types: list[str] = ["A", "B"]

for speaker in speakers:
    for name in file_names:
        for type in file_types:
            output_file: str = os.path.join('testing' if speaker in test_speakers else 'training', f"{speaker}_{type}{name}.wav")
            subprocess.run(["curl", "-L", f"{BASE_URL}{speaker}/{speaker}_{type}{name}.wav", "-o", output_file])
