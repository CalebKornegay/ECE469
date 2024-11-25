import json
import os
import pandas as pd
from scipy.io.wavfile import write

input_files = ['utf8_out.txt', 'utf8_out1.txt']
list_of_files = []
jsondata = []

for input_file in input_files:
    with open(input_file, "r", encoding='utf-8') as file:
        i = 0
        for line in file:
            data = json.loads(line)
            jsondata.append(data)

for data in jsondata:
    xyz = data['history']
    df = pd.DataFrame(xyz)

    #print(df)
    running_total = 0.0

    #x_axis = []
    for i, val in enumerate(df["diff"]):
        running_total += float(val)
        #x_axis.append(running_total)
    
    # print(f'running_total: {running_total}')

    rate = int((len(df.z) / running_total))
    # print(f'total: {running_total} seconds')
    # print(f'rate = {rate}')
    tmp:str = data['file_name']
    person_num = int(tmp.split('_')[-2])
    #print(f'{person_num:02}')
    try:
        os.mkdir(f'data/{person_num:02}')
    except:
        a = 0
    write(f"data/{person_num:02}/{data['file_name']}.wav", rate, df.z)