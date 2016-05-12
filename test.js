casper.test.begin(
  'Static page test',
  1,
  function suite(test) {
    casper.start('http://127.0.0.1:8000', function () {
      test.assertTitle(
        'San Francisco - front card integration',
        'homepage title is the one expected'
      );
    });

    casper.then(function () {
    });

    casper.run(function () {
      test.done();
    });
  }
);
