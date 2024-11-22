const soundPaths = [];
for (let i = 1; i <= 60; i++) {
  for (let k = 0; k < 10; k++) {
    for (let j = 0; j < 50; j++) {
      const padded_i = i.toString().padStart(2, "0");
      soundPaths.push(`./data/${padded_i}/${k}_${padded_i}_${j}.wav`);
      console.log(
        `'${k}_${padded_i}_${j}': require('./data/${padded_i}/${k}_${padded_i}_${j}.wav'),`
      );
    }
  }
}
