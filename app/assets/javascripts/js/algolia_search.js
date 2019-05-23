var client = algoliasearch('DEBD39694U', '6db35c5c8b76f93c534b37222f3c7f96');
var index = client.initIndex('dev_WINE');
index.search('something', { hitsPerPage: 10, page: 0 })
  .then(function searchDone(content) {
    console.log(content)
  })
  .catch(function searchFailure(err) {
    console.error(err);
  });
