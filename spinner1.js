process.stdout.write('hello from spinner1.js... \rheyyy\n');


setTimeout(() => {
  process.stdout.write('\r|    ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/    ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r\\     ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r|     ');
}, 600);

setTimeout(() => {
  process.stdout.write('\r/     ');
}, 800);

setTimeout(() => {
  process.stdout.write('\r-    ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r\\    ');
}, 1200);

setTimeout(() => {
  process.stdout.write('\r|');
}, 1400);

// ... fill in the rest yourself ...