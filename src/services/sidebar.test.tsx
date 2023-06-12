import * as ReactDom from "react-dom";
import { SideNavbar } from "../components";

describe("SideNavbar component test", () => {
  let container: HTMLDivElement = document.createElement("div");

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDom.render(<SideNavbar />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Render correctly initial document", () => {
    const image = document.querySelector("img");
    const link = document.querySelectorAll("a");
    expect(image).toHaveLength(1);
    expect(link).toHaveLength(5);
  });
});
