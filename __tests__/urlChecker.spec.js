import { isValidUrl } from "../src/client/js/urlChecker";

describe(isValidUrl, () => {
    test("it should return true", () => {
        expect(isValidUrl('https://www.google.com')).toBe(true);
    });
    test("it should return true if the url does not start with http:// or https://", () => {
        expect(isValidUrl('www.google.com')).toBe(true);
    });
    test("it should return true if the url starts with https:// but does not include www.", () => {
        expect(isValidUrl('https://google.com')).toBe(true);
    });
    test("it should return false because it contains '!' mark", () => {
        expect(isValidUrl('http://google.com/some/file!.html')).toBe(false);
    });
    test("it should return false if there's no '.' (dots)", () => {
        expect(isValidUrl('https://wwwgooglecom')).toBe(false);
    });
});