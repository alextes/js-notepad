const FeedMe = require("feedme");
const http = require("http");

const cookie =
  "_ga=GA1.2.663714391.1509098194; adidasCountrySelectorStats=Return=; ASPSESSIONIDCQSTCTAC=CPIDNAEDADDCICDCMBAMAPPO; ak_bmsc=D29CD393D25D3C91EFEE085A52884CBC0215F3B8AD6400007C35F759B4340371~plvxD+R+qL6Bv7XlyPGHMlPPqece6a2+K78mPLLE6fvgq9pGjHohluSrISVX1mPnp+iO8PwIjk02fDEQUnAbzf+LrENNxY8lZuKNyEr513zwQjsJHXVreXWYFzBnMlXozNRlUjy649bzyHhpr/827h5jild1db+OrTuLPCdvT4PMz8P5NDH1LkgybB3iBVqAFKqgYRWzWHpGU5PlDitnNkdXpPzMcSfRt1zWIT3tG6YzM=";

http
  .get(
    {
      host: "www.adidas.com",
      path: "/allday/blog/feed/",
      headers: {
        cookie,
      },
    },
    res => {
      const parser = new FeedMe(true);
      res.pipe(parser);
      parser.on("end", () => {
        console.log(JSON.stringify(parser.done()));
      });
    },
  )
  .on("error", e => {
    console.error(e);
  });
