function main() {
  console.log('Hello world!');
  console.log('b() ===', b( 1 ));
}

function b( param ) {
  return param * param;
}

if (require.main === module) {
    main();
}

