import { handleSubmit } from "../src/client/js/formHandler";

describe(handleSubmit, () => {
    test("check if the function is defined", () => {
        expect(handleSubmit).toBeDefined
    });
});