import Items from "./items";

describe("Items", function () {
    it('should return first item', function () {
        expect(Items.getFirstItem()).toBe("Amprex")
    });
});