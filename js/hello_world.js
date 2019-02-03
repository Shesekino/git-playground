function main() {
  console.log('Hello world!');
  console.log('a() ===', a(1, 1));
}

function a(first, second) {
  return first + second;
}

if (require.main === module) {
    main();
}

