function getArticleGenerator(articles) {
  let content = $("div#content");

  return function() {
    if (articles.length > 0) {
      content.append($("<article>").text(articles.shift()));
    }
  };
}
