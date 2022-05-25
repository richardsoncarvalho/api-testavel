import { ProductController } from "controllers/products/ProductController";
import sinon from "sinon";

describe("Controllers: Products", () => {
  const productsDefault = [
    {
      name: "Default Product",
      description: "product description",
      price: 100,
    },
  ];

  describe("get() products", () => {
    it("should return a list of products", () => {
      const request = {};
      const response = {
        send: sinon.spy(),
      };

      const productsController = new ProductController();
      productsController.handle(request, response);

      expect(response.send.called).to.be.true;
      expect(response.send.calledWith(productsDefault)).to.be.true;
    });
  });
});
