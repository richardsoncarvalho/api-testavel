export class ProductController {
  handle(request, response) {
    response.send([
      {
        name: "Default Product",
        description: "product description",
        price: 100,
      },
    ]);
  }
}
