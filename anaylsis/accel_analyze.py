import pandas as pd
from matplotlib import pyplot as plt
from scipy.io.wavfile import write
import numpy as np
from pydub import AudioSegment
from pydub.playback import play
import math

#plt.figure(figsize=(30, 30)) 

columns = ["diff","x", "y", "z"]
df = pd.read_csv("aaron_parmar.csv", usecols=columns)

x_axis = []

runningtotal = 0.0
#print(df["diff"])

for i, val in enumerate(df["diff"]):
    if val == "diff":
        continue
    runningtotal += float(val)
    x_axis.append(runningtotal)

print(f'lenx = {len(x_axis)} lendf = {len(df.x)}')
#print("Contents in csv file: ", df)
#plt.plot(df.x,scalex=x_axis)
#plt.scatter(x_axis, df.x)
plt.plot(x_axis, df.x)
#plt.tight_layout()
plt.savefig('x.png')
print("saved x")
plt.clf()

plt.plot(x_axis, df.y)
plt.tight_layout()
plt.savefig('y.png')
print("saved y")
plt.clf()

plt.plot(x_axis, df.z)
plt.tight_layout()
plt.savefig('z.png')
print("saved z")
plt.clf()


rate = len(df.x) // int(runningtotal)
print(f'total: {runningtotal} int: {int(runningtotal)}')
print(f'rate = {rate}')
#rate = 3000
#print(f'div: {len(df.x) / rate}')
# Write the audio data to a WAV file
write("outputx.wav", rate, df.x)
write("outputy.wav", rate, df.y)
write("outputz.wav", rate, df.z)
#song = AudioSegment.from_wav("output.wav")
#print('playing sound using  pydub')
#play(song)

df.x = df.x + 1

#for i, val in enumerate(df.x):
#    if val == 0:
#        df.x[i] = min    

#print(f'min = {min}')

print(df.x)

db = 20 * np.log10((df.x) / 0.000001)

db_list = db * (df.x-1)
print(db_list-120)

write('output_db.wav', rate, db_list-120)
